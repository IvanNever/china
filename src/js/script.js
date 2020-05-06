
$(document).ready(function(){

    //Hamburger menu
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.promo__menu'),
        menuItem = document.querySelectorAll('.promo__menu-item'),
        hamburger = document.querySelector('.promo__hamburger');

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('promo__menu_active');
            hamburger.classList.toggle('promo__hamburger_active');
            setTimeout(() => hamburger.classList.toggle('promo__hamburger_active_visible'), 500);


        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.toggle('promo__menu_active');
                hamburger.classList.toggle('promo__hamburger_active');
                setTimeout(() => hamburger.classList.toggle('promo__hamburger_active_visible'), 500);
            })
        })
    });


    //Slick slider
    $('.review__inner').slick({
        slidesToShow: 3,
        centerMode: true,
        speed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev-arrow.png" alt="prev-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next-arrow.png" alt="next-arrow"></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });

    //Send forms
    $('form').on('submit', function(e){
        e.preventDefault();
    });

    function sendForm (form) {
        $(form).validate({
            rules: {
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                name: '*Пожалуйста введите свое имя',
                phone: '*Пожалуйста укажите номер телефона',
                email: {
                    required: '*Пожалуйста введите свою почту',
                    email: '*Укажите правильный адрес почты'
                },
            },
            submitHandler: function() {
                $.ajax({
                    type: "POST",
                    url: "mailer/smart.php",
                    data: $(form).serialize()
                }).done(function() {
                    $('form').find("input").val("");
                    $('.overlay, #success').fadeIn('slow');
                    $('form').trigger('reset');
                });
                return false;
              }
        });
    };

    sendForm('#consultation-form');
    sendForm('#feedback-form');

    //Modal
    $('.modal__close').on('click', function() {
        $('.overlay, .modal').fadeOut('slow');
    });

    //Smooth scroll and page up
    $(window).scroll( function() {
        if($(this).scrollTop() > 1200) {
            $('.page-up').fadeIn();
        } else {
            $('.page-up').fadeOut();
        }
    });
    $(function(){
        $("a[href^='#']").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
    });

  });
