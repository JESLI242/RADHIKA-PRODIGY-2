let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;
let laps = [];

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTime, 1000);
        startStopButton.textContent = 'Stop';
        running = true;
    } else {
        clearInterval(timerInterval);
        startStopButton.textContent = 'Start';
        running = false;
    }
}

function reset() {
clearInterval(timerInterval);
display.textContent = '00:00:00';
startStopButton.textContent = 'Start';
running = false;
laps = [];
lapsList.innerHTML = '';
}

function lap() {
if (running) {
    const lapTime = display.textContent;
    laps.push(lapTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
}
}

function updateTime() {
updatedTime = new Date().getTime();
difference = updatedTime - startTime;

let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((difference % (1000 * 60)) / 1000);

hours = (hours < 10) ? '0' + hours : hours;
minutes = (minutes < 10) ? '0' + minutes : minutes;
seconds = (seconds < 10) ? '0' + seconds : seconds;

display.textContent = hours + ':' + minutes + ':' + seconds;
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
lapButton.addEventListener('click', lap);