
export class Person {

    constructor(
        public name: string,
        public age: number) {
    }

    greet() {
        console.log('Hi ' + this.name);
    }

}