import readlineSync from 'readline-sync';

const gameProcess = (userName, count) => {
  console.log(count);
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  console.log(count);
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');
  const randomNumber = (Math.random() * 10 + 1).toFixed(0);
  const isEvenNumber = (randomNumber % 2) === 0;
  const isNotEvenNumber = (randomNumber % 2) !== 0;
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  if (isEvenNumber && (userAnswer !== 'yes')) {
    console.log('1 иф');
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${userName}!`);
    gameProcess(userName, count);
  } else if (isNotEvenNumber && (userAnswer !== 'no')) {
    console.log('2 элси иф');
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${userName}!`);
    gameProcess(userName, count);
  } else {
    console.log('3 элси');
    console.log('23Correct!');
    gameProcess(userName, count + 1);
  }
};
const parityGame = (userName) => {
  console.log(`Hello ${userName}!`);
  gameProcess(userName, 0);
};

export default parityGame;
