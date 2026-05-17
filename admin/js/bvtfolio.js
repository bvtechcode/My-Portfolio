const quotes = [
    "Success is not final, failure is not fatal.",
    "Dream big and dare to fail.",
    "Believe you can and you're halfway there.",
    "Do something today that your future self will thank you for.",
    "Great things never come from comfort zones.",
    "Stay positive, work hard, make it happen."
];

function generateQuote(){

    // Generate random index
    let randomNumber = Math.floor(Math.random() * quotes.length);

    // Display random quote
    document.getElementById("quote").innerHTML = quotes[randomNumber];
}