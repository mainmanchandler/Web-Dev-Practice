var randomDiceNumber1 = Math.round(Math.random() * (6 - 1) + 1);
var randomDiceNumber2 = Math.round(Math.random() * (6 - 1) + 1);

console.log(randomDiceNumber1);
console.log(randomDiceNumber2);
console.log("./images/dice" + randomDiceNumber1 + ".png");

document.getElementsByClassName("img1")[0].setAttribute("src", "./images/dice" + randomDiceNumber1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "./images/dice" + randomDiceNumber2 + ".png");

if (randomDiceNumber1 > randomDiceNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomDiceNumber2 > randomDiceNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}