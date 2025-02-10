const heart = document.getElementById("heart");

let colors = ["red", "orange", "yellow", "green", "blue", "violet"];
let i = 0;

setInterval(() => {
    heart.style.stroke = colors[i];
    i = (i + 1) % colors.length;
}, 500);
