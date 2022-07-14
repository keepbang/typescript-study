import {BankAccount} from "./BankAccount";

export class CheckingAccount extends BankAccount {
  // 월 수수료
  protected monthlyFeeAmount: number = 5.0;

  chargeFee(): number {
    return this.monthlyFeeAmount;
  }

  open(initialAmount: number) {
    this.monthlyFeeAmount = initialAmount;
  }

}