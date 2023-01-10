
const player1Roll = Math.floor(Math.random() * 6) + 1;
const FirstDiceImage = "C:/Users/Sandile Mabaso/Desktop/DOOM FOLDER/" + player1Roll + ".png";
document.querySelector("img").setAttribute("src", FirstDiceImage);

const player2Roll = Math.floor(Math.random() * 6) + 1;
const SecondDiceImage = "C:/Users/Sandile Mabaso/Desktop/DOOM FOLDER/" + player2Roll + ".png";
document.querySelectorAll("img")[1].setAttribute("src", SecondDiceImage);

if (player1Roll > player2Roll) {
  document.querySelector("#refresh").innerHTML = "Player One wins!";
} else if (player2Roll > player1Roll) {
  document.querySelector("#refresh").innerHTML = "Player Two wins!";
} else {
  document.querySelector("#refresh").innerHTML = "Draw";
}