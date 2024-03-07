import { getRandomNumber, gameProcess } from '../index.js';

const gcd = (numberOne, numberTwo) => {
  let a = numberOne;
  let b = numberTwo;
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const coreGcd = () => {
  const randomNumberOne = getRandomNumber(1, 100);
  const randomNumberTwo = getRandomNumber(1, 100);
  console.log('Find the greatest common divisor of given numbers:');
  console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);
  const correctArrayOrder = [randomNumberOne, randomNumberTwo];

  correctArrayOrder.sort((a, b) => b - a);
  const correctAnswer = gcd(correctArrayOrder[0], correctArrayOrder[1]);
  return String(correctAnswer);
};

const gcdGame = (userName) => {
  console.log(`Hello, ${userName}!`);
  return gameProcess(userName, 0, coreGcd);
};
export default gcdGame;
