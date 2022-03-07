// ------------ DECLARE VARIABLES ------------ 
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var h1Text = document.querySelector("h1");


// ------------ FUNCTIONAL PART ------------ 
// Roll a dice (Show a random dice image)
document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

// Change h1 depending on who wins
if (randomNumber1 > randomNumber2) {
    h1Text.textContent = "Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
    h1Text.textContent = "Draw!";
} else {
    h1Text.textContent = "Player 2 Wins!";
} 