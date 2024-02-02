var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userPattern = [];

var begin = false;
var level = 0; //lvl counter

function nextSequence(){
    userPattern = [] //to reset on every iteration

    level++;
    $("#level-title").text("Level " + level);

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
    checkAnswer(userPattern.length-1);
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

$(document).keypress(function(){
    if (!begin){
        $("#level-title").text("Level" + level);
        nextSequence();
        started = true;
    }   
});

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userPattern[currentLevel]){
        console.log("user answer correct");
        if (userPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("user answer incorrect");
        playSound("wrong")

        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press any key to restart");
        gameReset();
    }
}

function gameReset(){
    level = 0;
    gamePattern = [];
    begin = false;
}






