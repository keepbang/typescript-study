export class Agent {
  private readonly _name: string;

  constructor(name= 'FA') {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  introduce(): void {
    console.log(`Agent name : ${this._name}`);
  }

}