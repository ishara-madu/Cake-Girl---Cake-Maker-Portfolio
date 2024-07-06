var navbar = document.getElementById("navbar");
var menubtn = document.getElementById("menubtn");
var logo = document.getElementById("logo");
var nav_right = document.getElementById("nav-right");
var hero = document.getElementsByClassName("active");
let width = screen.width;
menubtn.addEventListener("click", function () {
    logo.style.display = "none";
    nav_right.style.display = "flex";
    navbar.style.alignItems = "baseline";
    navbar.style.justifyContent = "center";
    menubtn.style.display = "none";

});
if (width < 900) {

    nav_right.addEventListener("click", function () {
        logo.style.display = "flex";
        nav_right.style.display = "none";
        navbar.style.alignItems = "";
        navbar.style.justifyContent = "";
        menubtn.style.display = "flex";
    });

}