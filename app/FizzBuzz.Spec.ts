import {expect} from 'chai';
import {FizzBuzz} from './FizzBuzz';

describe('FizzBuzz', () => {

    describe('Playing the game', () => {
        let seq: number[];

        beforeEach(() => {
            seq = [...Array(20).keys()].map(n => n + 1);
        });

        it('should have a readonly sequence of numbers', () => {
            // Given
            let game = new FizzBuzz(seq);

            // Then
            expect(game.sequence).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
        });

        it('should say the fizz, buzz and fizzbuzz words', () => {
            // Given
            let game = new FizzBuzz(seq);

            // When
            let result = game.play();

            // Then
            expect(result).to.deep.equal([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz']);
        });
    });

    describe('Playing the different word types', () => {
        it('should say fizz when it finds a multiple of 3', () => {
            // Given
            let game = new FizzBuzz([2, 3, 2, 6, 2, 9, 2, 12]);

            // When
            let result = game.play();

            // then
            expect(result).to.deep.equal([2, 'fizz', 2, 'fizz', 2, 'fizz', 2, 'fizz'])
        });

        it('should say buzz when it finds a multiple of 5', () => {
            // Given
            let game = new FizzBuzz([2, 5, 2, 10, 2, 20, 2, 25]);

            // When
            let result = game.play();

            // then
            expect(result).to.deep.equal([2, 'buzz', 2, 'buzz', 2, 'buzz', 2, 'buzz'])
        });

        it('should say fizzbuzz when it finds a multiple of 15', () => {
            // Given
            let game = new FizzBuzz([2, 15, 2, 30, 2, 45, 2, 60]);

            // When
            let result = game.play();

            // then
            expect(result).to.deep.equal([2, 'fizzbuzz', 2, 'fizzbuzz', 2, 'fizzbuzz', 2, 'fizzbuzz'])
        });
    });

});