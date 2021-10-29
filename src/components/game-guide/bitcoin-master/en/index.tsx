import React from "react";

import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";

const BitcoinMasterGuideEN: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minbet, maxbet } = gameConfigs;
    const maxBetRound = numberWithCommas(maxbet);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">{gameName}</p>
                </li>
                <li className="guide-item">
                    <h2>Game Rules</h2>
                    <ul className="desc"></ul>
                </li>
                <li className="guide-item">
                    <h2>Payouts</h2>
                    <ul className="desc"></ul>
                </li>
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default BitcoinMasterGuideEN;
