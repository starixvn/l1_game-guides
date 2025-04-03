import React from "react";

import appSettings from "../common/app-settings";
import { PFProps } from "./type";

abstract class VerifyBase<P extends PFProps> extends React.PureComponent<P> {
    constructor(props: P) {
        super(props);
    }

    getPFProps() {
        const { gameId, provablyFair, locale, dynamic, environment, displayName, orientation } = this.props;

        const { gameSettings } = appSettings;
        return {
            locale: locale,
            ...gameSettings[gameId],
            provablyFair: provablyFair,
            gameNameTranslate: gameId ? this.getGameTranslate(gameSettings[gameId]?.gameName?.toLocaleLowerCase()) : "",
            dynamic,
            project: appSettings.system,
            displayName,
            orientation,
        };
    }

    getGameTranslate(key: string, name = "common") {
        const { t } = this.props;

        return t(`${name.toLocaleLowerCase()}:${key}`) ?? "";
    }

    abstract renderVerification(): React.ReactElement;

    render() {
        return <div className="game-container">{this.renderVerification()}</div>;
    }
}

export default VerifyBase;
