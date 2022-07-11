var startButton = document.querySelector('#startButton')
var timer = document.querySelector('#timer');
var question = document.querySelector('#question');
var choices = document.querySelector('#choices');

var time = 2;
var index = 0;
var questions = [
    {
        question: "What is 1+1?",
        choices: [0,1,2,3],
        answer: 2
    },
    {
        question:"What is 1+2?",
        choices: [0,1,2,3],
        answer: 3
    },
    {
        question:"What is 1-1?",
        choices: [0,1,2,3],
        answer: 0
    },
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
    question.textContent = questions[index].question


}

startButton.addEventListener('click', function () {
    console.log('this is where i need to start a timer');

    displayTime();
    displayQuestions();
    console.log('')
})

// event.preventDefault();



