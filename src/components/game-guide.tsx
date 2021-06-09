import React from "react";
import appSettings from "../common/app-settings";
import { useTranslation } from "next-i18next";
import BigSmallGuide from "./game-guide/big-small";
import BigSmallTurboGuide from "./game-guide/big-small-turbo";
import DragonTigerGuide from "./game-guide/dragon-tiger";
import FishPrawnCrabGuide from "./game-guide/fish-prawn-crab";
import SeDieGuide from "./game-guide/se-die";
import SeDieVIPGuide from "./game-guide/se-die-vip";
import { UserStakeLevel } from "../pages";
import Styles from "./game-guide.module.scss";
import { useRouter } from "next/router";

type Props = {
    gameId: number;
    userStakeLevel: UserStakeLevel;
};

export const GameGuide: React.FC<Props> = (props) => {
    const { gameId, userStakeLevel } = props;
    const { gameSettings } = appSettings;
    const { t } = useTranslation("common");
    const router = useRouter();
    const { locale } = router;
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
                return <></>;
        }
    };

    return (
        <div className="game-container">
            <div className={`game-list ${Styles["game-list"]}`}>
                <div className={Styles["guide-header"]}>
                    <h1 className={Styles["guide-title"]}>{gameSettings[gameId] && t("titleGuide")}</h1>
                    <p className={Styles["guide-game-name"]}>{gameId && `(${t(gameSettings[gameId]?.gameName.toLowerCase())})`}</p>
                </div>
                {gameSettings[gameId] && renderGuide()}
            </div>
        </div>
    );
};

export default GameGuide;
