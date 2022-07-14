// import {Agent} from "./domain/Agent";
// import {Player} from "./domain/Player";
//
// const gibyoung: Agent = new Agent("gibyoung");
// const FA: Agent = new Agent();
//
// gibyoung.introduce();
// FA.introduce();
//
// const player: Player = new Player("chae", FA);
//
// player.introduce();

// import {BankAccount} from "./domain/BankAccount";
//
// const account: BankAccount = new BankAccount();
// account.deposit(100_000_000);
// let money = 100_000;
// account.withdraw(money);
// console.log(`출금 : ${money}, 잔액 : ${account.balance}`);
//
// money = 1_000;
// account.deposit(money);
// console.log(`입금 : ${money}, 잔액 : ${account.balance}`);

import {BusinessCheckingAccount} from "./domain/BusinessCheckingAccount";

const business: BusinessCheckingAccount = new BusinessCheckingAccount();
business.deposit(100_000);
try {
  business.open(10);
} catch (e) {
  console.error(e);
}

business.open(1_000);
console.log(`월 수수료 : ${business.chargeFee()}`)