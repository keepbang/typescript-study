import {Agent} from "./Agent";

const DEFAULT_TEAM = "FA";

export class Player {
  private name: string;
  private team: string;
  private contractPeriodMonth: number;
  private agent: Agent;

  constructor(name: string, agent: Agent, team = DEFAULT_TEAM, contractPeriodMonth = 0) {
    this.name = name;
    this.team = team;
    this.contractPeriodMonth = contractPeriodMonth;
    this.agent = agent;
  }

  introduce(): void {
    console.log('Player ----------------------')
    console.log(`  ⌙ name : ${this.name}`);
    console.log(`  ⌙ team : ${this.team}`);
    console.log(`  ⌙ contractPeriodMonth : ${this.contractPeriodMonth}`);
    console.log(`  ⌙ agent : ${this.agent.name}`);
  }

  join(team: string, contractMonth: number): void {
    this.team = team;
    this.contractPeriodMonth = contractMonth;
  }

  leave(): void {
    this.team = DEFAULT_TEAM;
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