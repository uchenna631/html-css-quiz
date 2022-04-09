// Question bank
let questions = [{
    question: 'what is 2 + 1',
    choice1: '5',
    choice2: '4',
    choice3: '3',
    choice4: '21',
    answer: 3
},
{
    question: 'what is 2 + 2',
       choice1: '5',
       choice2: '4',
       choice3: '9',
       choice4: '21',
       answer: 4
   },
   {
    question: 'what is 2 + 3',
       choice1: '5' ,
       choice2: '4',
       choice3: '35',
       choice4: '21',
       answer: 5
   },
   {
    question: 'what is 2 + 4',
       choice1: '5',
       choice2: '4',
       choice3: '6',
       choice4: '21',
       answer: 6
   }
];

//Declarations
let questionIndex;
let score;
let questionCounter;
let availableQuestions = [];
const maxNumOfQuestion = 4;


/**Main quiz function. Initializes input parameters and triggers the runQuiz function*/
function startQuiz() {
    questionIndex = 0;
    score = 0;
    questionCounter = 0;
    availableQuestions = [...questions]
    runQuiz()
}

/**Function to handles the running of the game */
function runQuiz() {
    questionCounter++;
    if (questionCounter <= maxNumOfQuestion){

        displayQuizProgress()

        getRandomQuestion()

        acceptingAnswers = true;

        makeChoice()

    } else {
        //Returns a new window
        //Syntax from w3school tutorial [https://www.w3schools.com/jsref/obj_location.asp]
        return window.location.assign('save-score.html')}
}

/**Function to display quiz progression*/
function displayQuizProgress(){
    const progressText = document.querySelector('#progress-text');    
    const progressBarFull = document.querySelector('#progress-bar-full');
    
    progressText.innerText = `Question ${questionCounter} of ${maxNumOfQuestion}`
    progressBarFull.style.width = `${(questionCounter/maxNumOfQuestion)*100}%`
}


/**Function to pick question at random from the question's bank*/
function getRandomQuestion () {
    let question = document.querySelector('#question')
    const choices = Array.from(document.querySelectorAll('.choice-text'));
    
    // Generate random number to pick question at random
    questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
    
    //Assign chosen question's choice as the choice inner
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    
    //Remove the answered question from the question bank
    availableQuestions.splice(questionIndex, 1);
}

/**Function to handle player's choice */
function makeChoice(){
}

/**
 * A function that accepts a constant @param {scorePoint}, increases the score by the scorePoint 
 * and sets the most recent score to the local storage
 */
function incrementScore(num) {
     }

startQuiz()