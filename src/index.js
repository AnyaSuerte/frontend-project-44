import readlineSync from 'readline-sync';

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const gameProcess = (userName, count, core) => {
  if (count === 3) {
    return `Congratulations, ${userName}!`;
  }
  const correctAnswer = core();
  const userAnswer = String(readlineSync.question('Your answer: ').toLowerCase());
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return (gameProcess(userName, count + 1, core));
  }
  console.log(`'${typeof userAnswer}' is wrong answer. Correct answer was '${typeof correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return (gameProcess(userName, 0, core));
};
