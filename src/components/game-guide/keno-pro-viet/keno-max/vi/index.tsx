import React from "react";
import { renderTermsAndConditionsVI } from "../../../../shared";
import { numberWithCommas } from "../../../../../helpers/number-helper";
import { GameConfigProps, OddsProps } from "../../type";
import { GameGuideProps } from "../../../type";
import Styles from "../keno-max.module.scss";

const renderGameRule = () => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li></li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps) => {
    return (
        <li className="guide-item">
            <h2>Tỷ lệ trả thưởng và Giới hạn cược</h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
            </ul>
        </li>
    );
};

const KenoMaxGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">{gameName}</p>
                </li>
                <li className="guide-item">{renderGameRule()}</li>
                <li className="guide-item">
                    <h2>Điều kiện thắng</h2>
                </li>
                {renderPayouts(odds)}
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default KenoMaxGuideVI;
