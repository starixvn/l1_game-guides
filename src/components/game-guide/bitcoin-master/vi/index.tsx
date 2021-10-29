import React from "react";

import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";

const BitcoinMasterGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet } = gameConfigs;
    const maxBetRound = numberWithCommas(maxbet);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">{gameName}</p>
                </li>
                <li className="guide-item">
                    <h2>Cách chơi</h2>
                    <ul className="desc"></ul>
                </li>
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                </li>
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default BitcoinMasterGuideVI;
