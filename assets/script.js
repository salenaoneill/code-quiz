//defining variables
var start_button = document.getElementById('start_button');
var intro_section = document.getElementById('intro_section');
var questions_section = document.getElementById('questions_section');
var final_score_section = document.getElementById('final_score_section')
var timer = document.getElementById('timer');
var the_question = document.getElementById('the_question'); 
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2'); 
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var final_score = document.getElementById('final_score');
var correct_or_wrong = document.getElementById('correct_or_wrong');
var view_highscores = document.getElementById('view_highscores');


start_button.addEventListener("click", function(){
    intro_section.style.display = "none";
    questions_section.style.display = "block";
    start_timer();
    show_questions();
});

var seconds_left = 60;
function start_timer() {
    var timerInterval = setInterval(function() {
        seconds_left--;
        timer.textContent = "Time:" + seconds_left;
        if(seconds_left <= 0) {
            clearInterval(timerInterval);
            finish();
        }

    }, 1000);
  }

function finish() {
    questions_section.style.display = "none";
    final_score_section.style.display = "block";
    //score = whatever time is left on timer when function is returned
    final_score.textContent = "Your final score is" + score
  } 

 

var my_questions = [
    {
      question: "Commonly used data types DO NOT include",
      options: ["1. strings", "2. booleans", "3. alerts", "4. integars"],
      answer: "3. alerts"
    },
     
    {
      question: "The condition in an if/else statement is enclosed within ____.",
      options: ["1. quotes", "2. curley brackets", "3. parantheses", "4. square brackets"],
      answer: "3. parantheses"
     
    },
 
    {
      question: "Arrays in JavaScript can be used to store ____.",
      options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
      answer: "4. all of the above"
     
    },
    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      options: ["1. commas,", "2. curley brackets", "3. quotes", "4. parantheses"],
      answer: "3. quotes"
     
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: ["1. JavaScript", "terminal/bash", "3. for loops", "4. console log"],
      answer: "4. console log"
     
    }
  ];

var question_index = 0;
function show_questions() {
    the_question.textContent = my_questions[question_index].question; 
    option1.textContent = my_questions[question_index].options[0]; 
    option2.textContent = my_questions[question_index].options[1];
    option3.textContent = my_questions[question_index].options[2];
    option4.textContent = my_questions[question_index].options[3];

    //if the selected option matches the correct answer, display correct 
    // and increase question index by 1.
    
    var option_click = function() {
        var isCorrect = this.innerHTML === my_questions[question_index].answer;
        if (isCorrect) {
            correct_or_wrong.textContent = "Correct!";
            if (question_index < my_questions.length) {
                question_index++;
                show_questions();
            }
            else {
                finish();
            }
        }
        else {
            correct_or_wrong.textContent = "Wrong :(";
            if (seconds_left <= 10) {
                seconds_left = 1;
            }
            else {
                seconds_left -= 10;
            }
            
        }
    }

    option1.addEventListener("click", option_click);
    option2.addEventListener("click", option_click);
    option3.addEventListener("click", option_click);
    option4.addEventListener("click", option_click);
        
    //if the selected option does not match the correct answer, subtract 10 from the timer and display wrong.

    //when all the questions are answered, return function finish()
}
 
view_highscores.addEventListener("click", function(){
    high_scores_section.style.display = "block";
    questions_section.style.display = "none";

})