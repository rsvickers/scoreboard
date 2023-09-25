// SECTION variables

const winningScore = 21
let home = 0
let away = 0

// SECTION Functions

function addOneHomePoint() {
    home += 1
    const plusOneHome = document.getElementById('currentHomeScore')
    plusOneHome.innerText = home
    gameOver()
}

function addThreeHomePoints() {
    home += 3
    const plusThreeHome = document.getElementById('currentHomeScore')
    plusThreeHome.innerText = home
    gameOver()
}


function addHomeScore(scoreValue) {
    if (scoreValue == 1) {
        home += 1
    }
    console.log('adding 1', scoreValue)


}


function addOneAwayPoint() {
    away += 1
    const plusOneAway = document.getElementById('currentAwayScore')
    plusOneAway.innerText = away
    gameOver()
}

function addThreeAwayPoints() {
    away += 3
    const plusThreeAway = document.getElementById('currentAwayScore')
    plusThreeAway.innerText = away
    updatedScore()
    gameOver()

}




function gameOver() {
    if (home >= winningScore) {
        console.log('Home wins')
    }
    else if (away >= winningScore) {
        console.log('away wins')
    }
}
