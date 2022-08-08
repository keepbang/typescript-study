import {Person} from "./Person";

export class Agent extends Person {

  constructor(name = "FA") {
    super(name);
  }

  get name(): string {
    return this.name;
  }

  introduce(): void {
    console.log(`Agent name : ${this.name}`);
  }
}