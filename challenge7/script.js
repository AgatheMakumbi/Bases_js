"use strict";

//La machine choisi un nombre aléatoire entre 1 et 20
// const numberToGuess = Math.floor((Math.random() * 20)+1);
// console.log(numberToGuess);
const numberToGuess= 2;
//Si le nombre entré est égal à celui “choisi” par la machine, la joueuse gagne et le nombre est dévoilé.
// recupère les noeuds utiles
const input = document.querySelector('#guess');
const check = document.querySelector('#check');
const score = document.querySelector('#score');
const highscore = document.querySelector('#highscore');
const hint  = document.querySelector('#hint');
const again = document.querySelector('#again');

//initialisation du score
let scoreValue = 20;
let highScoreValue = 0;

//fonction qui evalue l'input
function checkGuess() {
    const guess = Number(input.value);
    if (guess === numberToGuess) {
        document.body.style.backgroundColor = 'var(--color-tertiary)';
        hint.textContent = ' ✨Bravooo, tu as trouvé le nombre !';
        highScoreValue = scoreValue;
        if (scoreValue > highScoreValue) {
            highscore.textContent = scoreValue;
        }else{
            highscore.textContent = highScoreValue;
        }
        

    }else{
        scoreValue--;
        score.textContent = scoreValue;
        if (guess > numberToGuess) {
            hint.textContent = ' 💩 Le nombre est plus petit';
        }else if(typeof input.value !== 'number' || input.value == null || input.value > 20 || input.value <=0 ){
            hint.textContent = "🙈 Devine entre 1 et 20 ;)"
        }else{
            hint.textContent = '💤 Le nombre est plus grand';
        }

        if (scoreValue ===0) {
            hint.textContent ='GAME OVER LOOSER!';
            document.body.style.backgroundColor = 'red';
            input.ariaDisabled;


        }
    }
}

// event sur le boutton check
check.addEventListener('click',checkGuess);

//event sur le boutton again
again.addEventListener('click',function (e) {
    document.body.style.backgroundColor = 'var(--color-primary)';
    scoreValue = 20;
    hint.textContent ='Start guessing...';
});



