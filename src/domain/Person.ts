import {Greeter} from "./Greeter";


export class Person implements Greeter {

    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    introduce(): void {
        console.log(this._name)
    }


    get name(): string {
        return this._name;
    }
}