totalDrums = document.querySelectorAll(".drum").length;

for(var i=0;i<totalDrums;i++){

//code for detecting button press
document.querySelectorAll(".drum")[i].addEventListener("click",eventhandler);

function eventhandler(){ // general function defination
    //alert("You poked me");

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

}
/**
 * another way of function def which is anonymous function
 * document.querySelectorAll(".drum")[i].addEventListener("click", function(){
 * alert("You poked me");
 * });
 */


//code for detecting keypress
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
});

function makeSound(key){
    switch(key){
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'k':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
    }
}
}

function buttonAnimation(currentkey){
    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}