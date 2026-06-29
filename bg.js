const bg = Math.random() * 10 - 5;
const wait = 50;
const moveX = Math.cos(bg); 
const moveY = Math.sin(bg); 
let currentX = 0;
let currentY = 0;

function move() {
    // Move 1 pixel per interval
    currentX += moveX; 
    currentY += moveY; 
    
    // Update background position
    document.body.style.backgroundPosition = currentX + "px " + currentY + "px";
}

setInterval("move()", wait);