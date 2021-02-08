
const toggleMenu = (): boolean => {
    let menu: HTMLElement = document.getElementById('mobile-menu');
    if (menu.style.top === '0vh') {
        menu.style.top = '-100vh';
        menu.style.opacity = '0';
        document.body.style.height = 'auto';
        document.body.style.overflow = 'visible';
        document.getElementById('content').classList.remove('blur');
        document.getElementById('navbar').classList.remove('blur');
    }
    else {
        menu.style.top = '0vh';
        menu.style.opacity = '1';
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
        document.getElementById('content').classList.add('blur');
        document.getElementById('navbar').classList.add('blur');
    }
    return true;
}

let prevScrollPosition: number = window.pageYOffset;
window.onscroll = (): void => {
    let currentScrollPosition: number = window.pageYOffset;
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
