var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls;
balance = 0;  
let currentRound = 0; 

function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    var die1Image = document.querySelector(".img1"); 
    var die2Image = document.querySelector(".img2");
    
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWonOne() {
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars.";
      balance += 5;
    } else {
      outcome = "Its a draw, nobody wins or loses.";
    }

    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome;
}

function whoWonMulti() {
    if (dieSum <= 5){
      outcome = "You lose, please pay me " + 5 + " dollars.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you " + 5 + " dollars.";
      balance += 5;
    } else {
      outcome = "Its a draw, nobody wins or loses.";
    }

    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome + "<br>Balance: $" + balance;
  }

function letsPlay1(){ 
  rollDice();
  whoWonOne();
}

function letsPlay2() { 
  rollDice();
  whoWonMulti();
}

function runNRounds() { 
  var numRounds = parseInt(prompt("Please enter a valid number of rounds."));
  
  balance = 0; 
  currentRound = 0;

  for (let i = 0; i < numRounds; i++){
    rollDice();
    whoWonMulti();
    currentRound++;
  }
 
  document.querySelector("h3").innerHTML = "After " + numRounds + " rounds...<br>Your final balance is: $" + balance;
}
