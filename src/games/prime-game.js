import { gameProcess, getRandomNumber } from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }
  if (number <= 3) {
    return 'yes';
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return 'no';
  }
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const corePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const randomNumber = getRandomNumber(1, 1000);
  console.log(`Question: ${randomNumber}`);
  const correctAnswer = isPrime(randomNumber);
  return String(correctAnswer);
};

const primeGame = (userName) => {
  console.log(`Hello ${userName}!`);
  return gameProcess(userName, 0, corePrime);
};
export default primeGame;
