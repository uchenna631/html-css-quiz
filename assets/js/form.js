const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#save-score-btn')
const finalScore = document.querySelector('#final-score')

//Get most recent score from local storage
const mostRecentScore = localStorage.getItem('mostRecentScore')

//Receive high scores from local storage or return an empty array
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const maxHighScore = 5

//Display the most recent score
finalScore.innerText =  mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})


/**Function to save high score to local storage and return home page*/
function saveHighScore(event) {
    event.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
    return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('index.html')

}