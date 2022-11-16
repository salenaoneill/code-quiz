var start_button = document.getElementById('start_button');
var intro_section = document.getElementById('intro_section');
var questions_section = document.getElementById('questions_section');
var timer = document.getElementById('timer');

start_button.addEventListener("click", function(){
    intro_section.style.display = "none";
    questions_section.style.display = "block";
    start_timer()
    show_questions()
});

function start_timer() {
    var seconds_left = 60;
    var timerInterval = setInterval(function() {
        seconds_left--;
        timer.textContent = "Time:" + seconds_left;
        if(seconds_left === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
  }
 
// var my_questions [
//   {
//     question: "Commonly used data types DO NOT include",
//     options: ["1. strings", "2. booleans", "3. alerts", "4. integars"],
//     answer: "3"
//   },
    

//   {
//     question: "The condition in an if/else statement is enclosed within ____.",
//     options: ["1. quotes", "2. curley brackets", "3. parantheses", "4. square brackets"],
//     answer: "3"
    
//   },

//   {
//     question: "Arrays in JavaScript can be used to store ____.",
//     options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
//     answer: "4"
    
//   },
//   {
//     question: "String values must be enclosed within ____ when being assigned to variables.",
//     options: ["1. commas,", "2. curley brackets", "3. quotes", "4. parantheses"],
//     answer: "3"
    
//   },
//   {
//     question: "A very useful tool used during development and debugging for printing content to the debugger is:",
//     options: ["1. JavaScript", "terminal/bash", "3. for loops", "4. console log"],
//     answer: "4"
    
//   }
// ];
