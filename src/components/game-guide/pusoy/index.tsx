import { FC, useEffect, useState } from "react";
import { GameConfigs, GameGuideBase } from "../type";
import { getGameConfigProject } from "../../index.helper";
import initTolgee from "../../../helpers/tolgee-helper";
import PusoyGameGuideContent from "./content";
import { TolgeeProvider } from "@tolgee/react";
import appSettings from "../../../common/app-settings";
import { Pusoy } from "./constants";
import { PusoyGameConfigs } from "./type";

const availableLanguages = ["en", "vi"];

const tolgee = initTolgee([Pusoy]);

const PusoyGameGuide: FC<GameGuideBase> = ({
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
        const localGameConfigs = "pusoy";
        getGameConfigProject(localGameConfigs, project, setConfigs);
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
            let language = window.location.pathname.replaceAll("/", "");

            if (availableLanguages.indexOf(language) === -1) {
                language = "en";
            }

            tolgee.changeLanguage(language);
        }
    }, []);

    if (!configs) {
        return <></>;
    }

    return (
        <TolgeeProvider tolgee={tolgee}>
            <PusoyGameGuideContent
                displayName={displayName}
                userStakeLevel={userStakeLevel}
                gameConfigs={configs as PusoyGameConfigs}
                fractionalOddsFormat={fractionalOddsFormat}
            />
        </TolgeeProvider>
    );
};

export default PusoyGameGuide;
