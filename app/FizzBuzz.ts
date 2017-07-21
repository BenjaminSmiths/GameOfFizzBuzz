export const WORDS = {
    FIZZ: <WordType>'fizz',
    BUZZ: <WordType>'buzz',
    FIZZBUZZ: <WordType>'fizzbuzz',
    LUCKY: <WordType>'lucky'
};
export type WordType = 'fizz'|'buzz'|'fizzbuzz'|'lucky'


export class FizzBuzz {

    private _reports: (WordType|number)[] = [];

    constructor(readonly sequence: number[]) {

    }

    /**
     * Build a report string with the number of alterations for each word changed
     * and a report for the unchanged integers remaining.
     *
     * @returns {string}
     */
    report(): string {
        return this._reports ? [...this._wordReports, ...this._numberReports].join(' ') : '';
    }

    /**
     * Will run though the sequence of numbers and replace the fizz, buzz, fizzbuzz and licky numbers with words
     *
     * @returns {[(WordType|any)]}
     */
    play(): (WordType|number)[] {
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

    //////////////////////////////////////////////////////////
    // Private Methods                                      //
    //////////////////////////////////////////////////////////

    private get _wordReports(): string[] {
        return Object.keys(WORDS).map((key: string) => {
            let word: string = (WORDS as any)[key];
            return `${word}: ${this._count(word)}`
        }).concat();
    }

    private get _numberReports(): string[] {
        return [`integer: ${this._reports.filter(n => isNaN(n as number)).length}`];
    }

    private _count(type: string): number {
        let filtered = this._reports.filter(n => {
            return n === type
        });
        return filtered ? filtered.length : 0;
    }

}