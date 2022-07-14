export class BankAccount {
  private _balance: number = 0;

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    this._balance = value;
  }

  // 예금
  deposit(amount: number): void {
    this._balance += amount
  }

  // 출금
  withdraw(amount: number): void {
    if (this._balance > amount) {
      this._balance -= amount;
      return;
    }
    throw new Error('잔액 부족');
  }
}