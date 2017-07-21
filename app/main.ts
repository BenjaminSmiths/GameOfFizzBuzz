import {FizzBuzz} from './FizzBuzz';

const sequence = [...Array(20).keys()].map(n => n + 1);
const gameOfFizzBuzz = new FizzBuzz(sequence);

console.log(gameOfFizzBuzz.play().join(' '));
console.log(gameOfFizzBuzz.report());