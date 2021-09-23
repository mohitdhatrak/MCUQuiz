var readlineSync = require("readline-sync");
const chalk = require("chalk");

var userName = readlineSync.question("What's your name ? ");
console.log(chalk.red("Hi", userName + ", here's a quiz on MCU. Just type the correct option number."));
console.log("  ");

var score = 0;

function quiz(question, options, answer) {
 var userAnswer = readlineSync.keyInSelect(options, chalk.yellow(question));
 if(userAnswer+1 === answer) {
   console.log(chalk.green("That's right :)"));
   score++;
 }
 else {
   console.log(chalk.red("That's wrong :("));
   console.log(chalk.green("The correct option is", answer));
 }
  console.log(chalk.cyan("score =", score));
  console.log("-------------------------------------------");
  console.log("  ");
}

var questionBank = [
  {
    question: "Who is Black Panther’s sister? ",
    options: ["Ramonda","Shuri","Nakia","Okoye"],
    answer: 2
  }, 
  {
    question: "What were the three items Rocket claims he needs in order to escape the prison? ",
    options: ["A security card, a fork, and a prosthetic leg","A security band, a battery, and a prosthetic leg","A pair of binoculars, a detonator, and a prosthetic leg","A knife, cable wires, and a prothestic leg"],    
    answer: 2
  }, 
  {
    question: "What is the name of the little boy Tony befriends while stranded in the Iron Man 3? ",
    options: ["Harry","Henry","Harley","Holden"],
    answer: 3
  },
  {
    question: "The Flerkens who are a race of extremely dangerous aliens, resembles what? ",
    options: ["Cats","Ducks","Racoons","Snakes"],
    answer: 1
  },
  {
    question: "What type of doctor is Stephen Strange ",
    options: ["Cardiothoracic Surgeon","Trauma Surgeon","Plastic Surgeon","Neurosurgeon"],    
    answer: 4 
  }
];

for(var i = 0; i < questionBank.length; i++) {
  quiz(questionBank[i].question, questionBank[i].options, questionBank[i].answer); 
}

console.log(chalk.magenta("Your Final score is", score + " out of 5"));
console.log("  ");
console.log(chalk.cyan("Here's the Leaderboard - ")); 
var leaderBoard = [
  {
    name: "Rohit ",
    score: 4
  },
  {
    name: "Mahesh Deshmukh ",
    score: 2
  },
  {
    name: "Dummy ",
    score: 0
  }
];

for(i = 0; i < leaderBoard.length; i++) {
  console.log(chalk.green(leaderBoard[i].name, leaderBoard[i].score));
}

console.log("  ");

var isHighScoreBroken = false;

for(i = 0; i < leaderBoard.length ; i++) {
  if(score > leaderBoard[i].score) {
    console.log(chalk.yellow("Congratulations, you have secured rank", i+1, "on the leaderboard! If want your name on the leaderboard, send me a screenshot of your score. Thank you!"));
    isHighScoreBroken = true;
    break;
  }
}

if(isHighScoreBroken = false) {
  console.log(chalk.yellow("Thank you for playing the quiz! Did you find it too easy or too tough? Let me know :) "));
}