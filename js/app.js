$(document).foundation();

$(document).ready(function() {
   $('#submit').click(function(event) {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                "key": "E_EQdpzFpBiqDiRC7f1h5w",
                "message": {
                    "html":  'Nome: ' + $('#name').val() + '<br>' + 'Email: ' + $('#email').val() + '<br>' +  ' Mensagem: <br>' + $('#message').val(),
                    "subject": $('#subject').val(),
                    "from_email": "me@pmealha.com",
                    "from_name": 'Pedro Website',
                    "to": [
                        {
                            "email": "me@pmealha.com",
                            "name": "pedro",
                            "type": "to"
                        }
                    ]
                }
            }

        }).done(function(response) {
            if($('#subject').val() == "" || $('#name').val() == "" || $('#email').val() == "" || $('#message').val() == "") {
                $("#formulario").append("<p id='mensagem_erro'>Fill all the spaces, please!</p>")
            } else if (response[0]['status'] == 'sent'){
                if($("#mensagem_erro")) {
                    $("#mensagem_erro").css("display", "none");
                }
             $("#submit").css('display', 'none');
                $("#formulario").trigger('reset');
             $("#formulario").append("<p id='mensagem_sucesso'>Your message was sent! Now just wait and relax, you will get an answer very soon!</p>")

         }

            //   console.log(response[0]['status']);
         // console.log(response);
            // if you're into that sorta thing
        });
    });


    $('.fast').mouseenter(function () {
        $('.fast img').fadeTo(500,0.40 ,function () {
            $('.fast img').attr("src", "img/fast_logo2.png");
        }).fadeTo(500,0.8);
    });

    $('.fast').mouseleave(function () {
        $('.fast img').fadeTo(500,0.40, function () {
            $('.fast img').attr("src", "img/fast_logo.png");
        }).fadeTo(500,0.8);

    });

    $('.sicla').mouseenter(function () {
        $('.sicla img').fadeTo(500,0.40 ,function () {
            $('.sicla img').attr("src", "img/sicla_logo2.png");
        }).fadeTo(500,0.8);
    });

    $('.sicla').mouseleave(function () {
        $('.sicla img').fadeTo(500,0.40, function () {
            $('.sicla img').attr("src", "img/sicla_logo.png");
        }).fadeTo(500,0.8);

    });

    $('.runi').mouseenter(function () {
        $('.runi img').fadeTo(500,0.40 ,function () {
            $('.runi img').attr("src", "img/runi_logo2.png");
        }).fadeTo(500,0.8);
    });

    $('.runi').mouseleave(function () {
        $('.runi img').fadeTo(500,0.40, function () {
            $('.runi img').attr("src", "img/runi_logo.png");
        }).fadeTo(500,0.8);

    });

    $('.curta').mouseenter(function () {
        $('.curta img').fadeTo(500,0.40 ,function () {
            $('.curta img').attr("src", "img/curta.png");
        }).fadeTo(500,0.8);
    });

    $('.curta').mouseleave(function () {
        $('.curta img').fadeTo(500,0.40, function () {
            $('.curta img').attr("src", "img/curta_2.png");
        }).fadeTo(500,0.8);
    });

    $('.sugar').mouseenter(function () {
        $('.sugar img').fadeTo(500,0.40 ,function () {
            $('.sugar img').attr("src", "img/sugar_logo2.png");
        }).fadeTo(500,0.8);
    });

    $('.sugar').mouseleave(function () {
        $('.sugar img').fadeTo(500,0.40, function () {
            $('.sugar img').attr("src", "img/sugar_logo.png");
        }).fadeTo(500,0.8);
    });




    $('.your-class').on('swipe', function (event, slick, direction) {
       currentSlide = $('.your-class').slick('slickCurrentSlide');
       if(direction == "right"){
           $('.your-class').slick('slickPrev');
           currentSlide = $('.your-class').slick('slickCurrentSlide');
           //console.log(currentSlide);
           if (currentSlide == 1) {
               $('div .page_2').css("height", "100em");

               $('.slick-list.draggable').css('height', '70em');
               $('#footer').css("background-color", "#2A2B2E");
               $('#titulo').animate({"opacity": 0, "left": "+=50px"}, "fast", function () {
                   $(this).css("left", -50);
                   $(this).html("Skills");
               });
               $('#titulo').animate({"opacity": 1, "left": "+=50px"}, "fast");

               animacoes();


               //escrever();

           } else if (currentSlide == 2) {
               $('.slick-list .draggable').css('height', '132vh');
               $('div .page_2').css("height", "150vh");
               $('div .page_3').css("height", "100em");
               $('.slick-list.draggable').css('height', '50em');
               $('#footer').css("background-color", "#29333B");
               $('#titulo').animate({"opacity": 0, "left": "+=50px"}, "fast", function () {
                   $(this).css("left", -50);
                   $(this).html("Work");
               });
               $('#titulo').animate({"opacity": 1, "left": "+=50px"}, "fast");
               setTimeout(
                   function () {
                       reset();
                   }, 500)
           } else if (currentSlide == 3) {

               $("#submit").css('display', 'block');
               $("#mensagem_sucesso").css('display', 'none');

               $('div .page_4').css("height", "100em");

               $('.slick-list.draggable').css('height', '61em');
               $('#footer').css("background-color", "#3F3F3F");

               $('#titulo').animate({"opacity": 0, "left": "+=50px"}, "fast", function () {
                   $(this).css("left", -50);
                   $(this).html("Contact");
               });
               $('#titulo').animate({"opacity": 1, "left": "+=50px"}, "fast");
               setTimeout(
                   function () {
                       reset();
                   }, 500)
           } else if (currentSlide == 0) {
               $('.slick-list.draggable').css('height', '60em');
               $('#footer').css("background-color", "#192E3B");
               $('#titulo').animate({"opacity": 0, "left": "+=50px"}, "fast", function () {
                   $(this).css("left", -50);
                   $(this).html("Home");
               });
               $('#titulo').animate({"opacity": 1, "left": "+=50px"}, "fast");
           }
           //console.log('up');


           //PARA BAIXO
       } else if (direction == "left"){


               $('.your-class').slick('slickNext');
               currentSlide = $('.your-class').slick('slickCurrentSlide');


               if (currentSlide == 1) {

                   $('div .page_2').css("height", "100em");

                   $('.slick-list.draggable').css('height', '70em');
                   $('#footer').css("background-color", "#2A2B2E");
                   $('#titulo').animate({"opacity": 0, "left": "-=50px"}, "fast", function () {
                       $(this).css("left", 50);
                       $(this).html("Skill");

                   });
                   $('#titulo').animate({"opacity": 1, "left": "-=50px"}, "fast");
                   animacoes();

                   // escrever();

               } else if (currentSlide == 2) {
                   $('.slick-list .draggable').css('height', '132vh');
                   $('div .page_2').css("height", "150vh");
                   $('div .page_3').css("height", "100em");
                   $('.slick-list.draggable').css('height', '50em');
                   $('#footer').css("background-color", "#29333B");
                   $('#titulo').animate({"opacity": 0, "left": "-=50px"}, "fast", function () {
                       $(this).css("left", 50);
                       $(this).html("Work");

                   });
                   $('#titulo').animate({"opacity": 1, "left": "-=50px"}, "fast");
                   setTimeout(
                       function () {
                           reset();
                       }, 500)

               } else if (currentSlide == 3) {

                   $('div .page_4').css("height", "100em");
                   $("#submit").css('display', 'block');
                   $("#mensagem_sucesso").css('display', 'none');
                   $('.slick-list.draggable').css('height', '61em');
                   $('#footer').css("background-color", "#3F3F3F");

                   $('#titulo').animate({"opacity": 0, "left": "-=50px"}, "fast", function () {
                       $(this).css("left", 50);
                       $(this).html("Contact");
                   });
                   $('#titulo').animate({"opacity": 1, "left": "-=50px"}, "fast");

                   setTimeout(
                       function () {
                           reset();
                       }, 500)
               } else if (currentSlide == 0) {
                   $('.slick-list.draggable').css('height', '60em');
                   $('#footer').css("background-color", "#192E3B");
                   $('#titulo').animate({"opacity": 0, "left": "-=50px"}, "fast", function () {
                       $(this).css("left", 50);
                       $(this).html("Home");
                   });
                   $('#titulo').animate({"opacity": 1, "left": "-=50px"}, "fast");
                   setTimeout(
                       function () {
                           reset();
                       }, 500)
               }

               //console.log('down');
           }

    });

    var textos = ['HTML s̶u̶c̶k̶s̶', 'Semicolens are the w̶o̶r̶s̶t̶  BEST'];

    function escrever() {


        var largura = $(document).width() - 50;
        var altura = $(document).height() - 4;


        var posX = Math.floor((Math.random() * largura));
        var posY = Math.floor((Math.random() * altura));
        var index = Math.floor((Math.random() * textos.length));

        $('#type').css({'position': 'absolute', 'left': posX, 'top': posY});
        $('#type').typeIt({
            strings: [textos[index], ""],
            speed: 100,
            callback: function () {

                //escrever();
                console.log(2)

            },
            breakLines: false,
            autoStart: true,
            loop: false

        });


    }

    function animacoes() {
        $('.php').animate({width: '95%'}, "slow");
        $('.js').animate({width: '70%'}, "slow");
        $('.java').animate({width: '30%'}, "slow");
        $('.sql').animate({width: '95%'}, "slow");
        $('.gres').animate({width: '85%'}, "slow");

        $('.symfony').animate({width: '60%'}, "slow");
        $('.node').animate({width: '20%'}, "slow");
        $('.git').animate({width: '90%'}, "slow");
        $('.phps').animate({width: '90%'}, "slow");
        $('.post').animate({width: '55%'}, "slow");
    }

    function reset() {
        $('.php').css({width: '0'});
        $('.js').css({width: '0'});
        $('.java').css({width: '0'});
        $('.sql').css({width: '0'});
        $('.gres').css({width: '0'});

        $('.symfony').css({width: '0'});
        $('.node').css({width: '0'});
        $('.git').css({width: '0'});
        $('.phps').css({width: '0'});
        $('.post').css({width: '0'});
    }


    $('.slick-track').css('width', '300');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 40) {
            $("#menu1").fadeOut("fast");
        } else {
            $("#menu1").fadeIn("fast");

        }

        if ($(window).scrollTop() > 30) {
            $("#menu2").fadeOut("fast");
        } else {
            $("#menu2").fadeIn("fast");

        }
    });

    $('.conteudo_1').fadeIn("slow");



        if ($(window).width() <= 640) {

            $('.your-class').slick({
                swipe: true,
                fade: true,
                dots: true,
                appendDots: $('.dots')
            });

            $('div .page_2').css("height", "150vh");
            $('.slick-list.draggable').css('height', '60em');
        } else {
            $('.your-class').slick({
                swipe: false,
                fade: true,
                dots: true,
                appendDots: $('.dots')
            });


        }





    var currentSlide;
    var funcionar = false;

    function explode() {
        $('.cls-1').toggleClass('cls-1 teste')
    }

    setTimeout(explode, 1500);

    //BOTAO HOME


    $('#slick-slide00 button').click(function () {
        currentSlide = $('.your-class').slick('slickCurrentSlide');
        console.log(currentSlide);
        if (currentSlide != 0) {
            if ($(window).width() <= 640) {
                $('.slick-list.draggable').css('height', '60em');
                $('#footer').css("background-color", "#192E3B");
            }
            //$('.your-class').slick('slickGoTo', '0');
            $('#home').css('color', '#bcbec0');
            $('#titulo').animate({"opacity": 0, "left": "+=50px"}, "fast", function () {
                $(this).css("left", -50);
                $(this).html("Home");
            });
            $('#titulo').animate({"opacity": 1, "left": "+=50px"}, "fast");

        }
        setTimeout(
            function () {
                reset();
            },1000)
    });


    //BOTAO EXP
    $('#slick-slide01 button').click(function () {
        currentSlide = $('.your-class').slick('slickCurrentSlide');
        if ($(window).width() <= 640) {
            $('div .page_2').css("height", "100em");

            $('.slick-list.draggable').css('height', '70em');
            $('#footer').css("background-color", "#2A2B2E");

        }
        if (currentSlide == 0) {


            //$('.your-class').slick('slickGoTo', '1');
            $('#titulo').animate({"opacity": 0, "left": "-=50px"}, "fast", function () {
                $(this).css("left", 50);
                $(this).html("Skills");
            });
            $('#titulo').animate({"opacity": 1, "left": "-=50px"}, "fast");

            animacoes();



            escrever();


        } else if (currentSlide == 2 || currentSlide == 3) {

            $('.your-class').slick('slickGoTo', '1');
            $('#titulo').animate({"opacity": 0, "left": "+=50px"}, "fast", function () {
                $(this).css("left", -50);
                $(this).html("Skills");
            });
            $('#titulo').animate({"opacity": 1, "left": "+=50px"}, "fast");


            animacoes();

            escrever();
        }

    });

    //BOTAO WORK
    $('#slick-slide02 button').click(function () {
        currentSlide = $('.your-class').slick('slickCurrentSlide');
        if ($(window).width() <= 640) {
            $('.slick-list .draggable').css('height', '132vh');
            $('div .page_2').css("height", "150vh");
            $('div .page_3').css("height", "100em");
            $('.slick-list.draggable').css('height', '50em');
            $('#footer').css("background-color", "#29333B");
        }
        if (currentSlide == 1 || currentSlide == 0) {





            //$('.your-class').slick('slickGoTo', '2');
            $('#titulo').animate({"opacity": 0, "left": "-=50px"}, "fast", function () {
                $(this).css("left", 50);
                $(this).html("Work");
            });
            $('#titulo').animate({"opacity": 1, "left": "-=50px"}, "fast");


        } else if (currentSlide == 3) {

            //$('.your-class').slick('slickGoTo', '2');
            $('#titulo').animate({"opacity": 0, "left": "+=50px"}, "fast", function () {
                $(this).css("left", -50);
                $(this).html("Work");
            });
            $('#titulo').animate({"opacity": 1, "left": "+=50px"}, "fast");


        }
        setTimeout(
            function () {
                reset();
            },1000)
    });

    //BOTAO CONTACT
    $('#slick-slide03 button').click(function () {
        currentSlide = $('.your-class').slick('slickCurrentSlide');
        if (currentSlide != 3) {

            if ($(window).width() <= 640) {
                $("#submit").css('display', 'block');
                $("#mensagem_sucesso").css('display', 'none');
                $('div .page_4').css("height", "100em");
                $('#footer').css("background-color", "#3F3F3F");
                $('.slick-list.draggable').css('height', '61em');
            }



            $('.your-class').slick('slickGoTo', '3');
            $('#titulo').animate({"opacity": 0, "left": "-=50px"}, "fast", function () {
                $(this).css("left", 50);
                $(this).html("Contact");
            });
            $('#titulo').animate({"opacity": 1, "left": "-=50px"}, "fast");
        }
        setTimeout(
            function () {
                reset();
            },1000)
    });

    $('body').on('wheel', function (e) {
        if ( $(window).width() >= 640) {

            console.log(e.originalEvent.wheelDelta);
        if (funcionar === false) {

            funcionar = true;
            setTimeout(function () {
                console.log(funcionar);
                funcionar = false;
            }, 2000);

            currentSlide = $('.your-class').slick('slickCurrentSlide');
            //PARA CIMA

            if (e.originalEvent.wheelDelta / 120 > 0) {
                if (e.originalEvent.wheelDelta > 20) {
                    if (currentSlide != 0) {
                        $('.your-class').slick('slickPrev');
                        currentSlide = $('.your-class').slick('slickCurrentSlide');
                        //console.log(currentSlide);
                        if (currentSlide == 1) {


                            $('#titulo').animate({"opacity": 0, "left": "+=50px"}, "fast", function () {
                                $(this).css("left", -50);
                                $(this).html("Skills");
                            });
                            $('#titulo').animate({"opacity": 1, "left": "+=50px"}, "fast");

                            animacoes();


                            //escrever();

                        } else if (currentSlide == 2) {

                            $('#titulo').animate({"opacity": 0, "left": "+=50px"}, "fast", function () {
                                $(this).css("left", -50);
                                $(this).html("Work");
                            });
                            $('#titulo').animate({"opacity": 1, "left": "+=50px"}, "fast");
                            setTimeout(
                                function () {
                                    reset();
                                }, 1000)
                        } else if (currentSlide == 3) {

                            $('#titulo').animate({"opacity": 0, "left": "+=50px"}, "fast", function () {
                                $(this).css("left", -50);
                                $(this).html("Contact");
                            });
                            $('#titulo').animate({"opacity": 1, "left": "+=50px"}, "fast");
                            setTimeout(
                                function () {
                                    reset();
                                }, 1000)
                        } else if (currentSlide == 0) {

                            $('#titulo').animate({"opacity": 0, "left": "+=50px"}, "fast", function () {
                                $(this).css("left", -50);
                                $(this).html("Home");
                            });
                            $('#titulo').animate({"opacity": 1, "left": "+=50px"}, "fast");
                            setTimeout(
                                function () {
                                    reset();
                                }, 1000)

                        }
                        //console.log('up');


                        //PARA BAIXO
                    }
                }
            } else {
                if (e.originalEvent.wheelDelta < -20) {
                    if (currentSlide != 3) {
                        $('.your-class').slick('slickNext');
                        currentSlide = $('.your-class').slick('slickCurrentSlide');


                        if (currentSlide == 1) {


                            $('#titulo').animate({"opacity": 0, "left": "-=50px"}, "fast", function () {
                                $(this).css("left", 50);
                                $(this).html("Skill");

                            });
                            $('#titulo').animate({"opacity": 1, "left": "-=50px"}, "fast");
                            animacoes();

                            // escrever();

                        } else if (currentSlide == 2) {

                            $('#titulo').animate({"opacity": 0, "left": "-=50px"}, "fast", function () {
                                $(this).css("left", 50);
                                $(this).html("Work");

                            });
                            $('#titulo').animate({"opacity": 1, "left": "-=50px"}, "fast");
                            setTimeout(
                                function () {
                                    reset();
                                }, 1000)

                        } else if (currentSlide == 3) {
                            $('#titulo').animate({"opacity": 0, "left": "-=50px"}, "fast", function () {
                                $(this).css("left", 50);
                                $(this).html("Contact");
                            });
                            $('#titulo').animate({"opacity": 1, "left": "-=50px"}, "fast");

                            setTimeout(
                                function () {
                                    reset();
                                }, 1000)
                        } else if (currentSlide == 0) {

                            $('#titulo').animate({"opacity": 0, "left": "-=50px"}, "fast", function () {
                                $(this).css("left", 50);
                                $(this).html("Home");
                            });
                            $('#titulo').animate({"opacity": 1, "left": "-=50px"}, "fast");
                            setTimeout(
                                function () {
                                    reset();
                                }, 1000)
                        }

                        //console.log('down');
                    }
                }
            }
        }
        //return false;
    }  });




    particlesJS('particles-js',

        {
            "particles": {
                "number": {
                    "value": 30,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
            }
        }

    );

});
