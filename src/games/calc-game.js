import { gameProcess, getRandomNumber } from '../index.js';

const getOperator = (randomNum) => {
  if (randomNum === 1) {
    return '+';
  }
  if (randomNum === 2) {
    return '-';
  }
  if (randomNum === 3) {
    return '*';
  }
  return '';
};

const getCorrectAnswer = (numOne, symbol, numTwo) => {
  let result = 0;
  if (symbol === '+') {
    result = numOne + numTwo;
  }
  if (symbol === '-') {
    result = numOne - numTwo;
  }
  if (symbol === '*') {
    result = numOne * numTwo;
  }
  return result;
};

const coreCalc = () => {
  console.log('What is the result of the expression?');
  const randomNumberOne = getRandomNumber(1, 10);
  const randomNumberTwo = getRandomNumber(1, 10);
  const randomNumberOfOperator = getRandomNumber(1, 3);
  const operator = getOperator(randomNumberOfOperator);
  console.log(`${randomNumberOne} ${operator} ${randomNumberTwo}`);
  const correctAnswer = getCorrectAnswer(randomNumberOne, operator, randomNumberTwo);
  return String(correctAnswer);
};

const calcGame = (userName) => {
  console.log(`Hello ${userName}!`);
  return gameProcess(userName, 0, coreCalc);
};
export default calcGame;
