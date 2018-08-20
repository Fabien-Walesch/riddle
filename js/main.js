console.log(`Welcome to this guessing game!`);

// This line randomly generates a number between 1 and 100
const soluce = Math.floor(Math.random() * 100) + 1;
console.log(`The solution is ${soluce}`);

// Add code 


// DOM interaction
window.addEventListener('DOMContentLoaded', function() {
    // The DOM is ready, we can handle it
    let intro = window.document.querySelector('#intro');
    intro.innerHTML = `Welcome to this guessing game!`;
    let showSoluce = window.document.querySelector('#soluce');
    showSoluce.innerHTML = `The solution is ${soluce}`;
});


