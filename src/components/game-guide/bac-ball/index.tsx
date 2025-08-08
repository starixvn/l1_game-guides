import { FC, useEffect, useState } from "react";
import { GameConfigs, GameGuideBase } from "../type";
import appSettings from "../../../common/app-settings";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { FormatIcu } from "@tolgee/format-icu";
import BacBallGameGuideContent from "./content";
import { getGameConfigProject } from "../../index.helper";
import { AVAILABLE_LANGUAGES } from "../../../common/constants";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: AVAILABLE_LANGUAGES,
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["BacBall", "Common"],
        defaultNs: "BacBall",
    });


const BacBallGameGuide: FC<GameGuideBase> = ({
    gameConfigs,
    project,
    dynamic,
    isGetGameConfigs,
    userStakeLevel,
    fractionalOddsFormat,
    id,
}) => {
    const [configs, setConfigs] = useState<GameConfigs>();
    const displayName = appSettings.gameSettings[`${id}`].gameName;

    const getLocalGameConfigs = () => {
        getGameConfigProject("bac-ball", project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            setConfigs(gameConfigs);
        } else {
            gameConfigs.odds = configs?.odds;
            setConfigs(gameConfigs);
        }
    };

    useEffect(() => {
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
        }
    }, [configs]);

    useEffect(() => {
        getLocalGameConfigs();

        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replaceAll("/", ""));
        }
    }, []);

    if (!configs) {
        return <></>;
    }

    return (
        <TolgeeProvider tolgee={tolgee}>
            <BacBallGameGuideContent
                displayName={displayName}
                userStakeLevel={userStakeLevel}
                gameConfigs={configs}
                fractionalOddsFormat={fractionalOddsFormat}
            />
        </TolgeeProvider>
    );
};

export default BacBallGameGuide;
