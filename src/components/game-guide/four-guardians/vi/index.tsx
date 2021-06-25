import React from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../four-guardians.module.scss";

const wrapperImg = "wrapper-img";
const renderGameRule = () => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người chơi chọn Mức Cược và thiết lập số Dòng Cược mà bạn muốn đặt trước khi bấm “Quay”.</li>
                <li>
                    <strong>Lưu ý: </strong>Tổng tiền cược = Mức Cược * Số Dòng Cược
                </li>
                <li>Có 25 dòng cược được đánh số từ 1 đến 25 và người chơi phải chọn ít nhất một dòng cược để bắt đầu chơi.</li>
                <li>Mặc định 25 dòng cược cùng mức cược nhỏ nhất sẽ được chọn khi người chơi mở game.</li>
                <li>
                    Thắng thua trên mỗi dòng cược sẽ được tính dựa trên số lượng các biểu tượng giống nhau nằm trên dòng cược đó.
                    <div className={Styles[wrapperImg]}>
                        <img
                            className={Styles[""]}
                            src="./static/images/roulette/game_guide-orphelins_ex.png"
                            alt="game_guide-orphelins_ex"
                        ></img>
                    </div>
                </li>
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

const SicBoGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds } = gameConfigs;

    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là thể loại Slot game (game xèng), được xây dựng dựa trên câu chuyện về tứ linh vật Long - Lân - Quy -
                        Phụng rất nổi tiếng. Trò chơi gồm 3 hàng 5 cột, với tất cả 11 biểu tượng khác nhau. Người chơi sẽ thắng nếu có các
                        biểu tượng giống nhau nằm trên cùng một dòng cược mà người chơi đã chọn.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule()}</li>
                {renderPayouts(odds)}
                {renderTermsAndConditionsVI()}
            </ul>
        </div>
    );
};
export default SicBoGuideVI;
