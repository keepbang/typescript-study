import {Agent} from "./Agent";
import {Person} from "./Person";
import {Teams} from "./Teams";
import {PlayerBuilder} from "./PlayerBuilder";

export class Player extends Person {
  private team: Teams;
  private contractPeriodMonth: number;
  private agent: Agent;

  constructor(builder: PlayerBuilder) {
    super(builder.name);
    this.team = builder.team;
    this.contractPeriodMonth = builder.contractPeriodMonth;
    this.agent = builder.agent;
  }

  introduce(): void {
    console.log('Player ----------------------')
    console.log(`  ⌙ name : ${this.name}`);
    console.log(`  ⌙ team : ${this.team}`);
    console.log(`  ⌙ contractPeriodMonth : ${this.contractPeriodMonth}`);
    console.log(`  ⌙ agent : ${this.agent.name}`);
  }

  join(team: Teams, contractMonth: number): void {
    this.team = team;
    this.contractPeriodMonth = contractMonth;
  }

  leave(): void {
    this.team = Teams.NA;
  }

  extendContract(periodMonth: number): void {
    if (periodMonth > 0) {
      this.contractPeriodMonth += periodMonth;
      return;
    }
    console.log("0보다 큰수를 입력해야합니다.");
  }

  managedBy(agent: Agent): void {
    this.agent = agent;
  }

}