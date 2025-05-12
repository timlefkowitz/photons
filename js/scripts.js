// Clock
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerText = `${h}:${m}:${s}`;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    return i < 10 ? `0${i}` : i;
}

startTime();

// Random Quote Generator
const quotes = [
    "Life is a balance, Life is Change",
    "Life Life",
    "A man that knows cannot learn",
    "Computer Science is cool"
];

function displayRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('randomQuote').innerText = randomQuote;
}

displayRandomQuote();