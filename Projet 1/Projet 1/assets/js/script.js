const navbarButton = document.querySelector('.nav__collapse__button');
const navbarButtonIcon = document.querySelector('.nav__collapse__button > i');

const navLinksContainer = document.querySelector('.nav__links');

let isNavbarOpen = false;

navbarButton.addEventListener('click', () => {
    if (isNavbarOpen) {
        navLinksContainer.classList.remove('nav__links--open');
        navbarButtonIcon.classList.remove('fa-xmark');
        navbarButtonIcon.classList.add('fa-bars');
    } else {
        navLinksContainer.classList.add('nav__links--open');
        navbarButtonIcon.classList.remove('fa-bars');
        navbarButtonIcon.classList.add('fa-xmark');
    }
    
    isNavbarOpen = !isNavbarOpen;
});