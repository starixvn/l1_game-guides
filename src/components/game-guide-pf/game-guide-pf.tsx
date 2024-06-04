import { withTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";

import { GAMES_PF } from "../../common/constants";
import GuideBase from "../guide-base";
import { BaseProps } from "../type";
import BacBallPFGuide from "./bac-ball";
import FootballDicePFGuide from "./football-dice";
import LuckyThreePFGuide from "./lucky-three";
import NextBallPFGuide from "./next-ball";
import SeBallPFGuide from "./se-ball";
import SpaceFlightPFGuide from "./space-flight";

export interface BaseState<TranslationResource> {
    translationResource: TranslationResource;
}

const ChineseBlackjackPFGuide = dynamic(() => import("./chinese-blackjack"));

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
            case GAMES_PF.NEXT_BALL_1:
                return <NextBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.NEXT_BALL_2:
                return <NextBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.SE_BALL:
                return <SeBallPFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_PF.LUCKY_THREE:
                return <LuckyThreePFGuide key={`game-${gameId}`} {...gameGuideProps} />;
            default:
                return <></>;
        }
    };
}

export default withRouter(withTranslation()(GameGuidePF));
