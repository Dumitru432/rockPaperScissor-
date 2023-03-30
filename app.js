const computerChoiceDisplay = document.querySelector('#computer-choice')
const userChoiceDisplay = document.querySelector('#user-choice')
const resultDisplay = document.querySelector('#result')
const buttons = document.querySelectorAll('button') // am luat aici toate butoanele 

let userChoice
let computerChoice
let result



buttons.forEach(buttons => buttons.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;

    randomChoice()
    game()
}))


function randomChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoice = 'paper'
    } if (randomNumber === 2) {
        computerChoice = 'rock'
    } if (randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function game () {
    if(computerChoice === userChoice){
        result = 'its drow'
    } if(computerChoice == 'rock' && userChoice == 'paper'){
        result = 'user win'
    } if (computerChoice == 'rock' && userChoice == 'scissors'){
        result = 'computer win'
    } if(computerChoice == 'scissors' && userChoice == 'rock'){
        result = 'user win'
    }if(computerChoice == 'scissors' && userChoice == 'paper'){
        result = 'computer win'
    }if(computerChoice == 'papaer' && userChoice == 'rock'){
        result = 'computer win'
    }if(computerChoice == 'papaer' && userChoice == 'scissors'){
    result = 'user win'
}
    resultDisplay.innerHTML = result
}