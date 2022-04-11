// Question bank
let questions = [{
    question: 'what does HTML stand for?',
    choice1: 'Hyper Text Markup Language',
    choice2: 'Home Tool Markup Language',
    choice3: 'Hyperlinks and Text Markup Language',
    choice4: 'Hyper Text Machine Language',
    answer: 'Hyper Text Markup Language'
},
{
question: 'who is making the Web Standard?',
    choice1: 'Mozilla',
    choice2: 'Google',
    choice3: 'The World Wide Web Consortium',
    choice4: 'Microsoft',
    answer: 'The World Wide Web Consortium'
},
{
question: 'Choose the correct HTML element for the largest heading:',
    choice1: '<heading>',
    choice2: '<head>',
    choice3: '<h6>',
    choice4: '<h1>',
    answer: '<h1>'
},
{
question: 'What is the correct HTML element for inserting a line break?',
    choice1: '<break>',
    choice2: '<lb>',
    choice3: '<br>',
    choice4: '<bk>',
    answer: '<br>'
},

{
question: 'Choose the correct HTML element to define important text:',
    choice1: '<b >',
    choice2: '<i>',
    choice3: '<strong>',
    choice4: '<important>',
    answer: '<strong>'
},
{
question: 'Choose the correct HTML element to define emphasized text:',
    choice1: '<i >',
    choice2: '<em>',
    choice3: '<emphasis>',
    choice4: '<italic>',
    answer: '<em>'
},
{
question: 'What does CSS stand for?',
    choice1: 'Creative Style Sheets',
    choice2: '<Computer Style Sheets>',
    choice3: '<Cascading Style Sheets>',
    choice4: '<Colorful Style Sheet>',
    answer: '<Cascading Style Sheets>'
},

{
question: 'Which HTML tag is used to define an internal style sheet?',
    choice1: '<css>',
    choice2: '<stylesheet>',
    choice3: '<script>',
    choice4: '<style>',
    answer: '<style>'
}, 
{
question: 'Which HTML tag is used to define inline styles?',
    choice1:'<class>',
    choice2: '<stylesheet>',
    choice3: '<styles>',
    choice4: '<style>',
    answer: '<style>'
},
{
question: 'Which is the correct CSS syntax?',
    choice1: 'body {color: black;}',
    choice2: '{body:color=black}',
    choice3: '{body;color:black}',
    choice4: 'body.color=black',
    answer: 'body {color: black;}'
},
{
question: 'How do you insert a comment in a CSS file?',
    choice1: '/*this is a comment*/',
    choice2: '//this is a comment// ',
    choice3: '//this is a comment ',
    choice4: '**this is a comment',
    answer: '/*this is a comment*/'
}

];

//Declarations
let questionIndex;
let score;
let questionCounter;
let availableQuestions = [];
const maxNumOfQuestion = 10;
const scorePoints = 10;


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
        return window.location.assign('form.html')}
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
//Adapted from youtube tutorial [https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=281s]
function makeChoice(){
    const choices = Array.from(document.querySelectorAll('.choice-text'));
    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if(!acceptingAnswers) return 
            acceptingAnswers = false
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.innerText

            let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

            if(classToApply === 'correct') {
                incrementScore(scorePoints)
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(()=> {
                selectedChoice.parentElement.classList.remove(classToApply);
                runQuiz();
            }, 500)
            })
        })
}

/**
 * A function that accepts a constant @param {scorePoint}, increases the score by the scorePoint 
 * and sets the most recent score to the local storage
 */
function incrementScore(num) {
    const scoreText = document.querySelector('#score');
    score += num
    localStorage.setItem('mostRecentScore', score)
    scoreText.innerText = score
}

startQuiz()