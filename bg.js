const bg = Math.random() - 0.5;
const wait = 5;
let tick = 0;

while(true)
{
    if(tick > wait)
    {
        document.body.style.backgroundPositionX += Math.cos(bg);
        document.body.style.backgroundPositionY += Math.sen(bg);
    }
}