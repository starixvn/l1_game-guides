import React from "react";
import Image from "next/image";

import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderMD5VI } from "../../../shared/md5/vi";
import Styles from "../casino-hold.module.scss";

const renderGameRule = (maxBetRound: number | string) => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc"></ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <>
            <h2>Trả thưởng</h2>
            <ul className="desc"></ul>
        </>
    );
};

const md5Title = () => {
    return (
        <>
            là phiên bản khác của trò Keno Đối Kháng với tính năng xác thực
            <a href="#md5" className="md5-title">
                <strong> MD5 (Message-Digest algorithm 5) </strong>
            </a>
            cho phép người chơi tự kiểm tra tính minh bạch trong kết quả thắng thua. Trò
        </>
    );
};

const CasinoHoldGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice } = props;
    const { odds } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">{gameName}</p>
                </li>
                <li className="guide-item">{renderGameRule(maxBetFollowChoice?.maxBetRound ?? 0)}</li>
                <li className="guide-item">{renderPayouts(odds, maxBetFollowChoice)}</li>

                <li id="md5" className="guide-item">
                    {renderMD5VI()}
                </li>

                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default CasinoHoldGuideVI;
