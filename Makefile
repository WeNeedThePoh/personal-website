add-books:
	@GO111MODULE=off go run scripts/add_books.go

update-theme:
	@git submodule update --init --recursive

run:
	@hugo server -D
