import { withTranslation } from "next-i18next";
import { withRouter } from "next/router";

import { GAMES_PF } from "../../common/constants";
import GuideBase from "../guide-base";
import { BaseProps } from "../type";
import BacBallPFGuide from "./bac-ball";
import BaccaratXPFGuide from "./baccarat-x";
import ChineseBlackjackPFGuide from "./chinese-blackjack";
import CoinTossPFGuide from "./coin-toss";
import FootballDicePFGuide from "./football-dice";
import LuckyThreePFGuide from "./lucky-three";
import NextBallPFGuide from "./next-ball";
import SeBallPFGuide from "./se-ball";
import SicBallPFGuide from "./sic-ball";
import SpaceFlightPFGuide from "./space-flight";

class GameGuidePF<P extends BaseProps> extends GuideBase<P> {
    renderGuide = () => {
        const { gameId } = this.props;
        const gameGuideProps = this.getGameGuideProps();
        switch (gameId) {
            case GAMES_PF.CHINESE_BLACKJACK:
                return <ChineseBlackjackPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.SPACE_FLIGHT:
                return <SpaceFlightPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.FOOTBALL_DICE:
                return <FootballDicePFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.BAC_BALL_1:
                return <BacBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.BAC_BALL_2:
                return <BacBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.BACARRAT_NUMBER:
                return <BacBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.SPEED_BACARRAT_NUMBER:
                return <BacBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.VIP_BACARRAT_NUMBER:
                return <BacBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.NEXT_BALL_1:
                return <NextBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.NEXT_BALL_2:
                return <NextBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.LUCKY_NEXT:
                return <NextBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.SPEED_LUCKY_NEXT:
                return <NextBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.VIP_LUCKY_NEXT:
                return <NextBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.SE_BALL:
                return <SeBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.SE_DIE_NUMBER:
                return <SeBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.SPEED_SE_DIE_NUMBER:
                return <SeBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.VIP_SE_DIE_NUMBER:
                return <SeBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.COIN_TOSS:
                return <CoinTossPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.LUCKY_THREE:
                return <LuckyThreePFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.TRIPLE_LUCK:
                return <LuckyThreePFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.SPEED_TRIPLE_LUCK:
                return <LuckyThreePFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.VIP_TRIPLE_LUCK:
                return <LuckyThreePFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.BAC81:
                return <BaccaratXPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.SIC_BALL:
                return <SicBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.SIC_BO_NUMBER:
                return <SicBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.SPEED_SIC_BO_NUMBER:
                return <SicBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.VIP_SIC_BO_NUMBER:
                return <SicBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            default:
                return <></>;
        }
    };
}

export default withRouter(withTranslation()(GameGuidePF));
