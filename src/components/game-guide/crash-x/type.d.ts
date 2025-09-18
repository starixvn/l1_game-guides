import { GameConfigs } from "../type";

export type CrashXContentsProps = {
    locale: string | undefined;
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
    displayName: string | undefined;
    name: string | undefined;
    scrollToId: string | undefined;
};
