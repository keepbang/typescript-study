import {Agent} from "./Agent";

export class FreeAgent extends Agent {

    constructor(name = "FA") {
        super(name);
    }

    introduce() {
        console.log(`Free Agent name : ${this.name}`);
    }

}