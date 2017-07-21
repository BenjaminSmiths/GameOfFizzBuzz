

export class FizzBuzz {
    constructor(readonly sequence: any[]) {

    }


    play(): any[] {
        return this.sequence.map(number => {
            switch (true) {
                case number % 15 === 0:
                    return 'fizzbuzz';
                case number % 3 === 0:
                    return 'fizz';
                case number % 5 === 0:
                    return 'buzz';
                default:
                    return number;
            }
        })
    }
}