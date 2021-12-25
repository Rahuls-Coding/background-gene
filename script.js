var css = document.querySelector("h3");
var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var body = document.getElementById("gradient");

function setgradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")" + ";";

}

color1.addEventListener("input", function(){
    setgradient();
})

color2.addEventListener("input", function(){
    setgradient();
})

