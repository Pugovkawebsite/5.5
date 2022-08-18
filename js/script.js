'use strict'

document.addEventListener("DOMContentLoaded", () => {
 const gumburger = document.querySelector('.gamburger'),
       menu = document.querySelector('.menu-for-adaptive'),
       navElem = document.querySelectorAll('.navigation-ad__elem'),
       callElem = document.querySelector('.contacts-ad__number');

        gumburger.addEventListener('click', () => {
            gumburger.classList.toggle('gamburger__active');
            menu.classList.toggle('menu-for-adaptive__active');
        });

        navElem.forEach(elem => {
            elem.addEventListener('click', () => {
                gumburger.classList.toggle('gamburger__active');
                menu.classList.toggle('menu-for-adaptive__active');
            });
        });

        callElem.addEventListener('click', () => {
            gumburger.classList.toggle('gamburger__active');
            menu.classList.toggle('menu-for-adaptive__active');
        });
});