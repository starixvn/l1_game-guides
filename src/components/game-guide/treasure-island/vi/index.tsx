import React from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../treasure-island.module.scss";

const renderGameRule = () => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc"></ul>
        </>
    );
};

const renderPayouts = (odds: number[][]) => {
    return (
        <li className="guide-item">
            <h2>Trả thưởng</h2>
        </li>
    );
};

const TreasureIslandGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là một thể loại Slot game xếp tầng (Game xèng xếp tầng) trực tuyến đã trở nên cực kỳ phổ biến với người
                        chơi vì nó mang lại nhiều cơ hội chiến thắng hơn so với các Slot game kiểu cũ. Trò chơi bao gồm sáu cột, năm hàng và
                        mười biểu tượng khác nhau. Biểu tượng được thanh toán ở bất kỳ vị trí nào trên màn hình. Tổng số các biểu tượng
                        giống nhau trên màn hình khi kết thúc một vòng quay sẽ xác định giá trị của chiến thắng.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule()}</li>
                {renderPayouts(odds)}

                {renderTermsAndConditionsVI(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default TreasureIslandGuideVI;
