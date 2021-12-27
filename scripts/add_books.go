package main

import (
	"encoding/csv"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"regexp"
	"strconv"
	"strings"
	"time"

	"github.com/PuerkitoBio/goquery"
	"golang.org/x/net/html"
)

const (
	booksPath    = "content/books"
	booksCSVPath = "../../Downloads/books.csv"
	templatePath = "archetypes/books.md"
	limit        = 5
)

var (
	spaces  = regexp.MustCompile(`\s+`)
	special = regexp.MustCompile(`[^\w\s]+`)
)

type (
	Book struct {
		ID          int
		Title       string
		Subtitle    string
		Rating      int
		Author      string
		ISBN13      int
		Publisher   string
		PublishedAt int
		ReadAt      time.Time
		URL         string
		Filename    string
		Tags        Tags
		Image       Image
	}

	Image struct {
		url string
		alt string
	}

	Tags struct {
		tags []string
	}
)

func main() {
	var (
		logger     = log.Default()
		addedBooks = getAddedBooks(logger)
		records    = readCsvFile(logger, booksCSVPath)
		books      = parseRecords(logger, records, addedBooks)
	)

	addBooks(logger, books)
}

func readCsvFile(logger *log.Logger, filePath string) [][]string {
	logger.Print("reading csv file...")

	f, err := os.Open(filePath)
	if err != nil {
		log.Fatal("Unable to read input file "+filePath, err)
	}
	defer f.Close()

	csvReader := csv.NewReader(f)
	records, err := csvReader.ReadAll()
	if err != nil {
		log.Fatal("Unable to parse file as CSV for "+filePath, err)
	}

	return records
}

func parseRecords(logger *log.Logger, records [][]string, toIgnore []string) []Book {
	logger.Print("Parsing records...")

	books := make([]Book, 0)

	for i, r := range records {
		// ignore columns line and non-read books
		if i == 0 || r[18] != "read" {
			continue
		}

		lines := strings.Split(r[1], ":")

		filename := strings.ToLower(lines[0])
		filename = special.ReplaceAllString(filename, "")
		filename = strings.Replace(filename, " ", "_", -1)

		if ok := contains(toIgnore, filename); ok {
			continue
		}

		subtitle := ""
		if len(lines) == 2 {
			subtitle = lines[1]
		}

		id, _ := strconv.Atoi(r[0])
		rating, _ := strconv.Atoi(r[7])
		year, _ := strconv.Atoi(r[12])
		readAt, _ := time.Parse("2006/01/02", r[14])

		tags := Tags{}
		if r[16] != "" {
			tags.tags = strings.Split(r[16], ", ")
		}

		parsedIsnb := strings.Replace(r[6], "=", "", -1)
		trimedIsnb := strings.Trim(parsedIsnb, "\"")
		isbn, _ := strconv.Atoi(trimedIsnb)

		b := Book{
			ID:          id,
			Title:       removeSpaces(lines[0]),
			Subtitle:    removeSpaces(subtitle),
			Author:      removeSpaces(r[2]),
			ISBN13:      isbn,
			Rating:      rating,
			Publisher:   removeSpaces(r[9]),
			PublishedAt: year,
			ReadAt:      readAt,
			Filename:    filename,
			Tags:        tags,
		}

		b.URL = fmt.Sprintf("https://www.goodreads.com/book/show/%d", b.ID)
		b.setCover()

		logger.Printf("parsed: %s", b.Title)
		books = append(books, b)

		if len(books) == limit {
			break
		}

		time.Sleep(time.Second)
	}

	return books
}

func getAddedBooks(logger *log.Logger) []string {
	logger.Print("Fetching added books...")

	files, err := ioutil.ReadDir(booksPath)
	if err != nil {
		log.Fatal(err)
	}

	books := make([]string, 0)

	for _, file := range files {
		if file.Name() == "_index.md" {
			continue
		}

		book := strings.Replace(file.Name(), ".md", "", -1)

		books = append(books, book)
	}

	return books
}

func addBooks(logger *log.Logger, bs []Book) {
	logger.Print("adding books...")

	for _, b := range bs {
		template := getTemplate()

		data := []byte(fmt.Sprintf(
			string(template),
			b.ID,
			b.Title,
			b.Subtitle,
			b.Author,
			b.ISBN13,
			b.PublishedAt,
			b.Publisher,
			b.ReadAt.Format("2006-01-02"),
			b.Rating,
			b.URL,
			b.Image.url,
			b.Image.alt,
			b.Tags.string(),
		))

		path := fmt.Sprintf("%s/%s.md", booksPath, b.Filename)
		err := os.WriteFile(path, data, 0644)
		if err != nil {
			log.Fatal(err)
		}

		logger.Printf("added: %s.md", b.Filename)
	}
}

func getTemplate() []byte {
	template, err := os.ReadFile(templatePath)
	if err != nil {
		log.Fatal("Unable to read input file "+templatePath, err)
	}

	return template
}

func contains(books []string, book string) bool {
	for _, b := range books {
		if b == book {
			return true
		}
	}

	return false
}

func removeSpaces(s string) string {
	s = strings.TrimSpace(s)
	return spaces.ReplaceAllString(s, " ")
}

func (t *Tags) string() string {
	if len(t.tags) == 0 {
		return "[]"
	}

	s := strings.Join(t.tags, "\", \"")
	return fmt.Sprintf("[\"%s\"]", s)
}

func (b *Book) setCover() {
	resp, err := http.Get(b.URL)
	if err != nil {
		log.Fatal(err)
	}

	if resp.StatusCode != 200 {
		log.Fatal(resp.Body)
	}

	httpBody := resp.Body

	node, err := html.Parse(httpBody)
	if err != nil {
		log.Fatal(err)
	}
	document := goquery.NewDocumentFromNode(node)
	img := document.Find(".leftContainer").First().Find("img").First()
	b.Image = Image{
		url: img.AttrOr("src", ""),
		alt: img.AttrOr("alt", ""),
	}
}
