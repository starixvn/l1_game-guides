import { GameConfigs } from "../type";

export type SpaceFlightContentsProps = {
    locale: string | undefined;
    gameConfigs: GameConfigs;
    userStakeLevel: UserStakeLevelProps | undefined;
};
