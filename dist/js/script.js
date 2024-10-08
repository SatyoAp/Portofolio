const navBar = document.querySelector(".navbar");

window.addEventListener('scroll',()=>{
    const positionWindow = window.scrollY > 0;
    navBar.classList.toggle('scrolling-active',positionWindow);
    sideBar.classList.remove('menu-active');
});

const menuBar = document.querySelector(".ri-menu-line");
const sideBar = document.querySelector(".navigations");

menuBar.addEventListener("click",  () => {
    sideBar.classList.toggle("menu-active");
});

const iconClose = document.querySelector(".ri-close-line");

iconClose.addEventListener('click',() => {
    sideBar.classList.remove('menu-active');
});

// AOS
AOS.init();