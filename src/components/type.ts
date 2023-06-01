import { GameConfigs, UserStakeLevelProps } from "../pages";
import { WithTranslation } from "next-i18next";
import { WithRouterProps } from "next/dist/client/with-router";

export type BaseProps = {
    name: string;
    gameId: number;
    userStakeLevel: UserStakeLevelProps | undefined;
    locale: string;
    gameConfigs: GameConfigs | any;
    dynamic: boolean;
    isGetGameConfigs: boolean;
    isScrollMD5: boolean;
    environment: string;
    isInPromotionTime: boolean;
    fractionalOddsFormat: boolean;
    gameSetting: any;
    displayName: string;
    jackpot: boolean;
} & WithTranslation &
    WithRouterProps;
