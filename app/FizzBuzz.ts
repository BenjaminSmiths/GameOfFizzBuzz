export const WORDS = {
    FIZZ: <WordType>'fizz',
    BUZZ: <WordType>'buzz',
    FIZZBUZZ: <WordType>'fizzbuzz',
    LUCKY: <WordType>'lucky'
};
export type WordType = 'fizz'|'buzz'|'fizzbuzz'|'lucky'


export class FizzBuzz {

    private _reports: any[] = [];

    constructor(readonly sequence: any[]) {

    }

    report(): string {
        return this._reports ? [...this._wordReport.concat(), ...this._numberReport()].join(' ') : '';
    }

    private get _wordReport(): any[] {
        return Object.keys(WORDS).map((key: string) => {
            let word: string = (WORDS as any)[key];
            return `${word}: ${this._count(word)}`
        });
    }

    private _numberReport(): any[] {
        return [`integer: ${this._reports.filter(n => isNaN(n as number)).length}`];
    }

    private _count(type: string): number {
        let filtered = this._reports.filter(n => {
            return n === type
        });
        return filtered ? filtered.length : 0;
    }


    play(): any[] {
        return this._reports = this.sequence.map(number => {
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