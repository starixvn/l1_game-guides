import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../treasure-island.module.scss";

const renderGameRule = () => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc"></ul>
        </>
    );
};

const renderPayouts = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>Paytable</h2>
        </li>
    );
};

const TreasureIslandGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameName, gameConfigs } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is an online cascading slot game that has become extremely popular with the online gamer as it offers
                        multiple chances to win when compared to the older-style slot machines. The game consists of six reels, five rows,
                        and ten different symbols. Symbols pay anywhere on the screen. The total number of the same symbols on the screen at
                        the end of a spin determines the value of the win.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule()}</li>

                {renderPayouts(odds)}

                {renderTermsAndConditionsEN(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default TreasureIslandGuideEN;
