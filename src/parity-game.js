import readlineSync from 'readline-sync';

const gameProcess = (userName, count) => {
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');
  const randomNumber = (Math.random() * 10 + 1).toFixed(0);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if ((randomNumber % 2) === 0 && (userAnswer === 'yes' || userAnswer === 'Yes')) {
    console.log('10Correct!');
    gameProcess(userName, count + 1);
  } else if ((randomNumber % 2) !== 0 && (userAnswer === 'no' || userAnswer === 'No')) {
    console.log('14Correct!');
    gameProcess(userName, count + 1);
  } else {
    console.log('Неправильный ответ, сыграйте ещё раз');
    gameProcess(userName, count);
  }
};
const parityGame = (userName) => {
  console.log(`Hello ${userName}!`);
  gameProcess(userName, 0);
};

export default parityGame;
