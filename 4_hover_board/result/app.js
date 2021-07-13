const board = document.getElementById('board');
const SQUARES_NUMBER = 400;
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'cyan', 'lime'];

for (let i=0; i<SQUARES_NUMBER; i++) {
  const sqare = document.createElement('div');
  sqare.classList.add('square');

  sqare.addEventListener('mouseover', () => {
    setColor(sqare)
  });

  sqare.addEventListener('mouseleave', () => {
    removeColor(sqare)
  });

  board.append(sqare);
}

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 8px ${color}`
}

function removeColor(el) {
  el.style.backgroundColor = '#1d1d1d';
  el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}