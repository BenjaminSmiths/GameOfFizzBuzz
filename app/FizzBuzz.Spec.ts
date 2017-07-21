import {expect} from 'chai';
import {FizzBuzz, WORDS, WordType} from './FizzBuzz';

describe(WORDS.FIZZBUZZ, () => {
    let seq: number[];

    beforeEach(() => {
        seq = [...Array(20).keys()].map(n => n + 1);
    });

    describe('Playing the game', () => {

        it('should have a readonly sequence of numbers', () => {
            // Given
            let game = new FizzBuzz(seq);

            // Then
            expect(game.sequence).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
        });

        it('should say the fizz, buzz, fizzbuzz and lucky word', () => {
            // Given
            let game = new FizzBuzz(seq);

            // When
            let result = game.play();

            // Then
            expect(result).to.deep.equal([1, 2, WORDS.LUCKY, 4, WORDS.BUZZ, WORDS.FIZZ, 7, 8, WORDS.FIZZ, WORDS.BUZZ, 11, WORDS.FIZZ, WORDS.LUCKY, 14, WORDS.FIZZBUZZ, 16, 17, WORDS.FIZZ, 19, WORDS.BUZZ]);
        });
    });

    describe('Playing the different word types', () => {

        let scenarios: { word: WordType, title: string, seq: any[], result: any[] }[] = [
            {
                word: WORDS.FIZZ,
                title: 'multiple of 3',
                seq: [2, 6, 2, 9, 2, 12, 2, 18],
                result: [2, WORDS.FIZZ, 2, WORDS.FIZZ, 2, WORDS.FIZZ, 2, WORDS.FIZZ]
            }, {
                word: WORDS.BUZZ,
                title: 'multiple of 5',
                seq: [2, 5, 2, 10, 2, 20, 2, 25],
                result: [2, WORDS.BUZZ, 2, WORDS.BUZZ, 2, WORDS.BUZZ, 2, WORDS.BUZZ]
            }, {
                word: WORDS.FIZZBUZZ,
                title: 'multiple of 15',
                seq: [2, 15, 2, 45, 2, 60, 2, 75],
                result: [2, WORDS.FIZZBUZZ, 2, WORDS.FIZZBUZZ, 2, WORDS.FIZZBUZZ, 2, WORDS.FIZZBUZZ]
            }, {
                word: WORDS.LUCKY,
                title: '3 in anything',
                seq: [2, 3, 2, 30, 2, 123, 2, 20000003],
                result: [2, WORDS.LUCKY, 2, WORDS.LUCKY, 2, WORDS.LUCKY, 2, WORDS.LUCKY]
            }
        ];

        scenarios.forEach(scenario => {

            it(`should say ${scenario.word} when it finds a ${scenario.title}`, () => {
                // Given
                let game = new FizzBuzz(scenario.seq);

                // When
                let result = game.play();

                // then
                expect(result).to.deep.equal(scenario.result);
            });
        });

        it('should build a report of words changed', () => {
            // Given
            let game = new FizzBuzz(seq);

            // When
            game.play();

            // Then
            expect(game.report()).to.equal('fizz: 4 buzz: 3 fizzbuzz: 1 lucky: 2 integer: 10');
        });
    });
});