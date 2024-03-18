import { FC, useEffect } from "react";
import { GAMES, TolgeeConfig } from "../../common/constants";
import BacBallPFGuide from "./bac-ball";

const GameGuidePF: FC<{ gameId: number }> = ({ gameId }) => {
    switch (gameId) {
        case GAMES.BAC_BALL:
            return <BacBallPFGuide />;
    }

    return <></>;
};

export default GameGuidePF;
