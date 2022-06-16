const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color")
document.body.style.backgroundColor="rgb(255,255,255)";

//It listens all the events event listener function and responds according to it..
btn.addEventListener('click',function()
{
    /*Used inorder to verify whether it is targetting the body or not
    console.log(document.body);*/
    //get random number between 0-3 colors array
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];
    //used to randomly select the color from the list and apply to the background
    color.textContent=colors[randomNumber];
    color.style.color=colors[randomNumber];
    //used to specify which color we used
    function getRandomNumber()
    {
        return Math.floor(Math.random()*colors.length);
        //as math.random gives the value between (0-1) so it is multiplied by length of array 
    }

})
