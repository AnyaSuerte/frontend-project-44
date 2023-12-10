import readlineSync from 'readline-sync';

const gameProcess = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');
  const randomNumber = (Math.random() * 10 + 1).toFixed(0);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  // let numberOfCorrectAnswers = 0;
  if (randomNumber === randomNumber % 2 || userAnswer === 'yes' || userAnswer === 'Yes') {
    console.log('Correct!');
    // numberOfCorrectAnswers += 1;
    // console.log(numberOfCorrectAnswers);
    gameProcess();
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${userName}!`);
  }
  if (randomNumber !== randomNumber % 2 || userAnswer === 'no' || userAnswer === 'No') {
    console.log('Correct!');
    gameProcess();
  // numberOfCorrectAnswers += 1;
  // console.log(numberOfCorrectAnswers);
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${userName}!`);
  }
// else if (numberOfCorrectAnswers === 3) {
//   console.log(`Congratulations, ${userName}!`);
// }
};
const parityGame = (userName) => {
  console.log(`Hello ${userName}!`);
  gameProcess(userName);
};

export default parityGame;
