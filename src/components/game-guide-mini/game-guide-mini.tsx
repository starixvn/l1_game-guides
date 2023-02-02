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

class GameGuideMini<P extends BaseProps> extends GuideBase<P> {
    renderGuide = () => {
        const { gameId } = this.props;
        const gameGuideProps = this.getGameGuideProps();
        switch (gameId) {
            case GAMES_MINI.BIG_SMALL:
                return <BigSmallGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_MINI.MINI_SE_DIE:
                return <SeDieMiniGuideTemplate key={`game-${gameId}`} {...gameGuideProps} />;
            case GAMES_MINI.FISH_PRAWN_CRAB:
            case GAMES_MINI.DRAGON_TIGER:
            case GAMES_MINI.BACCARAT:
            case GAMES_MINI.HILO:
                return <></>;
            default:
                return <></>;
        }
    };
}

export default withRouter(withTranslation()(GameGuideMini));
