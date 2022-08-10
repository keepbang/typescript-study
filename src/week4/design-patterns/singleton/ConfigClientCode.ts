import {Config} from "./Config";

export class ConfigClientCode {
  private config: Config;

  constructor() {
    this.config = Config.getInstance();
  }

  consume(): void {
    this.config.getHost();
  }
}