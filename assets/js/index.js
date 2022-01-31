const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navLogo = document.querySelector('#nav-logo');

// mostra o menu mobile
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// mostra menu ativo quando scroll
const highlightMenu = () => {
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu= document.querySelector('#about-page');
    const batgutsMenu = document.querySelector('#batguts-page');
    let scrollPos = window.scrollY
    console.log(scrollPos);
    // adiciona a classe highlight nos itens do menu
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return ;
    } else if(window.innerWidth > 960 && scrollPos < 1300) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        batgutsMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 2345) {
        batgutsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    if(element && window.innerWidth < 960 && scrollPos < 600 || element) {
    element.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// fechar mobile menu ao clicar em um item
const fecharMenu = () => {
    const menuBar = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBar) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', fecharMenu);
navLogo.addEventListener('click', fecharMenu);