import React from "react";
import BigSmallGuide from "./game-guide/big-small";
import DragonTigerGuide from "./game-guide/dragon-tiger";
import FishPrawnCrabGuide from "./game-guide/fish-prawn-crab";
import SeDieGuide from "./game-guide/se-die";
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
    const { gameId } = props;
    const renderGuide = () => {
        switch (gameId) {
            case 2:
            case 22:
                return <SeDieGuide key={`game-${gameId}`} {...props} />;
            case 3:
                return <FishPrawnCrabGuide key={`game-${gameId}`} {...props} />;
            case 7:
                return <DragonTigerGuide key={`game-${gameId}`} {...props} />;
            case 1:
            case 4:
                return <BigSmallGuide key={`game-${gameId}`} {...props} />;
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
