var counter=0;

var userName = prompt("What is your name?");
console.log('the user\'s name is ' + userName);
alert("Hello there, " + userName + ", I'm going to ask you some questions about me. Please answer the questions with 'Y' or 'N'");

//make it so we can accept multiple instances of No and Yes
var answer1 = prompt(userName + ", please answer the following with 'Y' or 'N'. Am I from Manitoba?");
console.log('The user answered question 1: ' + answer1);
if(answer1.toUpperCase() === "N" || answer1.toUpperCase() === "NO") {
  alert("You are correct, " + userName +". I not from Canada; I am actually from Minneapolis, Minnesota");
counter +=1
} else {
  alert("Sorry, " + userName + ", I am actually from Minneapolis, Minnesota.");
}

var answer2 = prompt(userName + ", please answer the following with 'Y' or 'N'. Do I like cats?");
console.log('The user answered question 2: ' + answer2);
if(answer2.toUpperCase() === "Y" || answer2.toUpperCase() === "YES") {
  alert("You are correct, " + userName +". I love cats, but I'm a big fan of dogs too!");
counter +=1
} else {
  alert("That's wrong, " + userName + ", I love cats and most other animals too!");
}

var answer3 = prompt("Okay, " + userName + ", another question: do I have children?");
console.log('The user answered question 3: ' + answer3);
if(answer3.toUpperCase() === "Y" || answer3.toUpperCase() === "YES") {
  alert("That's right, " + userName +"! I have a daughter, Sawyer, she is 6 years old and a little bit crazy (just like her mom).");
  counter +=1
} else {
  alert("Sorry, " + userName + ". I do have a child, a little girl named, Sawyer");
}

var answer4 = prompt(userName + ", I'm thinking of a number between 1 and 100. You have one guess. What is my number?");
console.log('The user answered question 4: ' + answer4);
if(answer4 == 26) {
  alert("That's right, " + userName + "! That is my number! Good guess.");
  counter +=1
} else if(answer4 <= 25){
  alert("Sorry, " + userName + ", your number is too low.");
} else {
  alert("Sorry, " + userName + ", your number is too high.");
}

//question 5
var age = false;
while(age == false){
   var answer5 = prompt("Okay, " + userName + " can you can guess how old I am.");
    if(answer5 == 41) {
    age = true;
    alert("That's right, " + userName + "! Good guess.");
    counter +=1;
    } else if(answer5 <= 40){
    age = false;
    alert("Sorry, " + userName + ", your number is too low.");
    } else {
    age = false;
    alert("Sorry, " + userName + ", your number is too high");
  }
}
alert(userName + ", you got " + counter + " questions correct.")
console.log ('The user got ' + counter + ' questions correct.');
