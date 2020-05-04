$(document).ready(function(){
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
  });


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
})