import React from "react";
import Image from "next/image";

import { renderTermsAndConditionsEN } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5EN } from "../../../shared/md5/en";
import Styles from "../casino-hold.module.scss";

const renderGameRule = (maxBetRound: number | string) => {
    return (
        <>
            <h2>Game Rules</h2>
            <ul className="desc"></ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <>
            <h2>Payouts</h2>
            <ul className="desc"></ul>
        </>
    );
};

const md5Title = () => {
    return (
        <>
            is a different version of Keno Power, with a new feature
            <a href="#md5" className="md5-title">
                <strong> MD5 (Message-Digest algorithm 5) </strong>
            </a>
            that allows players to check the fairness and authenticity of every game result. The game
        </>
    );
};

const CasinoHoldGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Introduction</h2>
                    <p className="content">{gameName}</p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderPayouts(odds, maxBetFollowChoice)}</li>

                <li id="md5" className="guide-item">
                    {renderMD5EN()}
                </li>

                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};
export default CasinoHoldGuideEN;
