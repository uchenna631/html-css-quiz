const highScoresList = document.querySelector('#high-scores-list')
const highScores = JSON.parse(localStorage.getItem('highScores'))

//Checks if high score exist, and returns high scores
if (highScores) {highScoresList.innerHTML = 
highScores.map(score => {
    //Return high scores as a list
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')}