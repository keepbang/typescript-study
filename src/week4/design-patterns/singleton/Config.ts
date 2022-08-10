export class Config {
  private static instance: Config;
  private readonly host: string;

  private constructor() {
    this.host = '127.0.0.1';
    console.log('called Config()');
  }

  static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }

    console.log('returned Config instance');
    return Config.instance;
  }

  getHost(): string {
    return this.host;
  }
}