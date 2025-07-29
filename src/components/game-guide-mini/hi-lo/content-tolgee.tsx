import React, { useEffect, useMemo, useState } from "react";
import { useTolgee } from "@tolgee/react";
import { GameGuideBase } from "../../game-guide/type";
import { GameConfigProps } from "../big-small/type";
import { getHiLoMiniTolgeeTranslationResource } from "./languages/tolgee";
import HiLoMiniGuideTemplate from "./templates/index";
import { getGameConfigProject } from "../../index.helper";

const HiLoMiniContent = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const tolgee = useTolgee();

    const getLocalGameConfigs = () => {
        getGameConfigProject("hi-lo", project, setConfigs, "game-guide-mini");
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
        }
    }, [configs]);

    const translationResource = useMemo(() => {
        if (tolgee) {
            const resource = getHiLoMiniTolgeeTranslationResource(tolgee, locale || "vi");
            return resource;
        }
        return undefined;
    }, [tolgee, locale]);

    if (!configs) {
        return <></>;
    }

    return (
        <HiLoMiniGuideTemplate
            gameConfigs={configs}
            gameName={gameNameTranslate}
            locale={locale}
            translationResource={translationResource}
        />
    );
};

export default HiLoMiniContent;
