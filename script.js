function updateDisplay(){
let texttbox = document.getElementById("textinput");
let displaytext = document.getElementById("nameDisplay");

displaytext.textContent = textbox.value;
}

let quotes = [
    "GOD IS GOOD ALL THE TIME",
    "WORK HARD IN SILENCE LET SUCCESS MAKE THE NOSE",
    "VIEW COMES AFTER THE HARDEST CLIMB",
];

let displayQuote = document.getElementById("quoteDisplay");

function displayRandom() {

    let randonIndex = Math.floor(Math.random() * quotes.length);

    displayQuote.textContent = quotes[randonIndex];
    
}