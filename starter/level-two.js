/*
 * DOTS: Level Two
 *
 */


let score = 0
const winner = document.querySelector('.level-winner')
const scoreView =document.querySelector('.js-score')
const ball =document.querySelectorAll('.js-ball')
for (let i = 0; i < ball.length; i++) {
    ball[i].addEventListener('click', function() {
        score = score +10
        console.log('+10')
        scoreView.innerText = score
        console.log('Score Again')
        if (score >= 100) {
            console.log('Winner')
        winner.style.opacity = 1
        }
    })
  }
