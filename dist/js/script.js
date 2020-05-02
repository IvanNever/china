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