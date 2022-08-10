import {Car} from "./Car";
import {CarBuilder} from "./CarBuilder";
import {Body, SunRoof, Tire} from "./CarVariables";

export class CarClientCode {

  consume(): void {
    const body: Body = "strong";
    const tire: Tire = "nexen";

    const builder: CarBuilder = new CarBuilder(body, tire);
    const car: Car = builder.build();

    car.explain();
  }

  consume2(): void {
    const body: Body = "weak";
    const tire: Tire = "hankook";
    const sunroof: SunRoof = "my sunroof";

    const car: Car = new CarBuilder(body, tire)
    .setSunRoof(sunroof)
    .build();

    car.explain();
  }

  /*
  consumeWrong(): void {
    const body: Body = "strong";

    const builder: CarBuilder = new CarBuilder(body); // requires more field
    const car: Car = builder.build();

    car.explain();
  }
  */
}