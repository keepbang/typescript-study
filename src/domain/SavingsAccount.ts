import {BankAccount} from "./BankAccount";
import {InterestRateApplier} from "./InterestRateApplier";

export class SavingsAccount extends BankAccount implements InterestRateApplier {
  // 이자율
  private interestRate;

  constructor(interestRate: number = 0.07) {
    super();
    this.interestRate = interestRate;
  }

  calculateInterestRate(): number {
    return this.balance = (this.balance + this.balance * this.interestRate);
  }

  setInterestRate(newInterestRate: number) {
    this.interestRate = newInterestRate;
  }
}