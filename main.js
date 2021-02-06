
const toggleMenu = () => {
    let menu = document.getElementById('mobile-menu');
    if (menu.style.top === "0vh") {
        menu.style.top = "-100vh";
        menu.style.opacity = 0;
        document.body.style.height = 'auto';
        document.body.style.overflow = 'visible';
    }
    else {
        menu.style.top = "0vh";
        menu.style.opacity = 1;
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
    }
    return true;
}


let prevScrollPosition = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset;
    console.log(currentScrollPosition);
    if (currentScrollPosition < 100) {
        return
    }
    if (prevScrollPosition < currentScrollPosition) {
        document.getElementById('navbar').style.top = '-11vh';
    }
    else {
        document.getElementById('navbar').style.top = '0vh';
    }
    prevScrollPosition = currentScrollPosition;
}