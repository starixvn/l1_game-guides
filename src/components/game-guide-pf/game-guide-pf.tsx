import { withTranslation } from "next-i18next";
import { withRouter } from "next/router";

import { GAMES_PF } from "../../common/constants";
import { isClassicOrSpeedBaccarat, isLuckyBaccarat } from "../../helpers/game-helper";
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
import SpaceFlightPFGuide from "./space-flight";
import FootballCoinTossPFGuide from "./football-coin-toss";

class GameGuidePF<P extends BaseProps> extends GuideBase<P> {
    renderOtherGuide = (gameId: number, gameGuideProps: any) => {
        if (isLuckyBaccarat(gameId) || isClassicOrSpeedBaccarat(gameId)) {
            return <BaccaratXPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
        }

        return <></>;
    };

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
            case GAMES_PF.NEXT_BALL_1:
                return <NextBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.NEXT_BALL_2:
                return <NextBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.SE_BALL:
                return <SeBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.COIN_TOSS:
                return <CoinTossPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.LUCKY_THREE:
                return <LuckyThreePFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.BAC81:
                return <BaccaratXPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.FOOTBALL_COIN_TOSS:
                return <FootballCoinTossPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            default:
                return this.renderOtherGuide(gameId, gameGuideProps);
        }
    };
}

export default withRouter(withTranslation()(GameGuidePF));
