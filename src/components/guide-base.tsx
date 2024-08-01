import React from "react";

import appSettings from "../common/app-settings";
import { BaseProps } from "./type";

abstract class GuideBase<P extends BaseProps> extends React.PureComponent<P> {
    constructor(props: P) {
        super(props);
    }

    getGameGuideProps() {
        const {
            gameId,
            userStakeLevel,
            locale,
            gameConfigs,
            dynamic,
            isGetGameConfigs,
            isScrollMD5,
            environment,
            isInPromotionTime,
            fractionalOddsFormat,
            gameSetting,
            displayName,
            jackpot,
            scrollToId,
        } = this.props;

        const { gameSettings } = appSettings;
        return {
            locale: locale,
            userStakeLevel: userStakeLevel,
            ...gameSettings[gameId],
            gameConfigs: gameConfigs,
            gameNameTranslate: gameId ? this.getGameTranslate(gameSettings[gameId]?.gameName?.toLocaleLowerCase()) : "",
            dynamic,
            isGetGameConfigs,
            isScrollMD5,
            environment,
            project: appSettings.system,
            isInPromotionTime: isInPromotionTime,
            fractionalOddsFormat,
            gameSetting,
            displayName,
            jackpot: jackpot,
            scrollToId,
        };
    }

    getGameTranslate(key: string, name = "common") {
        const { t } = this.props;

        return t(`${name.toLocaleLowerCase()}:${key}`) ?? "";
    }

    abstract renderGuide(): React.ReactElement;

    render() {
        return <div className="game-container">{this.renderGuide()}</div>;
    }
}

export default GuideBase;
