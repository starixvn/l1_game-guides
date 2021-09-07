import React from "react";

import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../heroes-slot.module.scss";

const HeroesSlotGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là thể loại Slot game (game xèng), trò chơi gồm 3 hàng 5 cột, với tất cả 11 biểu tượng khác nhau. Người
                        chơi sẽ thắng nếu có các biểu tượng giống nhau nằm trên cùng một dòng cược mà người chơi đã chọn.
                    </p>
                </li>
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default HeroesSlotGuideVI;
