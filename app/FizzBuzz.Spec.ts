import {expect} from 'chai';
import {FizzBuzz} from './FizzBuzz';

describe('FizzBuzz', () => {

    describe('Playing the game', () => {

        it ('should have a readonly sequence of numbers', () => {
            // Given
            let seq: number[] = [...Array(20).keys()].map(n => n + 1);
            let game = new FizzBuzz(seq);

            // Then
            expect(game.sequence).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
        })
    });

});