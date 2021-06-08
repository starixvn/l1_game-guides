import React from "react";
import appSettings from "../common/app-settings";


import BigSmallGuide from "./game-guide/big-small";
import BigSmallTurboGuide from "./game-guide/big-small-turbo";
import DragonTigerGuide from "./game-guide/dragon-tiger";
import FishPrawnCrabGuide from "./game-guide/fish-prawn-crab";
import SeDieGuide from "./game-guide/se-die";
import SeDieVIPGuide from "./game-guide/se-die-vip";

import Styles from "./game-guide.module.scss";

export interface UserStakeLevel {
    minBet: number;
    maxBet: number;
}

type Props = {
    gameId: number;
    locale: string;
    userStakeLevel: UserStakeLevel;
};

export const GameGuide: React.FC<Props> = (props) => {
    const { gameId, locale, userStakeLevel } = props;
    const { gameSettings } = appSettings;
    const gameGuideProps = {
        locale: locale,
        userStakeLevel: userStakeLevel,
        ...gameSettings[gameId],
    };
    const renderGuide = () => {
        switch (gameId) {
            case 2:
                return <SeDieGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 22:
                return <SeDieVIPGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 3:
                return <FishPrawnCrabGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 7:
                return <DragonTigerGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 1:
                return <BigSmallGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 4:
                return <BigSmallTurboGuide key={`game-${gameId}`} {...gameGuideProps} />;
            default:
                return null;
        }
    };

    return (
       
            <div className="game-container game-wrapper">
                <div className={`game-list ${Styles["game-list"]}`}>{renderGuide()}</div>
            </div>
    
    );
};

export default GameGuide;
