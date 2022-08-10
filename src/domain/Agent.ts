import {Person} from "./Person";

export class Agent extends Person {

  constructor(name = "FA") {
    super(name);
  }

  introduce(): void {
    console.log(`Agent name : ${this.name}`);
  }
}