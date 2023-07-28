import dynamic from "next/dynamic";
import React from "react";
import { withTranslation } from "next-i18next";
import { withRouter } from "next/router";

import { GAMES_MINI } from "../../common/constants";
import GuideBase from "../guide-base";
import { BaseProps } from "../type";

export interface BaseState<TranslationResource> {
    translationResource: TranslationResource;
}

const BigSmallGuide = dynamic(() => import("./big-small"));
const SeDieMiniGuideTemplate = dynamic(() => import("./se-die-mini"));
const BaccaratMiniGuideTemplate = dynamic(() => import("./baccarat"));
const HiLoMiniGuide = dynamic(() => import("./hi-lo"));
const FishPrawnCrabMiniGuide = dynamic(() => import("./fish-prawn-crab"));

const DragonTigerMiniGuide = dynamic(() => import("./dragon-tiger"));
const SicboMiniGuide = dynamic(() => import("./sic-bo"));

class GameGuideMini<P extends BaseProps> extends GuideBase<P> {
    renderGuide = () => {
        const { gameId } = this.props;
        const gameGuideProps = this.getGameGuideProps();
        switch (gameId) {
            case GAMES_MINI.BIG_SMALL:
                return <BigSmallGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_MINI.MINI_SE_DIE:
                return <SeDieMiniGuideTemplate key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_MINI.BACCARAT:
                return <BaccaratMiniGuideTemplate key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_MINI.FISH_PRAWN_CRAB:
                return <FishPrawnCrabMiniGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_MINI.DRAGON_TIGER:
                return <DragonTigerMiniGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_MINI.HILO:
                return <HiLoMiniGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_MINI.SICBO:
                return <SicboMiniGuide key={`game-${gameId}`} {...gameGuideProps} />;
            default:
                return <></>;
        }
    };
}

export default withRouter(withTranslation()(GameGuideMini));
