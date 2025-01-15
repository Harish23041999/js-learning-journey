//A conditional statement is , meaning it says something like "If this happens, then that will occur".

//Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

// Syntax
// if (condition) {
//     block of code to be executed if the condition is true
// }

let age = 18;
if (age >= 18) {
  console.log("u can drive!");
}

let firstname = "Max";
if (firstname === "Max") {
  console.log(`Welcome to India ${firstname}!`);
}

//traffice color system

let color = "red";
if (color === "red") {
  console.log("Stop: color is red");
}
if (color === "yellow") {
  console.log("slow down: color is yellow");
}
if (color === "green") {
  console.log("Gp: color is green");
}

// The else Statement: Use the else statement to specify a block of code to be executed if the condition is false.
// if (condition) {
//     block of code to be executed if the condition is true
// } else {
//     block of code to be executed if the condition is false
// }

let MovieTheater = "Ticket";
if (MovieTheater === "Ticket") {
  console.log("U Can Watch Movie");
} else {
  console.log("U Can not Watch Movie");
}

// The else if Statement : Use the else if statement to specify a new condition if the first condition is false.

// Syntax
// if (condition1) {
//   block of code to be executed if condition1 is true
// } else if (condition2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//     block of code to be executed if the condition1 is false and condition2 is false
// }

let color1 = "pink";
if (color1 === "red") {
  console.log("Stop: color is red");
} else if (color1 === "yellow") {
  console.log("slow down: color is yellow");
} else if (color1 === "green") {
  console.log("Go: color is green");
} else {
  console.log("Not a valid color");
}

//nested if else

let marks = 50;
if (marks >= 33) {
  console.log("Pass");
  if (marks >= 80) {
    console.log("Grade:O");
  } else {
    console.log("Grade:A");
  }
} else {
  console.log("better luck next time!");
}
// The JavaScript Switch Statement : Use the switch statement to select one of many code blocks to be executed.
// Syntax
// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(`The day is: ${day}`);
