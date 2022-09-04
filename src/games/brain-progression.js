#!/usr/bin/env node

import index from '../index.js';
import getRandom from '../random.js';
import getRandomInRange from '../getRandomInRange.js';

const gameRuls = 'What number is missing in the progression?';

const check = () => {
  const arrLenght = getRandomInRange(5, 10);
  const firstCount = getRandom();
  const step = getRandom();
  const hiddenEl = getRandomInRange(0, arrLenght - 1);
  const arr = [firstCount];
  let i = 1;
  let result = firstCount;
  while (i < arrLenght) {
    result += step;
    arr.push(result);
    i += 1;
  }
  const findElem = arr[hiddenEl];
  const finalArr = arr;
  finalArr[hiddenEl] = '..';
  let question = '';
  for (let j = 0; j < finalArr.length; j += 1) {
    question = `${question} ${finalArr[j]}`;
  }
  const rightAnswer = String(findElem);
  return [question, rightAnswer];
};

const brainProgression = () => index(gameRuls, check);

export default brainProgression;
