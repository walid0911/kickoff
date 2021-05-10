
const navSlide = () => {
    const menuBtn = document.querySelector(".burger");
    const nav = document.querySelector(".nav-bar");


    menuBtn.addEventListener('click', () => {

        //toggle nav
        nav.classList.toggle('nav-active');

        //burger animation
        menuBtn.classList.toggle('toggle')
    });
    
}

navSlide();
