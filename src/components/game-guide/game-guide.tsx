import { withTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";

import { GAMES } from "../../common/constants";
import { isClassicOrSpeedBaccarat, isCrashGame, isLuckyBaccarat, isNewCascadingSlot, isNewSlotGame } from "../../helpers/game-helper";
import GuideBase from "../guide-base";
import { BaseProps } from "../type";
import BaccaratXGameGuide from "./baccarat-x";
import BandarQiuQiuGameGuide from "./bandar-qiu-qiu";
import CascadingSlotGuide from "./cascading-slot-template";
import ChineseBlackjackGameGuide from "./chinese-blackjack";
import ChristmasXGuide from "./christmas-x";
import ColorGameGuide from "./color-game";
import DragontigerFightGuide from "./dragon-tiger-fight";
import FootballDiceGameGuide from "./football-dice";
import FootballSlotGuide from "./football-slot";
import PontoonGuide from "./pontoon";
import SpaceFlightGuide from "./space-flight";

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
const LotteryGuide = dynamic(() => import("./lottery"));
const ThreeCardsGuide = dynamic(() => import("./three-cards"));
const KenoMaxGuide = dynamic(() => import("./keno-pro-viet/keno-max"));
const KenoMiniGuide = dynamic(() => import("./keno-pro-viet/keno-mini"));
const RouletteGuide = dynamic(() => import("./roulette"));
const LuckyWheelGuide = dynamic(() => import("./lucky-wheel"));
const KenoMatchGuide = dynamic(() => import("./keno-match"));
const KenoPowerGuide = dynamic(() => import("./keno-power"));
const BitCoinMasterGuide = dynamic(() => import("./bitcoin-master"));
const CasinoHoldGuide = dynamic(() => import("./casino-hold-em"));
const HiLoGuide = dynamic(() => import("./hi-lo"));
const TexasHoldGuide = dynamic(() => import("./texas-hold-em"));
const TreasureIslandGuide = dynamic(() => import("./treasure-island"));
const MultiplayBigSmallGuide = dynamic(() => import("./multiplay-big-small"));
const FruitSlotGuide = dynamic(() => import("./fruit-slot"));
const FantanGuide = dynamic(() => import("./fantan/index"));
const WinThreeCardsGuide = dynamic(() => import("./win-three-cards"));
const VipBaccaratGuide = dynamic(() => import("./baccarat-vip"));
const ClassicSlotGuide = dynamic(() => import("./classic-slot-template"));
const BacBallGameGuide = dynamic(() => import("./bac-ball"));
const NextBallGameGuide = dynamic(() => import("./next-ball"));
const SeBallGameGuide = dynamic(() => import("./se-ball"));
const CoinTossGuide = dynamic(() => import("./coin-toss"));
const SevenUpDownGuide = dynamic(() => import("./seven-up-down"));
const SeDie3Guide = dynamic(() => import("./sedie3"));
const KaraKrusGuide = dynamic(() => import("./karakrus"));
const LuckyThreeGameGuide = dynamic(() => import("./lucky-three"));
const PusoyGuide = dynamic(() => import("./pusoy"));
const FootballCoinTossGuide = dynamic(() => import("./football-coin-toss"));
const MarbleFootballGameGuide = dynamic(() => import("./marble-football"));
const TapFortuneGuide = dynamic(() => import("./tap-fortune"));
const CoinMiningGuide = dynamic(() => import("./coin-mining"));
const RocketXGuide = dynamic(() => import("./rocket-x"));
const MarbleFootball2GameGuide = dynamic(() => import("./marble-football2"));

const guideNameOther = { luckyWheel: "luckyWheel" };

class GameGuide<P extends BaseProps> extends GuideBase<P> {
    otherGuides = (name: string, gameGuideProps: any, gameId: number) => {
        if (name === guideNameOther.luckyWheel) {
            return <LuckyWheelGuide key={`game-${name}`} {...gameGuideProps} />;
        }

        if (isNewSlotGame(gameGuideProps.gameSetting.Type, gameGuideProps.gameSetting.GameId)) {
            return <ClassicSlotGuide key={`game-${name}`} {...gameGuideProps} />;
        }

        if (isNewCascadingSlot(gameGuideProps.gameSetting.Type, gameGuideProps.gameSetting.GameId)) {
            return <CascadingSlotGuide key={`game-${name}`} {...gameGuideProps} />;
        }

        if (isCrashGame(gameGuideProps.gameSetting.Type)) {
            return <SpaceFlightGuide key={`game-${name}`} {...gameGuideProps} />;
        }

        if (isLuckyBaccarat(gameId) || isClassicOrSpeedBaccarat(gameId)) {
            return <BaccaratXGameGuide key={`game-${gameId}`} {...gameGuideProps} />;
        }

        return <></>;
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
            case GAMES.LOTTERY:
                return <LotteryGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.THREE_CARDS:
                return <ThreeCardsGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.KENO_MATCH_1:
            case GAMES.KENO_MATCH_2:
                return <KenoMatchGuide key={`game-${gameId}`} {...gameGuideProps} />;
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
            case GAMES.TREASURE_ISLAND:
                return <TreasureIslandGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.UNBALANCEDBIGSMALL1:
            case GAMES.UNBALANCEDBIGSMALL2:
            case GAMES.UNBALANCEDBIGSMALL3:
            case GAMES.UNBALANCEDBIGSMALL4:
                return <MultiplayBigSmallGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.FRUIT_SLOT:
                return <FruitSlotGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.FANTAN:
                return <FantanGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.WIN_THREE_CARDS:
                return <WinThreeCardsGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.DRAGON_TIGER_FIGHT:
                return <DragontigerFightGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.PONTOON:
                return <PontoonGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.COLOR_GAME:
                return <ColorGameGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.BANDAR_QIU_QIU:
                return <BandarQiuQiuGameGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.CHINESE_BLACKJACK:
                return <ChineseBlackjackGameGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.FOOTBALL_DICE:
                return <FootballDiceGameGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.FOOTBALL_SLOT:
                return <FootballSlotGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.BAC_BALL_1:
                return <BacBallGameGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.BAC_BALL_2:
                return <BacBallGameGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.NEXT_BALL_1:
                return <NextBallGameGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.NEXT_BALL_2:
                return <NextBallGameGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.SE_BALL:
                return <SeBallGameGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.COIN_TOSS:
                return <CoinTossGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.SEVEN_UP_DOWN:
                return <SevenUpDownGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.LUCKY_THREE:
                return <LuckyThreeGameGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.SE_DIE3:
                return <SeDie3Guide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.KARAKRUS:
                return <KaraKrusGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.PUSOY:
                return <PusoyGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.FOOTBALL_COIN_TOSS:
                return <FootballCoinTossGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.CHRISTMAS_X:
                return <ChristmasXGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.MARBLE_FOOTBALL:
                return <MarbleFootballGameGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.MARBLE_FOOTBALL_2:
                return <MarbleFootball2GameGuide key={`game-${gameId}`} {...gameGuideProps} folderConfigName="marble-football2" />;
            case GAMES.TAP_FORTUNE:
                return <TapFortuneGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.COIN_MINING:
                return <CoinMiningGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES.ROCKET_X:
                return <RocketXGuide key={`game-${gameId}`} {...gameGuideProps} />;
            default:
                return this.otherGuides(name, gameGuideProps, gameId);
        }
    };
}

export default withRouter(withTranslation()(GameGuide));
