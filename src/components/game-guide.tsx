import React from "react";
import { useTranslation } from "next-i18next";

import appSettings from "../common/app-settings";
import BigSmallGuide from "./game-guide/big-small";
import DragonTigerGuide from "./game-guide/dragon-tiger";
import FishPrawnCrabGuide from "./game-guide/fish-prawn-crab";
import FishPrawnCrabVIPGuide from "./game-guide/fish-prawn-crab-vip";
import SeDieGuide from "./game-guide/se-die";
import SeDieSpecialGuide from "./game-guide/se-die-special";
import SeDieWarGuide from "./game-guide/se-die-war";
import BaccaratGuide from "./game-guide/baccarat";
import KenoProMaxGuide from "./game-guide/keno-pro-max";
import OddEvenTurboGuide from "./game-guide/odd-even-turbo";
import BlackjackGuide from "./game-guide/blackjack";
import SicBoGuide from "./game-guide/sic-bo";
import FourGuardiansGuide from "./game-guide/four-guardians";
import LotteryGuide from "./game-guide/lottery";
import ThreeCardsGuide from "./game-guide/three-cards";
import KenoMaxGuide from "./game-guide/keno-pro-viet/keno-max";
import KenoMiniGuide from "./game-guide/keno-pro-viet/keno-mini";
import RouletteGuide from "./game-guide/roulette";
import LuckyWheelGuide from "./game-guide/lucky-wheel";
import HeroesSlotGuide from "./game-guide/AHCL";
import KenoMatchGuide from "./game-guide/keno-match";
import KenoPowerGuide from "./game-guide/keno-power";
import BitCoinMasterGuide from "./game-guide/bitcoin-master";
import CasinoHoldGuide from "./game-guide/casino-hold";
import HiLoGuide from "./game-guide/hi-lo";
import TexasHoldGuide from "./game-guide/texas-hold";

import { UserStakeLevelProps } from "../pages";
import { GAMES } from "../common/constants";

type Props = {
    gameId: number;
    userStakeLevel: UserStakeLevelProps | undefined;
    locale: string;
    name: string;
    gameConfigs: any;
    dynamic: boolean;
    isGetGameConfigs?: boolean;
    isScrollMD5?: boolean;
    environment?: string;
};

const guideNameOther = { luckyWheel: "luckyWheel" };
export const GameGuide: React.FC<Props> = (props) => {
    const { gameId, userStakeLevel, name, locale, gameConfigs, dynamic, isGetGameConfigs, isScrollMD5, environment } = props;
    const { t } = useTranslation(["common"]);
    const { gameSettings } = appSettings;
    const gameGuideProps = {
        locale: locale,
        userStakeLevel: userStakeLevel,
        ...gameSettings[gameId],
        gameConfigs: gameConfigs,
        gameNameTranslate: gameId ? t(gameSettings[gameId].gameName.toLocaleLowerCase()) : "",
        dynamic,
        isGetGameConfigs,
        isScrollMD5,
        environment,
    };
    const otherGuides = () => {
        if (name === guideNameOther.luckyWheel) {
            return <LuckyWheelGuide key={`game-${name}`} {...gameGuideProps} />;
        } else {
            return <></>;
        }
    };
    const renderGuide = () => {
        switch (gameId) {
            case GAMES.BIG_SMALL:
            case GAMES.TURBO_BIG_SMALL:
                return <BigSmallGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.SE_DIE:
            case GAMES.MINI_SE_DIE:
            case GAMES.VIP_SE_DIE:
                return <SeDieGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.FISH_PRAWN_CRAB:
                return <FishPrawnCrabGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.TURBO_ODD_EVEN:
                return <OddEvenTurboGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.DRAGON_TIGER:
                return <DragonTigerGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.KENO_PRO_MAX:
                return <KenoProMaxGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.BACCARAT:
            case GAMES.VIP_BACCARAT:
                return <BaccaratGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.KENO_MAX:
            case GAMES.KENO_MAX_2:
            case GAMES.KENO_EAST:
            case GAMES.KENO_WEST:
            case GAMES.KENO_SOUTH:
            case GAMES.KENO_NORTH:
                return <KenoMaxGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.KENO_MINI:
            case GAMES.KENO_MINI_2:
                return <KenoMiniGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.ROULETTE:
                return <RouletteGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.BLACK_JACK:
                return <BlackjackGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.SPECIAL_SE_DIE:
                return <SeDieSpecialGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.SIC_BO:
                return <SicBoGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.VIP_FISH_PRAWN_CRAB:
                return <FishPrawnCrabVIPGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.VIP_SE_DIE_WAR:
                return <SeDieWarGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.FOUR_GUARDIANS:
                return <FourGuardiansGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.LOTTERY:
                return <LotteryGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.THREE_CARDS:
                return <ThreeCardsGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.KENO_MATCH_1:
            case GAMES.KENO_MATCH_2:
                return <KenoMatchGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.HEROES_SLOT:
                return <HeroesSlotGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.CASINO_HOLDEM_POKER:
                return <CasinoHoldGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.KENO_POWER_1:
            case GAMES.KENO_POWER_2:
                return <KenoPowerGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.TEXAS_HOLDEM_POKER:
                return <TexasHoldGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.BITCOIN_MASTER:
                return <BitCoinMasterGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.HILO:
                return <HiLoGuide key={`game-${gameId}`} {...gameGuideProps} />;
            default:
                return otherGuides();
        }
    };

    return <div className="game-container">{renderGuide()}</div>;
};

export default GameGuide;
