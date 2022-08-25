import readlineSync from 'readline-sync';

const even = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let rdmNumber = Math.floor(Math.random() * 10);
  let i = 1;
  let rightAnswer = '';
  const comment = 'Correct!';
  while (i <= 3) {
    console.log(`Question: ${rdmNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if ((rdmNumber % 2 === 0 && answer === 'yes')
        || (rdmNumber % 2 !== 0 && answer === 'no')) {
      console.log(comment);
      i += 1;
      rdmNumber = Math.floor(Math.random() * 10);
    } else {
      rightAnswer = (rdmNumber % 2 === 0 ? 'yes' : 'no');
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

even();
