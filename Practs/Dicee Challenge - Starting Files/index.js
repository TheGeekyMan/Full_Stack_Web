//(method-1)

var randomNumber1 = Math.floor(Math.random()*7);

var randomDiceImage = "images/dice" + randomNumber1 + ".png";//will select images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage);
//console.log(randomDiceImage);   

var randomNumber2 = Math.floor(Math.random()*7);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";//will select images/dice1.png to images/dice6.png

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

//image1.setAttribute("src",randomDiceImage2);

//below code can be also used its another method (method-2)
/*var randomNumber1 = Math.floor(Math.random()*7);/*7 is used to print first 6 digits
//var randomNumber1 = Math.floor(Math.random()*6)+1; // another method for priniting digits
//console.log(randomNumber1);

if(randomNumber1 === 1){
    document.getElementById("left-img").setAttribute("src","images/dice1.png");
}
else if(randomNumber1 === 2){
    document.getElementById("left-img").setAttribute("src","images/dice2.png");
}
else if(randomNumber1 === 3){
    document.getElementById("left-img").setAttribute("src","images/dice3.png");
}
else if(randomNumber1 === 4){
    document.getElementById("left-img").setAttribute("src","images/dice4.png");
}
else if(randomNumber1 === 5){
    document.getElementById("left-img").setAttribute("src","images/dice5.png");
}
else{
    document.getElementById("left-img").setAttribute("src","images/dice6.png");
}

var randomNumber2 =Math.floor(Math.random()*7);/*7 is used to print first 6 digits
//console.log(randomNumber2);

if(randomNumber2 === 1){
    document.getElementById("right-img").setAttribute("src","images/dice1.png");
}
else if(randomNumber2 === 2){
    document.getElementById("right-img").setAttribute("src","images/dice2.png");
}
else if(randomNumber2 === 3){
    document.getElementById("right-img").setAttribute("src","images/dice3.png");
}
else if(randomNumber2 === 4){
    document.getElementById("right-img").setAttribute("src","images/dice4.png");
}
else if(randomNumber2 === 5){
    document.getElementById("right-img").setAttribute("src","images/dice5.png");
}
else{
    document.getElementById("right-img").setAttribute("src","images/dice6.png");
}*/


if(randomNumber1 === randomNumber2){
    document.querySelector('h1').textContent="Draw!";
}
if(randomNumber1 > randomNumber2){
    document.querySelector('h1').textContent="🚩	Player 1 wins!";
}
if(randomNumber1 < randomNumber2){
    document.querySelector('h1').textContent="Player 2 wins! 🚩";
}