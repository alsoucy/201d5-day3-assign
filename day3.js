var counter=0;

var greeting1 = document.getElementById('greeting');
var result1 = document.getElementById('res1');
var result2 = document.getElementById('res2');
var result3 = document.getElementById('res3');
var result4 = document.getElementById('res4');
var result5 = document.getElementById('res5');
var correct1 = document.getElementById('correctCount')

var userName = prompt("What is your name?");
function userGreeting () {
  console.log('the user\'s name is ' + userName);
  //alert("Hello there, " + userName + ", I'm going to ask you some questions about me. Please answer the questions with 'Y' or 'N'");
  greeting1.textContent = "Hello there, " + userName + ", I'm going to ask you some questions about me. Please answer the questions with 'Y' or 'N'";
}

function correctCounter() {
  //alert(userName + ", you got " + counter + " questions correct.")
  console.log ('The user got ' + counter + ' questions correct.');
  correct1.textContent = userName + ", you got " + counter + " questions correct.";
}

//make it so we can accept multiple instances of No and Yes
function questionOne() {
  var answer1 = prompt(userName + ", please answer the following with 'Y' or 'N'. Am I from Manitoba?");
  console.log('The user answered question 1: ' + answer1);
  if(answer1.toUpperCase() === "N" || answer1.toUpperCase() === "NO") {
    //alert("You are correct, " + userName +". I not from Canada; I am actually from Minneapolis, Minnesota");
    result1.textContent = "You are correct, " + userName +". I not from Canada; I am actually from Minneapolis, Minnesota";
    counter +=1
    correctCounter();
  } else {
    //alert("Sorry, " + userName + ", I am actually from Minneapolis, Minnesota.");
    result1.textContent = "Sorry, " + userName + ", I am actually from Minneapolis, Minnesota.";
  }
}

function questionTwo() {
  var answer2 = prompt(userName + ", please answer the following with 'Y' or 'N'. Do I like cats?");
  console.log('The user answered question 2: ' + answer2);
  if(answer2.toUpperCase() === "Y" || answer2.toUpperCase() === "YES") {
    //alert("You are correct, " + userName +". I love cats, but I'm a big fan of dogs too!");
    result2.textContent = "You are correct, " + userName +". I love cats, but I'm a big fan of dogs too!";
    counter +=1
    correctCounter();
  } else {
    //alert("That's wrong, " + userName + ", I love cats and most other animals too!");
    result2.textContent = "That's wrong, " + userName + ", I love cats and most other animals too!";
  }
}

function questionThree() {
  var answer3 = prompt("Okay, " + userName + ", another question: do I have children?");
  console.log('The user answered question 3: ' + answer3);
  if(answer3.toUpperCase() === "Y" || answer3.toUpperCase() === "YES") {
    //alert("That's right, " + userName +"! I have a daughter, Sawyer, she is 6 years old and a little bit crazy (just like her mom).");
    result3.textContent = "That's right, " + userName +"! I have a daughter, Sawyer, she is 6 years old and a little bit crazy (just like her mom).";
    counter +=1
    correctCounter();
  } else {
    //alert("Sorry, " + userName + ". I do have a child, a little girl named, Sawyer");
    result3.textContent = "Sorry, " + userName + ". I do have a child, a little girl named, Sawyer";
  }
}

function questionFour() {
  var answer4 = prompt(userName + ", I'm thinking of a number between 1 and 100. You have one guess. What is my number?");
  console.log('The user answered question 4: ' + answer4);
  if(answer4 == 26) {
    //alert("That's right, " + userName + "! That is my number! Good guess.");
    result4.textContent = "That's right, " + userName + "! That is my number! Good guess.";
    counter +=1
    correctCounter();
  } else if(answer4 <= 25){
    //alert("Sorry, " + userName + ", your number is too low.");
    result4.textContent = "Sorry, " + userName + ", your number is too low.";
  } else {
    //alert("Sorry, " + userName + ", your number is too high.");
    result4.textContent = "Sorry, " + userName + ", your number is too high.";
  }
}

//question 5
function questionFive() {
  var age = false;
  while(age == false){
    var answer5 = prompt("Okay, " + userName + " can you can guess how old I am.");
    console.log('The user answered question 5: ' + answer5);
    if(answer5 == 41) {
      age = true;
      //alert("That's right, " + userName + "! Good guess.");
      result5.textContent = "That's right, " + userName + "! Good guess.";
      counter +=1;
      correctCounter();
    } else if(answer5 <= 40){
      age = false;
      //alert("Sorry, " + userName + ", your number is too low.");
      result5.textContent = "Sorry, " + userName + ", your number is too low.";
    } else {
      age = false;
      //alert("Sorry, " + userName + ", your number is too high");
      result5.textContent = "Sorry, " + userName + ", your number is too high";
    }
  }
}

userGreeting();
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
