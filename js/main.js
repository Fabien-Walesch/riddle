console.log(`Welcome to this guessing game!`);

// This line randomly generates a number between 1 and 100
const result = Math.floor(Math.random() * 100) + 1;
console.log(`The solution is ${result}`);

// Add code 

window.addEventListener('DOMContentLoaded', function() {
    // The DOM is ready, we can handle it
    let intro = window.document.querySelector('#intro');
    intro.innerHTML = `Welcome to this guessing game!`;
    let showResult = window.document.querySelector('#result');
    showResult.innerHTML = `The solution is ${result}`;
});


