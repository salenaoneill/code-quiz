//defining my variables :)
var start_button = document.getElementById('start_button');
var intro_section = document.getElementById('intro_section');
var questions_section = document.getElementById('questions_section');
var final_score_section = document.getElementById('final_score_section');
var high_scores_section = document.getElementById('high_scores_section');
var timer = document.getElementById('timer');
var the_question = document.getElementById('the_question'); 
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2'); 
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var final_score = document.getElementById('final_score');
var correct_or_wrong = document.getElementById('correct_or_wrong');
var submit_score = document.getElementById('submit_score');
var your_initials = document.getElementById('your_initials');
var all_scores = document.getElementById('all_scores');
var try_again_button = document.getElementById('try_again_button')

//initial page
function start () {
intro_section.style.display = "block"; 
timer.style.display = "none";
} 
start();

//when start button is clicked,
//start the timer and display questions.
start_button.addEventListener("click", function(){
    seconds_left = 60;
    intro_section.style.display = "none";
    questions_section.style.display = "block";
    timer.style.display = "block";
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

//when the game is over,
//calculate and display my score.
var score = 0;
function finish() {
    timer.style.display = "none";
    questions_section.style.display = "none";
    final_score_section.style.display = "block";
    score = seconds_left;
    final_score.textContent = "Your final score is " + score;
    try_again_button.addEventListener("click", function(){
        intro_section.style.display = "block";
        final_score_section.style.display = "none";
        start();
        
    });
  } 

 
//the questions array
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

//display my questions
var question_index = 0;
function show_questions() {
    the_question.textContent = my_questions[question_index].question; 
    option1.textContent = my_questions[question_index].options[0]; 
    option2.textContent = my_questions[question_index].options[1];
    option3.textContent = my_questions[question_index].options[2];
    option4.textContent = my_questions[question_index].options[3];
}

//when an option is clicked, 
//if i click the correct option, page displays "correct"
//if i click the wrong option, page displays "wrong" & score is decremented by 10
var option_click = function() {
    var isCorrect = this.innerHTML === my_questions[question_index].answer;
    if (isCorrect) {
        correct_or_wrong.textContent = "Correct!";
        if (question_index < my_questions.length-1) {
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

//my option_click function is called when an option is clicked
option1.addEventListener("click", option_click);
option2.addEventListener("click", option_click);
option3.addEventListener("click", option_click);
option4.addEventListener("click", option_click);



//allows me to submit input gets saved with my score to the highscores page
submit_score.addEventListener("click", function(){
    localStorage.setItem(your_initials.value, score); 
    high_scores_section.style.display = "block";
    final_score_section.style.display = "none";
    for (var i = 0; i<localStorage.length; i++) {
        var initials = localStorage.key(i);
        var high_score = localStorage.getItem(initials);
        var score_string = initials + " - " + high_score;
        var li = document.createElement("li");
        li.innerHTML = score_string;
        all_scores.appendChild(li);
    }
});