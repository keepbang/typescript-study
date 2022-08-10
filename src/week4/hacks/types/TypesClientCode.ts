import {GangwonUniform, TottenhamUniform, Uniform} from "./Types";

export class TypesClientCode {
  consume(): void {
    const gw: Uniform = GangwonUniform;
    const tottenham: Uniform = TottenhamUniform;

    console.dir(gw);
    console.dir(tottenham);
  }
}