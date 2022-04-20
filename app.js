const newGameBtn = document.querySelector('.btn--new')
const rollBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')
const imgDice = document.querySelector('.dice')

let currentScore = 0
let activePlayer = 0
let score = [0, 0]
let gameOver = false

// MODAL SECTION

const modal = document.querySelector('.modal')
const modalTitle = document.querySelector('.modal-title')
const modalBtn = document.querySelector('.modal-btn')
const overlay = document.querySelector('.overlay')



modalBtn.addEventListener('click', () => {
    document.querySelector(`.player--${activePlayer}`).style.backgroundColor = 'transparent'
    document.querySelector('.player--0').classList.add('player--active') 
    document.querySelector('.player--1').classList.remove('player--active') 
    currentScore = 0
    activePlayer = 0
    score = [0, 0]
    document.getElementById(`current--${0}`).textContent = 0
    document.getElementById(`current--${1}`).textContent = 0
    document.getElementById(`score--${0}`).textContent = 0
    document.getElementById(`score--${1}`).textContent = 0
    gameOver = false
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

overlay.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
})
// MODAL SECTION END


rollBtn.addEventListener('click', () => {
    if (!gameOver) {const randomNum = Math.floor(Math.random() * 6) + 1
    imgDice.src = `./img/dice-${randomNum}.png`
    imgDice.style.display = 'block'

    if (randomNum > 1) {
        currentScore += randomNum
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        changeActivePlayer()
    }}
})

function changeActivePlayer() {
        document.getElementById(`current--${activePlayer}`).textContent = 0
        currentScore = 0
        activePlayer = activePlayer == 0 ? 1 : 0
        document.querySelector('.player--0').classList.toggle('player--active') 
        document.querySelector('.player--1').classList.toggle('player--active') 
}


holdBtn.addEventListener('click', () => {
    if (!gameOver) {
        score[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
    }
    
    if (score[activePlayer] >= 10) {
        gameOver = true
        document.querySelector(`.player--${activePlayer}`).style.backgroundColor = 'red'
        modalTitle.textContent = `PLAYER ${activePlayer + 1} WIN🏆`
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
        
    } else {
        changeActivePlayer()
    }

})

newGameBtn.addEventListener('click', () => {
    document.querySelector(`.player--${activePlayer}`).style.backgroundColor = 'transparent'
    document.querySelector('.player--0').classList.add('player--active') 
    document.querySelector('.player--1').classList.remove('player--active') 
    currentScore = 0
    activePlayer = 0
    score = [0, 0]
    document.getElementById(`current--${0}`).textContent = 0
    document.getElementById(`current--${1}`).textContent = 0
    document.getElementById(`score--${0}`).textContent = 0
    document.getElementById(`score--${1}`).textContent = 0
    gameOver = false

})  