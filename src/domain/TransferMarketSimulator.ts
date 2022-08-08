import {Agent} from "./Agent";
import {Player} from "./Player";
import {PlayerBuilder} from "./PlayerBuilder";
import {Teams} from "./Teams";

export class TransferMarketSimulator {
    private static instance: TransferMarketSimulator = new TransferMarketSimulator();

    private constructor() {
    }

    static getInstance(): TransferMarketSimulator {
        return this.instance;
    }

    public simulate() {
        let poor = new Agent("poor");
        let rich = new Agent("rich");

        poor.introduce();
        rich.introduce();
        console.log();

        let kim = new Player(new PlayerBuilder("kim")
            .setAgent(poor)
            .setContractPeriodMonth(10_000)
            .setTeam(Teams.GANGWON));

        let chae = new Player(new PlayerBuilder("chae")
            .setAgent(rich)
            .setContractPeriodMonth(100_000)
            .setTeam(Teams.SEOUL));

        kim.introduce();
        chae.introduce()
        console.log();

        console.log("kim 방출!!");
        kim.leave();
        kim.introduce();

        console.log("kim 이적(agent변경)");
        kim.managedBy(rich);
        kim.join(Teams.SEOUL, 50_000);
        kim.introduce();

        console.log("서울 재계약");
        kim.extendContract(55_000);
        chae.extendContract(110_000);

        kim.introduce();
        chae.introduce()

    }

}