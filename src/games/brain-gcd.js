#!/usr/bin/env node

import index from '../index.js';
import getRandom from '../random.js';

const gameRuls = 'Find the greatest common divisor of given numbers.';
const gcd = (firstCount, secondCount) => {
  if (secondCount === 0) {
    return firstCount;
  }
  return gcd(secondCount, firstCount % secondCount);
};

const check = () => {
  const firstCount = getRandom();
  const secondCount = getRandom();
  const question = `${firstCount} ${secondCount}`;
  const rightAnswer = String(gcd(firstCount, secondCount));
  return [question, rightAnswer];
};

const brainGcd = () => index(gameRuls, check);

export default brainGcd;
