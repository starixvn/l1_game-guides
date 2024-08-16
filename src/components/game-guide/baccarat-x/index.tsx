import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { useEffect, useState } from "react";
import { getGameConfigProject } from "../../index.helper";
import { GameConfigs, GameGuideBase } from "../type";
import BaccaratXContents from "./contents";
import { TogleeNamespace } from "./namespace-tolgee";


const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: [TogleeNamespace.SpecificGame, TogleeNamespace.Common],
        defaultNs: TogleeNamespace.SpecificGame,
    });

const BaccaratXGameGuide = (props: GameGuideBase) => {
    const { gameConfigs, project, dynamic, isGetGameConfigs, fractionalOddsFormat, userStakeLevel, displayName } = props;
    const [configs, setConfigs] = useState<GameConfigs>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("baccarat-x", project, setConfigs);
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

        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replace("/", ""));
        }
    }, []);

    useEffect(() => {
        if (configs) {
            if (isGetGameConfigs) {
                getDynamicGameConfig();
            }
        }
    }, [configs]);

    if (!configs) {
        return <></>;
    }

    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <BaccaratXContents {...{ gameConfigs: configs, fractionalOddsFormat, locale: tolgee.getLanguage(), userStakeLevel, displayName }} />
        </TolgeeProvider>
    );
};

export default BaccaratXGameGuide;
