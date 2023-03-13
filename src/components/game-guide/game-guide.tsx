import dynamic from "next/dynamic";
import React from "react";
import { withTranslation } from "next-i18next";
import { withRouter } from "next/router";

import { GAMES } from "../../common/constants";
import GuideBase from "../guide-base";
import { BaseProps } from "../type";

const BigSmallGuide = dynamic(() => import("./big-small"));
const DragonTigerGuide = dynamic(() => import("./dragon-tiger"));
const FishPrawnCrabGuide = dynamic(() => import("./fish-prawn-crab"));
const FishPrawnCrabVIPGuide = dynamic(() => import("./fish-prawn-crab-vip"));
const SeDieGuide = dynamic(() => import("./se-die"));
const SeDieSpecialGuide = dynamic(() => import("./se-die-special"));
const SeDieWarGuide = dynamic(() => import("./se-die-war"));
const BaccaratGuide = dynamic(() => import("./baccarat"));
const BlockchainBaccaratGuide = dynamic(() => import("./blockchain-baccarat"));
const KenoProMaxGuide = dynamic(() => import("./keno-pro-max"));
const OddEvenTurboGuide = dynamic(() => import("./odd-even-turbo"));
const BlackjackGuide = dynamic(() => import("./blackjack"));
const SicBoGuide = dynamic(() => import("./sic-bo"));
const FourGuardiansGuide = dynamic(() => import("./four-guardians"));
const LotteryGuide = dynamic(() => import("./lottery"));
const ThreeCardsGuide = dynamic(() => import("./three-cards"));
const KenoMaxGuide = dynamic(() => import("./keno-pro-viet/keno-max"));
const KenoMiniGuide = dynamic(() => import("./keno-pro-viet/keno-mini"));
const RouletteGuide = dynamic(() => import("./roulette"));
const LuckyWheelGuide = dynamic(() => import("./lucky-wheel"));
const HeroesSlotGuide = dynamic(() => import("./heroes-slot"));
const KenoMatchGuide = dynamic(() => import("./keno-match"));
const KenoPowerGuide = dynamic(() => import("./keno-power"));
const BitCoinMasterGuide = dynamic(() => import("./bitcoin-master"));
const CasinoHoldGuide = dynamic(() => import("./casino-hold-em"));
const HiLoGuide = dynamic(() => import("./hi-lo"));
const TexasHoldGuide = dynamic(() => import("./texas-hold-em"));
const NightClubGuide = dynamic(() => import("./night-club"));
const TreasureIslandGuide = dynamic(() => import("./treasure-island"));
const MultiplayBigSmallGuide = dynamic(() => import("./multiplay-big-small"));
const WayToGoalGuide = dynamic(() => import("./way-to-goal"));
const FruitSlotGuide = dynamic(() => import("./fruit-slot"));
const FantanGuide = dynamic(() => import("./fantan/index"));
const FortuneCatGuide = dynamic(() => import("./fortune-cat"));
const WinThreeCardsGuide = dynamic(() => import("./win-three-cards"));
const VipBaccaratGuide = dynamic(() => import("./baccarat-vip"));

const guideNameOther = { luckyWheel: "luckyWheel" };

class GameGuide<P extends BaseProps> extends GuideBase<P> {
    otherGuides = (name: string, gameGuideProps: any) => {
        if (name === guideNameOther.luckyWheel) {
            return <LuckyWheelGuide key={`game-${name}`} {...gameGuideProps} />;
        } else {
            return <></>;
        }
    };

    renderGuide = () => {
        const { gameId, name } = this.props;
        const gameGuideProps = this.getGameGuideProps();

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
                return <BaccaratGuide key={`game-${gameId}`} {...gameGuideProps} folderConfigName="baccarat" />;
            case GAMES.VIP_BACCARAT:
                return <VipBaccaratGuide key={`game-${gameId}`} {...gameGuideProps} folderConfigName="baccarat-vip" />;
            case GAMES.BLOCKCHAIN_BACCARAT:
                return <BlockchainBaccaratGuide key={`game-${gameId}`} {...gameGuideProps} folderConfigName="blockchain-baccarat" />;
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
                return this.otherGuides(name, gameGuideProps);
        }
    };
}

export default withRouter(withTranslation()(GameGuide));
