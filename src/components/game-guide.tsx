import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React from "react";

import appSettings from "../common/app-settings";
import { GAMES } from "../common/constants";
import { UserStakeLevelProps } from "../pages";

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
    isInPromotionTime?: boolean;
    fractionalOddsFormat?: boolean;
};

const BigSmallGuide = dynamic(() => import("./game-guide/big-small"));
const DragonTigerGuide = dynamic(() => import("./game-guide/dragon-tiger"));
const FishPrawnCrabGuide = dynamic(() => import("./game-guide/fish-prawn-crab"));
const FishPrawnCrabVIPGuide = dynamic(() => import("./game-guide/fish-prawn-crab-vip"));
const SeDieGuide = dynamic(() => import("./game-guide/se-die"));
const SeDieSpecialGuide = dynamic(() => import("./game-guide/se-die-special"));
const SeDieWarGuide = dynamic(() => import("./game-guide/se-die-war"));
const BaccaratGuide = dynamic(() => import("./game-guide/baccarat"));
const BlockchainBaccaratGuide = dynamic(() => import("./game-guide/blockchain-baccarat"));
const KenoProMaxGuide = dynamic(() => import("./game-guide/keno-pro-max"));
const OddEvenTurboGuide = dynamic(() => import("./game-guide/odd-even-turbo"));
const BlackjackGuide = dynamic(() => import("./game-guide/blackjack"));
const SicBoGuide = dynamic(() => import("./game-guide/sic-bo"));
const FourGuardiansGuide = dynamic(() => import("./game-guide/four-guardians"));
const LotteryGuide = dynamic(() => import("./game-guide/lottery"));
const ThreeCardsGuide = dynamic(() => import("./game-guide/three-cards"));
const KenoMaxGuide = dynamic(() => import("./game-guide/keno-pro-viet/keno-max"));
const KenoMiniGuide = dynamic(() => import("./game-guide/keno-pro-viet/keno-mini"));
const RouletteGuide = dynamic(() => import("./game-guide/roulette"));
const LuckyWheelGuide = dynamic(() => import("./game-guide/lucky-wheel"));
const HeroesSlotGuide = dynamic(() => import("./game-guide/AHCL"));
const KenoMatchGuide = dynamic(() => import("./game-guide/keno-match"));
const KenoPowerGuide = dynamic(() => import("./game-guide/keno-power"));
const BitCoinMasterGuide = dynamic(() => import("./game-guide/bitcoin-master"));
const CasinoHoldGuide = dynamic(() => import("./game-guide/casino-hold"));
const HiLoGuide = dynamic(() => import("./game-guide/hi-lo"));
const TexasHoldGuide = dynamic(() => import("./game-guide/texas-hold"));
const NightClubGuide = dynamic(() => import("./game-guide/night-club"));
const TreasureIslandGuide = dynamic(() => import("./game-guide/treasure-island"));
const MultiplayBigSmallGuide = dynamic(() => import("./game-guide/multiplay-big-small"));
const WayToGoalGuide = dynamic(() => import("./game-guide/way-to-goal"));
const FruitSlotGuide = dynamic(() => import("./game-guide/fruit-slot"));
const FantanGuide = dynamic(() => import("./game-guide/fantan/index"));
const FortuneCatGuide = dynamic(() => import("./game-guide/fortune-cat"));
const WinThreeCardsGuide = dynamic(() => import("./game-guide/win-three-cards"));

const guideNameOther = { luckyWheel: "luckyWheel" };

export const GameGuide: React.FC<Props> = (props) => {
    const {
        gameId,
        userStakeLevel,
        name,
        locale,
        gameConfigs,
        dynamic,
        isGetGameConfigs,
        isScrollMD5,
        environment,
        isInPromotionTime,
        fractionalOddsFormat,
    } = props;

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
        project: appSettings.system,
        isInPromotionTime: isInPromotionTime,
        fractionalOddsFormat,
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
            case GAMES.MINI_SE_DIE_2:
            case GAMES.MINI_SE_DIE_3:
            case GAMES.MINI_SE_DIE_4:
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
            case GAMES.BLOCKCHAIN_BACCARAT:
                return <BlockchainBaccaratGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.KENO_MAX:
            case GAMES.KENO_MAX_2:
            case GAMES.KENO_EAST:
            case GAMES.KENO_WEST:
            case GAMES.KENO_SOUTH:
            case GAMES.KENO_NORTH:
            case GAMES.MEGA_KENO:
            case GAMES.MEGA_KENO_2:
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
            case GAMES.NightClubGuide:
                return <NightClubGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.TREASURE_ISLAND:
                return <TreasureIslandGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.UNBALANCEDBIGSMALL1:
            case GAMES.UNBALANCEDBIGSMALL2:
            case GAMES.UNBALANCEDBIGSMALL3:
            case GAMES.UNBALANCEDBIGSMALL4:
                return <MultiplayBigSmallGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.WAY_TO_GOAL:
                return <WayToGoalGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.FRUIT_SLOT:
                return <FruitSlotGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.FANTAN:
                return <FantanGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.FORTUNE_CAT:
                return <FortuneCatGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.WIN_THREE_CARDS:
                return <WinThreeCardsGuide key={`game-${gameId}`} {...gameGuideProps} />;
            default:
                return otherGuides();
        }
    };

    return <div className="game-container">{renderGuide()}</div>;
};

export default GameGuide;
