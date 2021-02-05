
let prevScrollPosition = window.pageYOffset;
window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition < 0) {
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