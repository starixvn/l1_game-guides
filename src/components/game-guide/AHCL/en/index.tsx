import React from "react";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../heroes-slot.module.scss";

const HeroesSlotGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameName, gameConfigs } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">
                        {gameName} is an online slot game, with high quality graphics. The game includes 5 reels and 3 rows, with 11
                        different symbols. Players will win if there are the same symbols located on the same payline that you have chosen.
                    </p>
                </li>

                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default HeroesSlotGuideEN;
