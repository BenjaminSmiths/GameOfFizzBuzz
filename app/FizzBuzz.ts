export const WORDS = {
    FIZZ: <WordType>'fizz',
    BUZZ: <WordType>'buzz',
    FIZZBUZZ: <WordType>'fizzbuzz',
    LUCKY: <WordType>'lucky'
};
export type WordType = 'fizz'|'buzz'|'fizzbuzz'|'lucky'


export class FizzBuzz {
    constructor(readonly sequence: any[]) {

    }


    play(): any[] {
        return this.sequence.map(number => {
            switch (true) {
                case String(number).includes('3'):
                    return WORDS.LUCKY;
                case number % 15 === 0:
                    return WORDS.FIZZBUZZ;
                case number % 3 === 0:
                    return WORDS.FIZZ;
                case number % 5 === 0:
                    return WORDS.BUZZ;
                default:
                    return number;
            }
        })
    }
}