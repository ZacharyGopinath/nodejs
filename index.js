function buttonFn(id) {
    console.log('hi')
    console.log(id)
}

document.getElementById('ROCK').addEventListener("click", buttonFn('ROCK'));
document.getElementById('PAPER').addEventListener("click", buttonFn('PAPER'));
document.getElementById('SCISSORS').addEventListener("click", buttonFn('SCISSORS'));

