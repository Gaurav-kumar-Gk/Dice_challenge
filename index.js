//random number generator
var n = Math.random()*6;
var n1 = Math.random()*6;

//random file name image
var randomImage1=Math.floor(n+1);
var randomImage2=Math.floor(n1+1);

// variable define for each selected image
var img1=document.querySelector(".img1");
var img2=document.querySelector(".img2");

// for image 1

img1.setAttribute("src","./images/dice"+ randomImage1 +".png");

// for image 2

img2.setAttribute("src","./images/dice"+ randomImage2 +".png");

// printing who will win

if(randomImage1===randomImage2){
    document.querySelector("h1").innerHTML="Match tied";
}
else if(randomImage1>randomImage2){
    document.querySelector("h1").innerHTML="player 1 won!";
}
else{
    document.querySelector("h1").innerHTML="player 2 won!";
}

