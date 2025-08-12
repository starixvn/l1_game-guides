import { useTolgee } from "@tolgee/react";
import { useEffect, useMemo, useState } from "react";
import { getGameConfigProject } from "../../index.helper";
import TermsAndConditionsTolgee from "../base/terms-and-conditions/terms-and-conditions-tolgee";
import { GameGuideBase } from "../type";
import { generateTreasureIslandTolgeeTranslationResource } from "./languages/tolgee";
import TreasureIslandGuideTemplate from "./templates/treasure-island-guide-template";
import { GameConfigProps } from "./type";
import { renderTermsAndConditionsTolgee } from "../../shared";

const TreasureIslandContent = (props: GameGuideBase) => {
    const { locale, gameConfigs, gameNameTranslate, dynamic, isGetGameConfigs, project } = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const tolgee = useTolgee();

    const getLocalGameConfigs = () => {
        getGameConfigProject("treasure-island", project, setConfigs);
    };

    const getDynamicGameConfig = () => {
        if (dynamic) {
            setConfigs(gameConfigs as any);
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

    // Generate translation resource using Tolgee within the provider context
    const translationResource = useMemo(() => {
        if (tolgee) {
            return generateTreasureIslandTolgeeTranslationResource(tolgee);
        }
        return undefined;
    }, [tolgee]);

    if (!configs) {
        return <></>;
    }

    return (
        <TreasureIslandContentTolgee
            gameConfigs={configs}
            gameName={gameNameTranslate}
            locale={locale}
            translationResource={translationResource}
            renderTermsAndConditions={renderTermsAndConditionsTolgee(tolgee)}
        />
    );
};

class TreasureIslandContentTolgee extends TreasureIslandGuideTemplate {
    renderTermsAndConditions = () => {
        return <TermsAndConditionsTolgee />;
    };
}

export default TreasureIslandContent;
