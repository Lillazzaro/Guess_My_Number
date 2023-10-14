'use script';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When no input
  if (!guess) {
    displayMessage('⛔ No Number');

    //When guess is correct
  } else if (guess === secretNumber) {
    displayMessage('✔️ Correct Number!');
    //Showcase secret number
    document.querySelector('.number').textContent = secretNumber;
    //Change the color of the page
    document.querySelector('body').style.backgroundColor = '#60b347';
    //Change with of the box
    document.querySelector('.number').style.width = '30rem';
    //Set highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '👇 Go Lower!' : '☝️ Go Higher');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Game Over');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Clicking on the Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Resetting the variables
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';

  //Resetting the style
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
