var startBtn = document.querySelector('.start');
var startPageContent = document.querySelector('.container');
var timer = document.querySelector('.timer');
var finalScore = document.getElementById('score');
var submitBtn = document.getElementById('submit');
var questionContainerElement = document.getElementById('question-container');
var optionBtn = document.getElementsByClassName('option');
var currentQuestionIndex = 0;
var allDone = document.getElementById('all-done');
var clearHighscores = document.getElementById('clear-scores')
var nextButton = document.getElementById('next');
var correctResponse = document.getElementById('correct-response');
var wrongResponse = document.getElementById('wrong-response');
var title = document.getElementById('question');
var counter = 75;
//this code starts the timer when the user presses start
//current time displayed, decrement suttent time every second
function counterRender() {
    var interval = setInterval(function () {
        timer.textContent = counter;
        counter--;
    }, 1000);

    if (timer === 0) {
        clearInterval(interval);
    }
}

//object of questions, choices, and answers
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
    nextButton.classList.remove('hide');
};

// Create for loop so that the user can go through each quiz question
function renderQuestion() {
    correctResponse.classList.add('hide');// look into toggle
    wrongResponse.classList.add('hide');// look into toggle
    // counterRender();
    var currentQuestion = questions[currentQuestionIndex];
    title.textContent = currentQuestion.title;

    currentQuestion.choices.forEach(function (choice, i) {
        var options = document.getElementById('option' + i);
        options.textContent = choice;
    });


    //function for what happens when a question choice is clicked
    questionContainerElement.addEventListener('click', function () {
        var target = event.target;
        var correctAnswer = questions[currentQuestionIndex].answer;
        // console.log(correctAnswer);//issue: browser is logging two correct answers for middle quiz questions
        // console.log("currentQuestionIndex" + currentQuestionIndex);
        if (target.textContent === correctAnswer) {
            answerIsCorrect();
        }
        else {
            console.log(target.textContent, correctAnswer, "answerIsWrong()");
            answerIsWrong();
        }
    });
};
nextButton.addEventListener('click', function () {
    renderQuestion();
});


score = 0;
function answerIsCorrect() {
    correctResponse.classList.remove('hide');
    score += 5;
    currentQuestionIndex++;
    // setTimeout(renderQuestion, 2000);
    // clearTimeout();
}

function answerIsWrong() {
    wrongResponse.classList.remove('hide');
    score -= 5;
    counter -= 10;
    timer.textContent = counter;
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    // setTimeout(renderQuestion, 3000)
    // clearTimeout();
}

    // function checkAnswer(answer, userAnswer) {
    //     if (questions[currentQuestionIndex].answer) {
    //     answerIsCorrect();
    //     }
    //     else {

    //     }
    // }


//function for what happens when the quiz ends
//function to save the high score
var score = localStorage.getItem('.score');
finalScore.textContent = score;

submitBtn.addEventListener('click', function () {
    //remove or hide last title/question and choices
    allDone.classList.remove('hide');
    localStorage.setItem('score', score);
});

//function to clear high scores

