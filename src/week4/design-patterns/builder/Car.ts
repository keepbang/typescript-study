import {CarBuilder} from "./CarBuilder";

export class Car {
  private readonly _body: string;
  private readonly _tire: string;
  private readonly _sunroof: string;

  constructor(builder: CarBuilder) {
    this._body = builder.body;
    this._tire = builder.tire;
    this._sunroof = builder.sunroof;
  }

  get body(): string {
    return this._body;
  }

  get tire(): string {
    return this._tire;
  }

  get sunroof(): string {
    return this._sunroof;
  }

  explain(): void {
    if (this._body) console.log(`my body is ${this._body}`);
    if (this._tire) console.log(`my tire is ${this._tire}`);
    if (this._sunroof) console.log(`my sunroof is ${this._sunroof}`);
  }
}