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

// import {BusinessCheckingAccount} from "./domain/BusinessCheckingAccount";
//
// const business: BusinessCheckingAccount = new BusinessCheckingAccount();
// business.deposit(100_000);
// try {
//   business.open(10);
// } catch (e) {
//   console.error(e);
// }
//
// business.open(1_000);
// console.log(`월 수수료 : ${business.chargeFee()}`)


// import {ConfigClientCode} from "./week4/design-patterns/singleton/ConfigClientCode";
// import {CarClientCode} from "./week4/design-patterns/builder/CarClientCode";
// import {TypesClientCode} from "./week4/hacks/types/TypesClientCode";
//
// /* week4 - singleton */
// const singleton_code1: ConfigClientCode = new ConfigClientCode();
// singleton_code1.consume();
//
// const singleton_code2: ConfigClientCode = new ConfigClientCode();
// singleton_code2.consume();
//
//
// /* week4 - builder */
// console.log();
// const builder_code: CarClientCode = new CarClientCode();
// builder_code.consume();
// builder_code.consume2();
//
//
// /* week4 - types */
// console.log();
// const types_code: TypesClientCode = new TypesClientCode();
// types_code.consume();


import {TransferMarketSimulator} from "./domain/TransferMarketSimulator";


const simulator = TransferMarketSimulator.getInstance();

simulator.simulate();