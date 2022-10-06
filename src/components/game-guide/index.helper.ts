import { numberWithCommas } from "../../helpers/number-helper";
import { UserStakeLevelProps } from "../../pages";

export const handleMaxBetChoice = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: any) => {
    const { maxBet, minBet } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));

    return { maxBetMain, minBetMain };
};

export const handleMaxBetChoiceKenoPro = (userStakeLevel: UserStakeLevelProps | undefined, gameConfigs: any) => {
    const { maxBet, minBet, maxBetPerChoices } = gameConfigs;
    const maxBetMain = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet));
    const minBetMain = numberWithCommas(Math.max(minBet, userStakeLevel?.minBet ?? 0));
    const maxBetBig = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.big));
    const maxBetGold = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.gold));
    const maxBetWood = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.wood));
    const maxBetWater = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.water));
    const maxBetFire = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.fire));
    const maxBetEarth = numberWithCommas(Math.min(userStakeLevel?.maxBet ?? maxBet, maxBet, maxBetPerChoices.earth));

    return { maxBetMain, minBetMain, maxBetBig, maxBetGold, maxBetWood, maxBetWater, maxBetFire, maxBetEarth };
};

export const getGameConfigProject = (path: string, project: string | undefined, config: Function): any => {
    return import(`./${path}/configs/${project}/game-configs.ts`).then((mod: any) => {
        config(mod.default);
    });
};
