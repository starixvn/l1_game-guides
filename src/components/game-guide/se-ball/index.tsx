import { FC, useEffect, useState } from "react";
import { GameConfigs, GameGuideBase } from "../type";
import { getGameConfigProject } from "../../index.helper";
import initTolgee from "../../../helpers/tolgee-helper";
import SeBallGameGuideContent from "./content";
import { TolgeeProvider } from "@tolgee/react";
import { SeBall } from "./constants";
import appSettings from "../../../common/app-settings";

const tolgee = initTolgee([SeBall]);

const SeBallGameGuide: FC<GameGuideBase> = ({
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
        getGameConfigProject("se-ball", project, setConfigs);
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
            <SeBallGameGuideContent
                displayName={displayName}
                userStakeLevel={userStakeLevel}
                gameConfigs={configs}
                fractionalOddsFormat={fractionalOddsFormat}
            />
        </TolgeeProvider>
    );
};

export default SeBallGameGuide;
