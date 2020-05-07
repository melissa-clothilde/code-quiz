var startBtn = document.querySelector('.start');
var pageContent = document.querySelector('.container');
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
var answered = false;
var quizDone = document.getElementById('quiz-done');
var storageScore = localStorage.getItem('score');
var initials = localStorage.getItem('initials');
var initialVal = document.getElementById('initials');
var goBackBtn = document.getElementById('go-back');
var clearHighscoresBtn = document.getElementById('clear-scores');

//this code starts the timer 
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

questionContainerElement.addEventListener('click', function () {
    var target = event.target;
    var correctAnswer = questions[currentQuestionIndex].answer;
    
    if (!answered) {
        if (target.textContent === correctAnswer) {
            answerIsCorrect();
            answered = true;
            nextButton.classList.remove('hide');
        }

        else {
            console.log(target.textContent, correctAnswer, "answerIsWrong()");
            answerIsWrong();
            answered = true;
            nextButton.classList.remove('hide');
        }
    
    }
});

nextButton.addEventListener('click', function () {
    if (currentQuestionIndex === questions.length - 1) {
        timer.classList.add('hide');
        nextButton.classList.add('hide');
        questionContainerElement.classList.add('hide');
        quizDone.classList.remove('hide');
        correctResponse.classList.add('hide');
        wrongResponse.classList.add('hide');
        finalScore.textContent = score;
        if (score < 0) {
            score === 0;
        }
    }
    else {
        currentQuestionIndex++;
        renderQuestion();
        answered = false;
    }
});

function startQuiz() {
    startBtn.classList.add('hide');
    pageContent.classList.add('hide');
    counterRender();
    questionContainerElement.classList.remove('hide')
    renderQuestion();
};

// Create for loop to go through each question
function renderQuestion() {
    nextButton.classList.add('hide');
    correctResponse.classList.add('hide');// look into toggle
    wrongResponse.classList.add('hide');// look into toggle
    // counterRender();
    var currentQuestion = questions[currentQuestionIndex];
    title.textContent = currentQuestion.title;

    currentQuestion.choices.forEach(function (choice, i) {
        var options = document.getElementById('option' + i);
        options.textContent = choice;
    });
};

score = 0;
function answerIsCorrect() {
    correctResponse.classList.remove('hide');
    score += 5;
}

function answerIsWrong() {
    wrongResponse.classList.remove('hide');
    score -= 5;
    counter -= 10;
    timer.textContent = counter;
    console.log(currentQuestionIndex);
}

submitBtn.addEventListener('click', function () {
    localStorage.setItem('score', score);
    localStorage.setItem('initials', initialVal);
    window.location.replace("highscores.html")
});

goBackBtn.addEventListener('click', function () {
    window.location.replace("index.html");
});


//function to clear high scores