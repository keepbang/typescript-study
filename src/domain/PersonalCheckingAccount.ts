import {CheckingAccount} from "./CheckingAccount";
import {AmountChecker} from "./AmountChecker";

export class PersonalCheckingAccount extends CheckingAccount implements AmountChecker{

  open(initialAmount: number) {
    this.checkAmount(initialAmount);
    super.open(initialAmount);
  }

  checkAmount(amount: number): void {
    if (amount < 0) {
      throw new Error('0 이상이어야 합니다.');
    }
  }

}