import { GameConfigs } from "../type";

export type RocketXContentsProps = {
    locale: string | undefined;
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    displayName: string | undefined;
    name: string | undefined;
    scrollToId: string | undefined;
};
