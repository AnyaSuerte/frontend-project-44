import { getRandomNumber, gameProcess } from '../index.js';

const arithmeticProgression = (a, d, n, lengthArr) => {
  const progression = [];
  for (let i = 0; i < lengthArr; i += 1) {
    const term = a + i * d;
    progression.push(term);
  }
  return progression;
};

const coreProgression = () => {
  console.log('What number is missing in the progression?');
  const firstTerm = getRandomNumber(1, 9);
  const difference = getRandomNumber(1, 10);
  const length = 10;
  const numberEmptyTerm = getRandomNumber(1, 10);
  const progressionArr = arithmeticProgression(firstTerm, difference, numberEmptyTerm, length);
  const correctAnswer = progressionArr[numberEmptyTerm];
  progressionArr[numberEmptyTerm] = '..';
  console.log('Question:', progressionArr.join(' '));
  return String(correctAnswer);
};

const progressionGame = (userName) => {
  console.log(`Hello, ${userName}!`);
  return gameProcess(userName, 0, coreProgression);
};
export default progressionGame;
