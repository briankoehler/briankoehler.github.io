
const toggleMenu = () => {
    let menu = document.getElementById('mobile-menu');
    if (menu.style.top === "0vh") {
        menu.style.top = "-100vh";
        menu.style.opacity = 0;
    }
    else {
        menu.style.top = "0vh";
        menu.style.opacity = 1;
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