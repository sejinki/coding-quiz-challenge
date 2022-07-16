var startButton = document.querySelector('#startButton')
var timer = document.querySelector('#timer');
var question = document.querySelector('#question');
var choices = document.querySelector('#choices');
var qContainer = document.querySelector('#qContainer');
var results = document.querySelector('#results');
var countDown = 0;
var score = 0;
var initialArr = JSON.parse(localStorage.getItem("initialArr")) || [];
var highscoreDiv = document.getElementById("highscore");

var time = 60;
var index = 0;
var questions = [
    {
        question: "What is a boolean?",
        choices: ["1. true or false value",
            "2. it is a number",
            "3. it is something random",
            "4. it is none of the above"
                ],
        answer: 0
    },
    {
        question: "An array is signaled by what?",
        choices: ["1. curly braces.",
            "2. square brackets",
            "3. paranthesis",
            "4. equal sign"
            ],
        answer: 1
    },
    {
        question: "A string is placed in what?",
        choices: ["1. single quotes",
            "2. double quotes",
            "3. 1 & 2",
            "4. none of the above"
            ],
        answer: 0
    },
    {
        question: "The most important datatype in JS is?",
        choices: ["1. array",
            "2. object",
            "3. function",
            "4. strings"
        ],
        answer: 2
    },
    {
        question: "Javascript is the most popular coding language",
        choices: ["1. true",
            "2. false"
            ],
        answer: 0
    },
    // {
    //     question:"A string is placed in what?",
    //     choices: [
    //         1 square brackets,
    //         2. curly braces,
    //         3. single or double quotes,
    //         4. bold tags,
    //     ],
    //     answer: 3
    // },

    //function myFunction() {
    //var element = document.getElementById("myDIV");
    //element.classList.add("mystyle");

]

function displayTime() {
    timer.textContent = time;
    countDown = setInterval(function () {
        time--;
        console.log(time)
        timer.textContent = time;

        if (time <= 0) {
            endQuiz();
            clearInterval(countDown);
        }

    }, 1000);

}

function displayQuestions() {
    question.textContent = questions[index].question;
    var currentQuestion = questions[index];
    console.log(currentQuestion);
    choices.innerHTML = '';
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choicesButton = document.createElement('button');
        var choice = currentQuestion.choices[i];
        console.log(choice);
        choicesButton.textContent = choice;
        choicesButton.className = "choices"
        choices.append(choicesButton);
        choicesButton.addEventListener('click', nextQuestion);
        
    }
    
    function nextQuestion(event) {
        var rightAnswer = questions[index].answer;
        rightAnswer = questions[index].choices[rightAnswer];
        if (rightAnswer == event.target.innerHTML) {
            score++;
            console.log(score);
        } else if (rightAnswer != event.target.innerHTML) {
            time -= 5;
        }
        index++;
        if (index < questions.length) {
            displayQuestions();
        } else {
            endQuiz()
        }
        event.preventDefault();
    }


    //display each choice on each button
    //append each button to choices div
    //create onclick event for each button
    //if correct: index++, call displayQuestions()
    //if not correct: index++, call displayQuestions()
    //stop timer, display score, button to request (save score)
    // what are your initials

}
function endQuiz() {
    clearInterval(countDown);
    qContainer.className = 'hidden';
    results.innerHTML = 'your score is ' + score;
    var form = document.createElement('div');
    results.append(form);
    var initials = document.createElement('input');
    form.innerHTML = 'type initials';
    form.append(initials);
    var inButton = document.createElement('button');
    inButton.addEventListener('click', function () {
        submitScore(initials.value);
    });
    form.append(inButton);
    inButton.innerText = 'submit';
    document.querySelector("#highscoreEl").setAttribute("style", "display:block;");
}


// var initialArr = JSON.parse(localStorage.getItem("initialArr")) || [];
// var highscoreDiv = document.getElementById("highscore");
function submitScore(initials) {
    console.log(initials, score);
    initialArr.push(
        {
            initial: initials,
            score: score
        })
    localStorage.setItem("initialArr", JSON.stringify(initialArr))
    displayHighscore()
}

function displayHighscore() {
    highscoreDiv.innerHTML = "";
    initialArr.forEach(function (data) {
        var p = document.createElement("p");
        p.innerHTML = data.initial + " - " + data.score;
        highscoreDiv.appendChild(p);
        // highscore.className = 'highscore';
    })
}

startButton.addEventListener('click', function () {
    console.log('this is where i need to start a timer');
    score = 0
    startButton.className = 'hidden';
    displayTime();
    displayQuestions();
    console.log('')
})

// event.preventDefault();



