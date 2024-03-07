import { getRandomNumber, gameProcess } from '../index.js';

const getCorrectAnswer = (num) => {
  if ((num % 2) === 0) {
    return 'yes';
  }
  return 'no';
};
const coreParity = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');
  const randomNumber = getRandomNumber(1, 10);
  const correctAnswer = getCorrectAnswer(randomNumber);
  console.log(`Question: ${randomNumber}`);
  return String(correctAnswer);
};
const parityGame = (userName) => {
  console.log(`Hello, ${userName}!`);
  return gameProcess(userName, 0, coreParity);
};

export default parityGame;
