import React, { useEffect, useState } from "react";
import { GameGuideBase } from "../../type";
import { handleMaxBetChoiceKenoPro } from "../../index.helper";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import KenoMiniGuideTemplate from "./templates/default";
import KenoMiniTolgeeTemplate from "./templates/tolgee-template";
import { getGameConfigProject } from "../../../index.helper";
import { TolgeeProvider } from "@tolgee/react";
import initTolgee from "../../../../helpers/tolgee-helper";

const tolgee = initTolgee(["KenoMini", "Common"]);

const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];

const gameMini2Id = [15];
const KenoMiniGuide = (props: GameGuideBase) => {
    const {
        id,
        locale,
        gameConfigs,
        gameNameTranslate,
        dynamic,
        userStakeLevel,
        isGetGameConfigs,
        project,
        environment,
        fractionalOddsFormat,
    } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<MaxBetChoicesProps>();

    const getLocalGameConfigs = () => {
        let pathName = "keno-pro-viet/keno-mini";
        if (gameMini2Id.includes(id ?? gameMini2Id[0])) {
            pathName = "keno-pro-viet/keno-mini2";
        }

        getGameConfigProject(pathName, project, setConfigs);
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
        getLocalGameConfigs();
    }, []);

    useEffect(() => {
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
            setMaxBetFollowChoice(handleMaxBetChoiceKenoPro(userStakeLevel, configs));
        }
    }, [configs]);

    useEffect(() => {
        if (isTolgeeSupportLanguage()) {
            tolgee.changeLanguage(locale || "en");
        }
    }, [locale]);

    const isTolgeeSupportLanguage = () => {
        return !excludedLanguages.includes(locale || "en");
    };

    if (!configs) {
        return <></>;
    }

    // For non-Tolgee languages, use the default template
    if (!isTolgeeSupportLanguage()) {
        const resource = {
            gameConfigs: configs,
            gameName: gameNameTranslate,
            maxBetFollowChoice,
            fractionalOddsFormat,
            environment,
            locale,
        };
        return <KenoMiniGuideTemplate {...resource} />;
    }

    // For Tolgee-supported languages, use the Tolgee template
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <KenoMiniTolgeeTemplate
                locale={locale}
                gameConfigs={configs}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                environment={environment}
                fractionalOddsFormat={fractionalOddsFormat}
            />
        </TolgeeProvider>
    );
};
export default KenoMiniGuide;
