import readlineSync from 'readline-sync';

const getCorrectAnswer = (num) => {
  if ((num % 2) === 0) {
    return 'yes';
  }
  return 'no';
};
const gameProcess = (userName, count) => {
  console.log('count', count);
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');
  const randomNumber = (Math.random() * 10 + 1).toFixed(0);
  const correctAnswer = getCorrectAnswer(randomNumber);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    gameProcess(userName, count + 1);
  } else if (correctAnswer !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    gameProcess(userName, 0);
  }
};
const parityGame = (userName) => {
  console.log(`Hello ${userName}!`);
  gameProcess(userName, 0);
};

export default parityGame;
