const menu = document.querySelector('.menu');
menu.classList.add('aparece');
const closer = document.querySelector('.close');
const menuMobile = document.querySelector('header');

menu.addEventListener('click', ()=>{
    menu.classList.remove('aparece')
    closer.classList.add('aparece');
    menuMobile.classList.add('menuMobile');
})
closer.addEventListener('click', ()=>{
    menu.classList.add('aparece');
    closer.classList.remove('aparece');
    menuMobile.classList.remove('menuMobile');
})
