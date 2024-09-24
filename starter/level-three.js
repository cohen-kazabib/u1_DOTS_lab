/*
 * DOTS: Level Three
 *
 */

let score = 0
const winner = document.querySelector('.level-winner')
const scoreView =document.querySelector('.js-score')
const ball =document.querySelector('.js-ball')
const ball2 = document.querySelector('.js-ball2')
const ball3 = document.querySelector('.js-ball3')

ball.addEventListener('click', function() {
    score = score +5
    console.log('+5')
    scoreView.innerText = score
    console.log('Score Again')
    if (score >= 100) {
        console.log('Winner')
    winner.style.opacity = 1
    }
})

ball2.addEventListener('click', function() {
    score = score +10
    console.log('+10')
    scoreView.innerText = score
    console.log('Good Job')
    if (score >= 100) {
        console.log('Winner')
    winner.style.opacity = 1
    }
})

ball3.addEventListener('click', function() {
    score = score +20
    console.log('+20')
    scoreView.innerText = score
    console.log('Big Score')
    if (score >= 100) {
        console.log('Winner')
    winner.style.opacity = 1
    }
})

if (score >= 100) {
    console.log('Winner')
winner.style.opacity = 1
}