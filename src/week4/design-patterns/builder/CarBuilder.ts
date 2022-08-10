import {Body, SunRoof, Tire} from "./CarVariables";
import {Car} from "./Car";

export class CarBuilder {

  private readonly _body: Body;
  private readonly _tire: Tire;
  private _sunroof!: SunRoof;

  constructor(body: Body, tire: Tire) {
    this._body = body;
    this._tire = tire;
  }

  get body(): Body {
    return this._body;
  }
  get tire(): Tire {
    return this._tire;
  }

  get sunroof(): SunRoof {
    return this._sunroof;
  }

  setSunRoof(sunroof: SunRoof): CarBuilder {
    this._sunroof = sunroof;
    return this;
  }

  build(): Car {
    return new Car(this);
  }
}
