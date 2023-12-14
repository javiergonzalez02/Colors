let background = document.querySelector("body");
let button = document.querySelector("button");
let colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FF33F0", "#33FFF5", "#F5FF33", "#FF8C33", "#338CFF", "#8333FF"];

background.style.backgroundColor = "red";

const cambiarColorFondo = () => {
    background.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

button.addEventListener("click", cambiarColorFondo);