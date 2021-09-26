var readlineSync = require('readline-sync');


console.log("Welcome to the game, Do you know Sahiba? \n")

console.log("Rules: \n");

console.log("* Write all your answers in lower case ");
console.log("* If answer is in two words, give one space between them ");
console.log("* Press enter after typing your answer to go to the next question \n");
console.log("*All the best!!!! ");


console.log("----------------------\n");

var score = 0;

var userName = readlineSync.question('What is your name? ');
console.log('Welcome ' + userName + ' to Do you know Sahiba? ');

console.log("----------------------------\n");

var highScores = {
  name : "Teddy",
  score : 5
};


function play(question,answer){
var userAnswer = readlineSync.question(question); 

  if(userAnswer == answer){
      console.log("You are right");
      score++;
  }else {
    console.log("You are wrong");
    score--;
  }
  console.log("Your name: ", userName);
  console.log("Current Score: ", score);
  console.log("----------------------");
}

var questions = [{
  question : "1. Where do I live ? ",
  answer : "jamshedpur"
  },
  {
  question : "2. Who is my bestfriend ? ",
  answer : "jyoti"
  },
  {
  question : "3. Which colour I used to wear mostly ? ",
  answer : "black"
  },
  {
  question : "4. Which is my favourite flavour  ? ",
  answer : "butter scotch"
  },
  {
  question : "5. How many rings do I have on my finger right now ? ",
  answer : 0
  }
];

for(var i=0; i<questions.length; i++){
  var currentQues = questions[i];
  play(currentQues.question, currentQues.answer);
}
console.log("Your name :", userName);
console.log("Your final score is : ", score);
console.log("\n");



if(score == highScores.score){
  highScores.score = score;
  highScores.name = userName;
  console.log("Well Done !!!, You have beaten the High Score, Please send me a screenshot \n");
  console.log("High scorer: ", highScores.name);
  console.log("High score: ", highScores.score);
  console.log("\n");
  ans();
}else {
  
  console.log("High score: ", highScores.name);
  console.log("High score: ", highScores.score);
  console.log("\n");
  ans();
}

function ans(){
console.log("Answers: \n");
console.log("1. jamshedpur ");
console.log("2. jyoti ");
console.log("3. black ");
console.log("4. butter scotch ");
console.log("5. 0 ");
}



