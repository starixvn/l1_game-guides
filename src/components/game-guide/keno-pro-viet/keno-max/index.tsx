import { TolgeeProvider } from "@tolgee/react";
import { useEffect, useState } from "react";
import initTolgee from "../../../../helpers/tolgee-helper";
import { getGameConfigProject } from "../../../index.helper";
import { handleMaxBetChoiceKenoPro } from "../../index.helper";
import { GameGuideBase } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import KenoProGuideTemplate from "./templates/default";
import KenoProTolgeeTemplate from "./templates/tolgee-template";

const tolgee = initTolgee(["MegaKeno", "Common"]);

const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];

const KenoMaxGuide = (props: GameGuideBase) => {
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
        let pathName = "";
        switch (id) {
            case 13:
                pathName = "keno-pro-viet/keno-max2";
                break;
            case 16:
                pathName = "keno-pro-viet/keno-east";
                break;
            case 17:
                pathName = "keno-pro-viet/keno-west";
                break;
            case 18:
                pathName = "keno-pro-viet/keno-south";
                break;
            case 19:
                pathName = "keno-pro-viet/keno-north";
                break;
            case 52:
                pathName = "keno-pro-viet/mega-keno";
                break;
            case 53:
                pathName = "keno-pro-viet/mega-keno2";
                break;

            default:
                pathName = "keno-pro-viet/keno-max";
                break;
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
        return (
            <KenoProGuideTemplate
                locale={locale}
                gameConfigs={configs}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                environment={environment}
                fractionalOddsFormat={fractionalOddsFormat}
            />
        );
    }

    // For Tolgee-supported languages, use the Tolgee template
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <KenoProTolgeeTemplate
                locale={locale}
                gameConfigs={configs}
                gameName={gameNameTranslate}
                maxBetFollowChoice={maxBetFollowChoice}
                environment={environment}
                fractionalOddsFormat={fractionalOddsFormat}
                tolgee={tolgee}
            />
        </TolgeeProvider>
    );
};
export default KenoMaxGuide;
