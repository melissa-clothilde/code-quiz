var startBtn = document.querySelector('.start');
var startPageContent = document.querySelector('.container');
var timer = document.querySelector('.timer');
var score = document.querySelector('.scores');
var currentQuestionIndex = 0;
var questionContainerElement = document.getElementById('question-container');

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];

//render quiz questions when user clicks start button

startBtn.addEventListener('click', startQuiz);

function startQuiz () {
    startBtn.classList.add('hide');
    startPageContent.classList.add('hide');
    counterRender();
    questionContainerElement.classList.remove('hide')
    renderQuestion();
};

// Create for loop so that the use r can go through each quiz question
function renderQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var title = document.getElementById('question');
    title.textContent = currentQuestion.title;


    currentQuestion.choices.forEach(function (choice, i) {
        var options = document.getElementById('option' + i);
        options.textContent = choice;
    });
    

//function for what happens when a question choice is clicked
    questionContainerElement.addEventListener('click', function() {
        var target = event.target;
        var correctAnswer = questions[currentQuestionIndex].answer;
        if (target.textContent === correctAnswer) {
            answerIsCorrect();
        }
        else {
            answerIsWrong();
        }
    });
    
    var score = 0;
    function answerIsCorrect() {
        
        // var hr = document.createElement('hr');
        // options.hr.appendChild(hr);
        // return hr + 'Correct!';
        // score++;
    }

    function answerIsWrong() {
        // var hr = document.createElement('hr');
        // options.hr.appendChild(hr);
        // return hr + 'Wrong!';
        // timer-- //take 10 seconds off timer
    }

    // function checkAnswer(answer, userAnswer) {
    //     if (questions[currentQuestionIndex].answer) {
    //     answerIsCorrect();
    //     }
    //     else {
        
    //     }
    // }
}
//function for what happens when the quiz ends
//function to save the high score
function scoreRender() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
}



//this code starts the timer when the user presses start
//current time displayed, decrement suttent time every second

function counterRender() {
    var counter = 75;
    setInterval(function() {
        timer.textContent = counter;
        counter--;
    }, 1000);
}
