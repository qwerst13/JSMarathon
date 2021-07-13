const startBtn = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeEl = document.getElementById('time');
const board = document.getElementById('board');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'cyan', 'lime', 'gray', 'white'];
let time = 0;
let score = 0;

startBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

  screens[0].classList.add('up');
});

timeList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('time-btn')) {
      time = parseInt(evt.target.getAttribute('data-time'));
      screens[1].classList.add('up');
      startGame();
  }
});

board.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('circle')) {
    score++;
    evt.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) finishGame();
  else setTime(--time);
}

function setTime(value) {
  if (value < 10) value = `0${value}`
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  timeEl.parentNode.remove();
  board.innerHTML = `<h1>Cчет: <span slass="primary">${score}</span></h1`
}

function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(15, 50);
  const {width, height} = board.getBoundingClientRect();
  const x = getRandomNumber(size, width - 2*size);
  const y = getRandomNumber(size, height - 2*size);

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  setColor(circle);
  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random()*(max-min)+min);
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}

function setColor(el) {
  const color = getRandomColor();
  el.style.background = color;
}