const board = document.querySelector('#board');
const SQUARES_NUMBER = 800;

const colors = ['#FF00FF', '#00BFFF', '#FF0000', '#00FF00', '#FFFFFF'];

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

const setColor = (element) => {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`;
  element.style.borderRadius = '50%'
};
const removeColor = (element) => {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
  element.style.borderRadius = '0%'

};

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });
  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });
  board.append(square);
}
