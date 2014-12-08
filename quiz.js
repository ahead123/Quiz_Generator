/* Quiz program
Ask 5 questions
keep track of number of correct answers
provide a final message after the quiz 
of answers correct
create ranking
all 5 gold crown
3 to 4 silver crown
1 to 2 bronze crown
0 is no crown at all
*/

document.getElementById('go').addEventListener('click', function () {

  // alert("Welcome to the tech quiz!");
  // alert("I'm going to ask you to name 5 CEO's of 5 Big tech companies.");
  // alert("all answers should be typed as first name last name");
  // alert("okay let's go!");
document.getElementById('go').style.visibility = 'hidden';

  // setting up an empty array to store users answers
var correctAnswers = [];

// setting up an array of 5 questions to ask the user
var questions = ["Who is the founder of Apple?", "Who is the founder of Facebook?", "Who is the founder of Microsoft?", "Who is the founder of Tesla?", "Who is the founder of Amazon?"];

// setting the initial user score to 0
var score = 0;

// looping over the questions array and storing users answers into the answers variable
// pushing answers into the correct answers array
for (i = 0; i < questions.length; i++) {
  var answers = prompt(questions[i]);
  correctAnswers.push(answers);
  console.log(correctAnswers);
}

// setting answers to uppercase and incrementing score by 1 if correct
if (correctAnswers[0].toUpperCase() === "STEVE JOBS") {
    score = score + 1;
    
} else if (correctAnswers[0].toUpperCase() !== "STEVE JOBS") {
      score = score + 0;

} if (correctAnswers[1].toUpperCase() === "MARK ZUCKERBERG") {
      score = score + 1;
      
} else if (correctAnswers[1].toUpperCase() !== "MARK ZUCKERBERG") {
    score = score + 0;
   
} if (correctAnswers[2].toUpperCase() === "BILL GATES") {
    score = score + 1;
    
} else if (correctAnswers[2].toUpperCase() !== "BILL GATES") {
    score = score + 0;
    
} if (correctAnswers[3].toUpperCase() === "ELON MUSK") {
    score = score + 1;
    
} else if (correctAnswers[3].toUpperCase() !== "ELON MUSK") {
    score = score + 0;
    
} if (correctAnswers[4].toUpperCase() === "JEFF BEZOS") {
    score = score + 1;
   
} else if (correctAnswers[4].toUpperCase() !== "JEFF BEZOS") {
    score = score + 0;
   
} else { 
  score = 0;
}

// set crown to a blank string
var crown = "";

// setting crown to gold, silver, and bronze based on score
if (score === 5) {
  crown = "Gold Crown!"
} else if (score >= 3 && score < 5) {
  crown = "Silver Crown!"
} else if (score >= 1 && score <= 2) {
  crown = "Bronze Crown!"
} else {
  crown = "chance to play again.";
}

document.getElementById('here').innerHTML = "You answered " + score + " questions correctly. You win the " + crown;

document.getElementById('go').style.visibility = 'visible';
document.getElementById('go').innerText = "Click to Play Again!";

});




