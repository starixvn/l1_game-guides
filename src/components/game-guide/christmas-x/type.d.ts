import { GameConfigs } from "../type";

export type ChristmasXContentsProps = {
    locale: string | undefined;
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    isScrollMD5: boolean | undefined;
    displayName: string | undefined;
    name: string | undefined;
    scrollToId: string | undefined;
};
