let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function add1home() {
    homeScore.textContent = Number(homeScore.textContent) + 1;
}

function add2home() {
    homeScore.textContent = Number(homeScore.textContent) + 2;
}

function add3home() {
    homeScore.textContent = Number(homeScore.textContent) + 3;
}

function add1guest() {
    guestScore.textContent = Number(guestScore.textContent) + 1;
}

function add2guest() {
    guestScore.textContent = Number(guestScore.textContent) + 2;
}

function add3guest() {
    guestScore.textContent = Number(guestScore.textContent) + 3;
}

function newGame() {
    guestScore.textContent = 0;
    homeScore.textContent = 0;
}

if (homeScore.textContent > guestScore.textContent) {

}