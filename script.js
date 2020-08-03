'use strict';

// Game settings
const GAME_TIME = 30;

// Target position
const TARGET_MAX_LEFT = 900;
const TARGET_MIN_LEFT = 0;
const TARGET_MAX_TOP = 400;
const TARGET_MIN_TOP = 0;

let target = document.getElementById('target');
let timer = document.getElementById('timer');
let scoreboard = document.getElementById('scoreboard');
let gameField = document.getElementById('gamefield');
let startGameText = document.getElementById('startGameText');
let endGameText = document.getElementById('endGameText');
let startGameField = document.getElementById('startGameField');
let endGameField = document.getElementById('endGameField');

let score = 0;
let timeLeft = 0;

function setDefaultInfo() {
    score = 0;
    timeLeft = 0;
    updateScoreboard();
    updateTimer();
}

function moveTarget(top, left) {
    target.style.top = top;
    target.style.left = left;
}

function randomTarget() {
    let left = TARGET_MIN_LEFT + Math.random() * (TARGET_MAX_LEFT - TARGET_MIN_LEFT);
    let top = TARGET_MIN_TOP + Math.random() * (TARGET_MAX_TOP - TARGET_MIN_TOP);
    moveTarget(top, left);
}

function setScore(val) {
    scoreboard.textContent = 'Score: ' + val;
}

function setTimer(val) {
    timer.textContent = val + 's';
}

function setEndGameMenuScore(val) {
    endGameText.textContent = 'Your score: ' + val;
}

function updateScoreboard() {
    setScore(score);
}

function updateTimer() {
    setTimer(timeLeft);
}

function addScore(val) {
    score += val;
    updateScoreboard();
    randomTarget();
}

function showGame() {
    startGameField.style.display = 'none';
    endGameField.style.display = 'none';
    target.style.display = 'flex';
}

function showStartMenu() {
    endGameField.style.display = 'none';
    target.style.display = 'none';
    startGameField.style.display = 'block';
}

function showEndMenu() {
    target.style.display = 'none';
    startGameField.style.display = 'none';
    endGameField.style.display = 'block';
}

function startGame() {
    score = 0;
    timeLeft = GAME_TIME;

    showGame();

    updateScoreboard();
    updateTimer();
    randomTarget();

    setTimeout(game);
}

function endGame() {
    setEndGameMenuScore(score);
    setDefaultInfo();
    showEndMenu();
}

function game() {
    let update = setInterval(function() {
        timeLeft -= 1;
        updateTimer();

        if (timeLeft === 0) {
            endGame();
            clearInterval(update);
        }
    }, 1000);
}

function startMenu() {
    showStartMenu();
}

setDefaultInfo();
startMenu();