var startBtn = document.querySelector('.start');
var startPageContent = document.querySelector('.container');
var timer = document.querySelector('.timer');
var score = document.querySelector('.scores');
var questionContainerElement = document.getElementById('question-container');
var optionBtn = document.getElementsByClassName('option');
var currentQuestionIndex = 0;


var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "3. parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above"
        ],
        answer: "4. all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"],
        answer: "4. console.log"
    }
];

//render quiz questions when user clicks start button

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startBtn.classList.add('hide');
    startPageContent.classList.add('hide');
    counterRender();
    questionContainerElement.classList.remove('hide')
    renderQuestion();
};

// Create for loop so that the user can go through each quiz question
function renderQuestion() {
    var correctResponse = document.getElementById('correct-response');
    correctResponse.classList.add('hide');
    var wrongResponse = document.getElementById('wrong-response');
    wrongResponse.classList.add('hide');
    counterRender();
    var currentQuestion = questions[currentQuestionIndex];
    var title = document.getElementById('question');
    title.textContent = currentQuestion.title;


    currentQuestion.choices.forEach(function (choice, i) {
        var options = document.getElementById('option' + i); 
        options.textContent = choice;
    });


    //function for what happens when a question choice is clicked
    questionContainerElement.addEventListener('click', function () {
        var target = event.target;
        var correctAnswer = questions[currentQuestionIndex].answer;
        console.log(correctAnswer);
        if (target.textContent === correctAnswer) {
            answerIsCorrect();
        }
        else {
            answerIsWrong();
        }

        if (currentQuestionIndex > questions.length) {
            allDone();
        }
    });

    var score = 0;

    function answerIsCorrect() {
        var correctResponse = document.getElementById('correct-response');
        correctResponse.classList.remove('hide');
        score += 5;
        currentQuestionIndex++
        setTimeout(renderQuestion, 2000);
    }

    function answerIsWrong() {
        var wrongResponse = document.getElementById('wrong-response');
        wrongResponse.classList.remove('hide');
        score -= 5;
        timer -= 10;
        // currentQuestionIndex++
        setTimeout(renderQuestion, 3000)
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
    setInterval(function () {
        timer.textContent = counter;
        counter--;
    }, 1000);
}
