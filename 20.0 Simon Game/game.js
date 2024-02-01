var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userPattern = [];

function nextSequence(){
    var randomNumber = Math.round(Math.random() * (4 - 1) + 0);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour)
}

$('.btn').click(function(){
    var userChosenColour = $(this).attr("id");
    userPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function playSound(color){
    var audio = new Audio("./sounds/" + color + ".mp3");
    audio.play();   
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");

    setTimeout(function (){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

