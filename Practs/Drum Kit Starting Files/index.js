totalDrums = document.querySelectorAll(".drum").length;

for(var i=0;i<totalDrums;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",eventhandler);

function eventhandler(){ // general function defination
    //alert("You poked me");

    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();


}
/**
 * another way of function def which is anonymous function
 * document.querySelectorAll(".drum")[i].addEventListener("click", function(){
 * alert("You poked me");
 * });
 */
}