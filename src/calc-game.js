import readlineSync from 'readline-sync';

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

const gameProcess = (userName, count) => {
  if (count === 3) {
    return `Congratulations, ${userName}!`;
  }
  const randomNumberOne = getRandomNumber(1, 10);
  const randomNumberTwo = getRandomNumber(1, 10);
  const randomNumberOfOperator = getRandomNumber(1, 3);
  const operator = getOperator(randomNumberOfOperator);
  console.log(`${randomNumberOne} ${operator} ${randomNumberTwo}`);
  const correctAnswer = getCorrectAnswer(randomNumberOne, operator, randomNumberTwo);
  console.log(correctAnswer);
  const userAnswer = Number(readlineSync.question('Your answer: ').toLowerCase());
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return (gameProcess(userName, count + 1));
  }
  console.log(`'${typeof userAnswer}' is wrong answer. Correct answer was '${typeof correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return (gameProcess(userName, 0));
};
const calcGame = (userName) => {
  console.log(`Hello ${userName}!`);
  console.log('What is the result of the expression?');
  return gameProcess(userName, 0);
};
export default calcGame;
