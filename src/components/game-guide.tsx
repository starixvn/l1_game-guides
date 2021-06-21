import React from "react";
import appSettings from "../common/app-settings";
import BigSmallGuide from "./game-guide/big-small";
import DragonTigerGuide from "./game-guide/dragon-tiger";
import FishPrawnCrabGuide from "./game-guide/fish-prawn-crab";
import FishPrawnCrabVIPGuide from "./game-guide/fish-prawn-crab-vip";
import SeDieGuide from "./game-guide/se-die";
import SeDieSpecialGuide from "./game-guide/se-die-special";
import SeDieWarGuide from "./game-guide/se-die-war";
import BaccaratGuide from "./game-guide/baccarat";
import KenoProGuide from "./game-guide/keno-pro-max";
import OddEvenTurboGuide from "./game-guide/odd-even-turbo";
import BlackjackGuide from "./game-guide/blackjack";
import SicBoGuide from "./game-guide/sic-bo";
import FourGuardiansGuide from "./game-guide/four-guardians";
import LotteryGuide from "./game-guide/lottery";
import { UserStakeLevelProps } from "../pages";
import Styles from "./game-guide.module.scss";
import { useRouter } from "next/router";

type Props = {
    gameId: number;
    userStakeLevel: UserStakeLevelProps;
};

export const GameGuide: React.FC<Props> = (props) => {
    const { gameId, userStakeLevel } = props;
    const { gameSettings } = appSettings;
    const router = useRouter();
    const { locale } = router;
    const gameGuideProps = {
        locale: locale,
        userStakeLevel: userStakeLevel,
        ...gameSettings[gameId],
    };
    const renderGuide = () => {
        switch (gameId) {
            case 1:
            case 4:
                return <BigSmallGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 2:
            case 9:
            case 22:
                return <SeDieGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 3:
                return <FishPrawnCrabGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 6:
                return <OddEvenTurboGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 7:
                return <DragonTigerGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 8:
                return <KenoProGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 10:
            case 27:
                return <BaccaratGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 23:
                return <BlackjackGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 24:
                return <SeDieSpecialGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 25:
                return <SicBoGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 26:
                return <FishPrawnCrabVIPGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 28:
                return <SeDieWarGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 29:
                return <FourGuardiansGuide key={`game-${gameId}`} {...gameGuideProps} />;
            case 31:
                return <LotteryGuide key={`game-${gameId}`} {...gameGuideProps} />;
            default:
                return <></>;
        }
    };

    return (
        <div className="game-container">
            <div className={`game-list ${Styles["game-list"]}`}>{renderGuide()}</div>
        </div>
    );
};

export default GameGuide;
