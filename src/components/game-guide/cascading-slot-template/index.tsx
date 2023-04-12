import React, { useEffect, useState } from "react";
import { getGameConfigProject } from "../../index.helper";
import GameConfigs from "../baccarat/configs/L1/game-configs";
import { GameGuideBase} from "../type";
import Contents from "./contents";
import { GameConfigProps } from "./type";

export const getImageDirectoryName = (): string => {
    return "/static/images/cascading-slot-new";
};

const CascadingSlotGuide = (props: GameGuideBase) => {
    const { name, gameSetting, displayName, gameConfigs, project, dynamic, isGetGameConfigs} = props;
    const [configs, setConfigs] = useState<GameConfigProps>();

    const getLocalGameConfigs = () => {
        getGameConfigProject("cascading-slot-template", project, setConfigs);
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

    if (!configs) {
        return <></>;
    }

    return <Contents displayName={displayName || ""} gameSettings={gameSetting?.CascadingSlotsConfig} name={name ?? gameSetting?.Name} gameConfigs={configs} />;
};
export default CascadingSlotGuide;
