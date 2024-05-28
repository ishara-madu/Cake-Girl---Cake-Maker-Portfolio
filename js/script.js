var navbar = document.getElementById("navbar");
var nav = document.getElementById("nav");
var menubtn = document.getElementById("menubtn");
var logo = document.getElementById("logo");
var nav_right = document.getElementById("nav-right");
var hero = document.querySelector(".menuclose");
let width = screen.width;
menubtn.addEventListener("click", function () {
    logo.style.display = "none";
    nav_right.style.display = "flex";
    navbar.style.alignItems = "baseline";
    navbar.style.justifyContent = "center";
    menubtn.style.display = "none";

});
if (width < 900) {

    hero.addEventListener("click", function () {
        logo.style.display = "flex";
        nav_right.style.display = "none";
        navbar.style.alignItems = "";
        navbar.style.justifyContent = "";
        menubtn.style.display = "flex";
    });

}


checkdot(false);
function checkdot(btn) {
    document.querySelector(".d1").style.background = "rgb(210, 47, 216)";
    for (var x = 1; x < 5; x++) {
        var checkbtn = document.getElementById("dot" + x);
        var cakeleft = document.querySelector(".cake-1");
        var cakeright = document.querySelector(".cake-2");
        var dot = document.querySelector(".d" + x);
        var backcake = document.querySelector(".back-cake");
        if (checkbtn.checked == true) {
            var y = x -1;
            var z = x +1;
            if(y < 1){
                y = 4;
            }
            if(z == 5){
                z = 1;
            }
            backcake.style.background ="url(../img/cakes/cake_"+x+".jpeg)";
            cakeleft.src = "./img/cakes/cake_"+y+".jpeg";
            cakeright.src = "./img/cakes/cake_"+z+".jpeg";
            backcake.style.backgroundPosition ="center";
            backcake.style.backgroundSize ="cover";
            backcake.style.backgroundRepeat ="no-repeat";
            dot.style.background = "rgb(210, 47, 216)";
        } else {
            dot.style.background = "#999696";
        }
    }
}
function onImage(){
    for(var x =1;x<5;x++){
        var checkbtn = document.getElementById("dot" + x);
        if (checkbtn.checked == true) {
            x = x+1;
            document.getElementById("dot" + x).checked = true;
        }
    }
}
setInterval(function () {
    var checkbtn1 = document.getElementById("dot1");
    var checkbtn2 = document.getElementById("dot2");
    var checkbtn3 = document.getElementById("dot3");
    var checkbtn4 = document.getElementById("dot4");
    if (checkbtn1.checked == true) {
        document.getElementById("dot2").checked = true;
    }else if(checkbtn2.checked == true){
        document.getElementById("dot3").checked = true;
    }else if(checkbtn3.checked == true){
        document.getElementById("dot4").checked = true;
    }else{
        document.getElementById("dot1").checked = true;
    }
    checkdot();
}, 5000);