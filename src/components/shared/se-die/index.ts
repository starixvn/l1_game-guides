import { numberWithCommas } from "../../../helpers/number-helper";
import { UserStakeLevelProps } from "../../../pages";
import { GameConfigProps } from "../../game-guide/se-die/type";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: GameConfigProps) => {
    const { maxBetPerChoices, maxBet, minBet } = gameConfigs;
    const maxBetStake = userStakeLevel?.maxBet ?? maxBet;
    const maxBetMain = numberWithCommas(Math.min(maxBetStake, maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetRed4 = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices.red4));
    const maxBetRed3 = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices.red3));
    const maxBetRed2 = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices?.red2 ?? 0));
    const maxBetEven = numberWithCommas(Math.min(maxBetStake, maxBet, maxBetPerChoices.even));

    return { maxBetMain, minBetMain, maxBetRed4, maxBetRed3, maxBetRed2, maxBetEven };
};
