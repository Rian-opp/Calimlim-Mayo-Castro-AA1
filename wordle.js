var words = ['abide', 'alert', 'about', 'acorn', 'above', 'actor', 'adore', 'adopt', 'alter', 'angry', 'audio', 'baker', 'badge', 'basil', 'beach',
    'began', 'bench', 'beige', 'bible', 'blaze', 'blend', 'blunt', 'bride', 'brisk', 'bumpy', 'bacon', 'blast', 'brush', 'churn',
    'crawl', 'creak', 'crane', 'charm', 'chore', 'clamp', 'clasp', 'clean', 'clerk', 'crisp', 'chalk', 'close', 'coach', 'count', 'craft',
    'dealt', 'dream', 'drink', 'drove', 'duped', 'dyes', 'enact', 'empty', 'enter', 'elect', 'elope', 'equip', 'erase', 'exile', 'flame',
    'flock', 'fresh', 'fudge', 'fines', 'fable', 'fiber', 'frost', 'gains', 'gases', 'gears', 'glove', 'helps', 'haste', 'hints', 'image',
    'index', 'ivory', 'jacks', 'joint', 'kicks', 'knife', 'laced', 'lapse', 'laser', 'leaps', 'lemon', 'lunar', 'limbo', 'light', 'locus',
    'mango', 'march', 'moths', 'merch', 'molar', 'money', 'nails', 'naive', 'nerdy', 'night', 'noisy', 'oiled', 'order', 'paint', 'pearl',
    'pulse', 'piano', 'plaid', 'place', 'plank', 'perch', 'quick', 'quilt', 'raise', 'reach', 'ranks', 'roast', 'shine', 'shoes', 'shock',
    'slice', 'swamp', 'slime', 'snare', 'socks', 'stone', 'score', 'tamed', 'track', 'topaz', 'unite', 'vices', 'voila', 'viper', 'vogue',
    'vocal', 'whale', 'whine', 'wager', 'winds', 'whisk', 'waste', 'world', 'wrist', 'yoked', 'yeast', 'yield', 'yacht', 'zoned', 'zesty'
];

let targetWord = words[Math.trunc(Math.random() * 150)];
let health = 5;
let score = 0;
let currentRow = 0;

console.log("Target word:", targetWord);

function checkWord() {

    let userInput = prompt('Enter a 5-letter word:');

    if (userInput === null || userInput === "") {
        alert("Invalid Input. Please enter a word.");
        return;
    }

    if (userInput.length !== 5 ) {
        alert("Invalid Input. Please only enter a 5-letter word.");
        return;
    }
    
    let correctCount = 0;

    // Check and color each letter individually
    if (userInput[0] === targetWord[0]) {
        document.getElementById('r-' + currentRow + '-0').innerHTML = userInput[0].toUpperCase();
        document.getElementById('r-' + currentRow + '-0').style.backgroundColor = 'green';
        correctCount++;
    } else if (targetWord.indexOf(userInput[0]) !== -1) {
        document.getElementById('r-' + currentRow + '-0').innerHTML = userInput[0].toUpperCase();
        document.getElementById('r-' + currentRow + '-0').style.backgroundColor = 'yellow';
    } else {
        document.getElementById('r-' + currentRow + '-0').innerHTML = userInput[0].toUpperCase();
        document.getElementById('r-' + currentRow + '-0').style.backgroundColor = 'gray';
    }

    if (userInput[1] === targetWord[1]) {
        document.getElementById('r-' + currentRow + '-1').innerHTML = userInput[1].toUpperCase();
        document.getElementById('r-' + currentRow + '-1').style.backgroundColor = 'green';
        correctCount++;
    } else if (targetWord.indexOf(userInput[1]) !== -1) {
        document.getElementById('r-' + currentRow + '-1').innerHTML = userInput[1].toUpperCase();
        document.getElementById('r-' + currentRow + '-1').style.backgroundColor = 'yellow';
    } else {
        document.getElementById('r-' + currentRow + '-1').innerHTML = userInput[1].toUpperCase();
        document.getElementById('r-' + currentRow + '-1').style.backgroundColor = 'gray';
    }

    if (userInput[2] === targetWord[2]) {
        document.getElementById('r-' + currentRow + '-2').innerHTML = userInput[2].toUpperCase();
        document.getElementById('r-' + currentRow + '-2').style.backgroundColor = 'green';
        correctCount++;
    } else if (targetWord.indexOf(userInput[2]) !== -1) {
        document.getElementById('r-' + currentRow + '-2').innerHTML = userInput[2].toUpperCase();
        document.getElementById('r-' + currentRow + '-2').style.backgroundColor = 'yellow';
    } else {
        document.getElementById('r-' + currentRow + '-2').innerHTML = userInput[2].toUpperCase();
        document.getElementById('r-' + currentRow + '-2').style.backgroundColor = 'gray';
    }

    if (userInput[3] === targetWord[3]) {
        document.getElementById('r-' + currentRow + '-3').innerHTML = userInput[3].toUpperCase();
        document.getElementById('r-' + currentRow + '-3').style.backgroundColor = 'green';
        correctCount++;
    } else if (targetWord.indexOf(userInput[3]) !== -1) {
        document.getElementById('r-' + currentRow + '-3').innerHTML = userInput[3].toUpperCase();
        document.getElementById('r-' + currentRow + '-3').style.backgroundColor = 'yellow';
    } else {
        document.getElementById('r-' + currentRow + '-3').innerHTML = userInput[3].toUpperCase();
        document.getElementById('r-' + currentRow + '-3').style.backgroundColor = 'gray';
    }

    if (userInput[4] === targetWord[4]) {
        document.getElementById('r-' + currentRow + '-4').innerHTML = userInput[4].toUpperCase();
        document.getElementById('r-' + currentRow + '-4').style.backgroundColor = 'green';
        correctCount++;
    } else if (targetWord.indexOf(userInput[4]) !== -1) {
        document.getElementById('r-' + currentRow + '-4').innerHTML = userInput[4].toUpperCase();
        document.getElementById('r-' + currentRow + '-4').style.backgroundColor = 'yellow';
    } else {
        document.getElementById('r-' + currentRow + '-4').innerHTML = userInput[4].toUpperCase();
        document.getElementById('r-' + currentRow + '-4').style.backgroundColor = 'gray';
    }

    if (correctCount < 5) {
        health--;
        currentRow++;
    } else {
        score = 5;
    }

    if (score == 5) {
        alert("Congratulations! You won!");
        alert("Reload the page to play again.");
    }

    if (health-1 < 0 || currentRow >= 5) {
        alert("You lost! The word was " + targetWord);
        alert("Reload the page to play again.");
        health = -1;
    }

}