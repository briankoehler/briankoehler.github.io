function myFunction() {
    let x = document.getElementsByClassName("nav-tabs");
    if (x.className === "nav-tabs") {
        x.className += " responsive";
    }
    else {
        x.className = "nav-tabs";
    }
}