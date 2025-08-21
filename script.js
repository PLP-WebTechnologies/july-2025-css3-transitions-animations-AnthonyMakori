// Global multiplier
let globalMultiplier = 2;

// Calculate area function
function calculateArea(width, height) {
  let area = width * height;
  return area * globalMultiplier;
}

// Event listeners for calculator
document.getElementById('calcBtn').addEventListener('click', () => {
  const width = parseFloat(document.getElementById('width').value);
  const height = parseFloat(document.getElementById('height').value);

  if (isNaN(width) || isNaN(height)) {
    alert("Please enter valid numbers!");
    return;
  }

  const result = calculateArea(width, height);
  document.getElementById('result').textContent = `Result (x${globalMultiplier}): ${result}`;
});

// Box animation
const animateBtn = document.getElementById('animateBtn');
const animatedBox = document.getElementById('animatedBox');

animateBtn.addEventListener('click', () => {
  animatedBox.classList.remove('bounce');
  void animatedBox.offsetWidth;
  animatedBox.classList.add('bounce');
});

function changeBoxColor(element, color) {
  element.style.backgroundColor = color;
}

animatedBox.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  changeBoxColor(animatedBox, randomColor);
});

// Modal functionality
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

function showModal() {
  modal.classList.remove('hide');
  modal.classList.add('show');
}

function hideModal() {
  modal.classList.remove('show');
  modal.classList.add('hide');
  setTimeout(() => { modal.style.display = 'none'; }, 500);
}

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  showModal();
});

closeModalBtn.addEventListener('click', hideModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) hideModal();
});

// Card flip functionality
const card = document.querySelector('.card');
card.addEventListener('click', () => {
  card.classList.toggle('flip');
});
