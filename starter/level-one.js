/*
 * DOTS: Level One
 *
 */

let score = 0
const ball = document.querySelector('.js-ball')
const scoreView =document.querySelector('.js-score')
const winner =document.querySelector('.level-winner')

ball.addEventListener('click', function() {
    score = score +10
    console.log('+10')
    scoreView.innerText = score
    console.log('Score Again')
    if (score >= 100) {
        console.log('Winner')
    winner.style.opacity = 1
    }
})



