import {FizzBuzz} from './FizzBuzz';


const gameOfFizzBuzz = new FizzBuzz([...Array(20).keys()].map(n => n+1));

console.log(gameOfFizzBuzz.play());