console.log('Connected')

//need to choose random number for each wheel
//each wheel will have a different weight for numbers

// Functions
function rndNumGen() {
    return Math.floor(Math.random() * 10);
}


// get HTML elements
const numbersBtn = document.querySelector('#getBtn');
// add listeners
numbersBtn.addEventListener('click', () => {
    for (let i = 0; i < 4; i++) {
        const resultText = document.querySelector(`#result${i}`)
        resultText.innerText = rndNumGen();
        resultText.classList = 'result'
    }
})