// get https://jservice.io/api/clues
// GET /api/random
// GET /api/clues
// Math.random()
//1.use fetch to grab a question from the api
//2.give the user a single question
//3.user responds to the question
//4.is the answer correct? add 1 to score/zero out
//correct answer adds 1 to score and gives user another question

//MVP MVP MVP MVP MVP MVP MVP MVP MVP MVP MVP MVP MVP MVP MVP MVP MVP MVP MVP MVP MVP

// Global Variables
let button = document.querySelector("button");
button.addEventListener("click", Array.question);
let userAnswer = document.querySelector("#answer")
let questionsArray = [];
let question = {};//object of ...
let score = 0
window.onload = apiRequest;



async function apiRequest() {
  let res = await fetch("https://jservice.io/api/random.json");
  let data = await res.json();
  // Global variable for all data
  getApiData(data);
}

function getApiData(data) {
  let catagory = data[0].category.title;
  document.querySelector(".theCatagoryClass").innerHTML = `category= ${catagory}`;
  getApiData2(data);
}

function getApiData2(data) {
  fetch("https://jservice.io/api/clues?category=" + data[0].category.id)
    .then(res => res.json())
    .then(result => {
      questionsArray = result;
      displayQuestion()
    })
}
function displayQuestion() {
  question = questionsArray[Math.floor(Math.random() * (questionsArray.length - 0) + 0)];
  document.querySelector(".theQuestionClass").innerHTML = question.question;
}

function getInputValue() {
  var inputVal = document.getElementById("myInput").value;
// Figure out how to pass data to this function for the if statement
  if (inputVal.toLowerCase() === question.answer.toLowerCase()) {
    score += 1
    document.querySelector(".theScoreClass").innerHTML = `CORRECT! score = ${score} `
    displayQuestion()
  } else {
    score = 0
    document.querySelector(".theScoreClass").innerHTML = `Oh rats, wrong answer. Play again?<br>
  The correct answer was ===<em style="background-color:tomato;"> ${question.answer.toLowerCase()}</em> <br>
  Score = ${score}`
    apiRequest();
  }
  function compareAnswers() {
    console.log(score)
  }

}

function myFunction() {
  document.querySelector("#h3").innerHTML = "Hello World";
}

/*
===========================================================================================================
===========================================================================================================

CAPSTONE
1 day one MVP Wireframe
2 day one MVP Psudocode
3 day one MVP Ineration over psudocode over and over
4 day two Working MVP turned in to client.
*/
/*
MVP WIREFRAME
Canva
https://www.canva.com/design/DAEl-t_hAa8/bOwYfD2PpC9ANCY9ccR_Wg/view
https://www.canva.com/brand/join?token=i6FM7ThDXpUZf2j7mrOJlA&referrer=team-invite
*/
/*
MVP PSUDOCODE
APIs
Fetch
Promises / Asynchronous code

 use an API to perform fetches
 create an input form that accepts a user's input
 write code that is organized, easily understood, and free of errors

Requirements
Your program will follow these general steps:

Use fetch to pull questions from the API
Present a single question to the user
Allow the user to respond to the question
Determine if the user's answer was correct

A correct answer awards one (1) point and continues the game
An incorrect answer resets the game and resets the score to zero (0)
Keep track of and display a user's score

*/
//step one fetch a question from API
//step two give one question to the user
//step three give user the ablity to answer the question
//step four seperate the users answer into true or false;
//step four a)if user gave a false answer reset the game else add one point to score
//step four b)keeo track of and display user's score

//https://my.kenzie.academy/courses/189/assignments/18181

//step one fetch a question from API
/* https://jservice.io/
 GET /api/random :one way to get catagory of the random question given
 GET /api/clues  :use with query parameter of a the given catagory Id  to give 100 qs in one catagory
 GET request for https://jservice.io/api/clues : pratice
  */