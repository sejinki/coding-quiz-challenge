var startButton = document.querySelector('#startButton')
var timer = document.querySelector('#timer');
var question = document.querySelector('#question');
var choices = document.querySelector('#choices');

var time = 2;
var index = 0;
var questions = [
    {
        question: "What is a boolean?",
        choices: [0,1,2,3],
        answer: 2
    },
    {
        question:"An array is signaled by what?",
        choices: [0,1,2,3],
        answer: 3
    },
    {
        question:"A string is placed in what?",
        choices: [0,1,2,3],
        answer: 0
    },
    {
        question:"The most important datatype in JS is?",
        choices: [0,1,2,3],
        answer: 0
    },
    {
        question:"A method is composed of?",
        choices: [0,1,2,3],
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

]

function displayTime() {
    timer.textContent = time;
    var countDown = setInterval(function () {
        time--;
        console.log(time)
        timer.textContent = time;
        
        if(time <= 0){
            clearInterval(countDown);
        }

    }, 1000);

}

function displayQuestions (){
    question.textContent = questions[index].question;
    var currentQuestion = questions[index];
    console.log(currentQuestion);
    for(var i = 0; i < currentQuestion.choices.length; i++){
        var choicesButton = document.createElement('button');
        var choice = currentQuestion.choices[i];
        console.log(choice);
        choicesButton.textContent = i + choice;
        choices.append(choicesButton);
    }

    function nextQuestion () {

    }
    
    
    //display each choice on each button
    //append each button to choices div
    //create onclick event for each button
    //if correct: index++, call displayQuestions()
    //if not correct: index++, call displayQuestions()

}

startButton.addEventListener('click', function () {
    console.log('this is where i need to start a timer');

    displayTime();
    displayQuestions();
    console.log('')
})

// event.preventDefault();



