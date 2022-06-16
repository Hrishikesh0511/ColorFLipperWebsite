const hex = ['0', '1','2', '3', '4', '5', '6', '7', '8', '9', "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color")


btn.addEventListener('click',function()
{
    const randomColor=getRandomColor();
    console.log(randomColor);
    document.body.style.backgroundColor=randomColor;
    color.textContent=randomColor;
    color.style.color=randomColor;
    function getRandomColor()
    {
        var str="#"
        for(var i=0;i<6;i++)
        {
            str+=hex[Math.floor(Math.random()*hex.length)];

        }
        return str;
    }
})
