import { FC } from "react";
import { GAMES } from "../../common/constants";
import BacBallPFGuide from "./bac-ball";

const GameGuidePF: FC<{ gameId: number }> = ({ gameId }) => {
    switch (gameId) {
        case GAMES.BAC_BALL_1:
            return <BacBallPFGuide />;
        case GAMES.BAC_BALL_2:
            return <BacBallPFGuide />;
        default:
            return <></>;
    }
};

export default GameGuidePF;
