import {CheckingAccount} from "./CheckingAccount";
import {AmountChecker} from "./AmountChecker";

export class BusinessCheckingAccount extends CheckingAccount implements AmountChecker {

  open(initialAmount: number) {
    this.checkAmount(initialAmount);
    super.open(initialAmount);
  }

  checkAmount(amount: number): void {
    if (amount < 1_000) {
      throw new Error('1000 이상이어야 합니다.');
    }
  }

}