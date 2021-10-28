import React from "react";
import { numberWithCommas } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsVI } from "../../../shared";
import { GameConfigProps } from "../type";
import { GameGuideProps } from "../../type";
import { renderIconChoice } from "../en";

const FishPrawnCrabGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName } = props;
    const { odds, minBet, maxBet, maxBetPerChoices } = gameConfigs;
    const maxBetRound = numberWithCommas(maxBet);
    const maxChoiceRound = numberWithCommas(maxBetPerChoices.crab);
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} hay còn gọi là bầu cua tôm cá, là trò chơi dân gian rất phổ biến ở Châu Á. Trò chơi sử dụng 3 viên xúc
                        xắc (xí ngầu) 6 mặt, mỗi mặt sẽ có một biểu tượng (linh vật) ứng với một cửa trên bàn chơi.
                    </p>
                    <div className="icon-wrapper">
                        {renderIconChoice()}
                        <div className="text">Nai</div>
                        <div className="text">Bầu</div>
                        <div className="text">Gà</div>
                        <div className="text">Cá</div>
                        <div className="text">Cua</div>
                        <div className="text">Tôm</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>Cách chơi</h2>
                    <ul className="desc">
                        <li>
                            Người chơi có thể đặt cược vào 1 hoặc nhiều linh vật cùng lúc trong cùng 1 lượt chơi và không bị giới hạn số lần
                            đặt cược. Lưu ý, không thể hủy cược sau khi đặt.
                        </li>
                        <li>
                            Số tiền cược phải nằm trong khoảng từ {numberWithCommas(minBet)} đến {maxChoiceRound} cho một lần đặt cược và
                            tổng tiền cược tối đa cho 1 phiên là {maxBetRound}
                        </li>
                        <li>
                            Thời gian đặt cược cho mỗi phiên sẽ được hiển thị đếm ngược trên bàn chơi. Khi hết thời gian đặt cược, xúc xắc
                            sẽ bắt đầu lắc và kết quả sẽ được hiển thị.
                        </li>
                        <li>
                            Người chơi sẽ thắng nếu trong ba viên xúc xắc xuất hiện linh vật mà người chơi đã đặt cược.
                            <ul className="detail">
                                <li>Nếu linh vật được chọn xuất hiện 1 lần &#8658; Tỷ lệ trả thưởng 1 ăn {odds?.single}</li>
                                <li>Nếu linh vật được chọn xuất hiện 2 lần &#8658; Tỷ lệ trả thưởng 1 ăn {odds?.double}</li>
                                <li>Nếu linh vật được chọn xuất hiện 3 lần &#8658; Tỷ lệ trả thưởng 1 ăn {odds?.triple}</li>
                            </ul>
                        </li>
                        <div>
                            <strong>Lưu ý</strong>: Tỷ lệ trả thưởng đã bao gồm tiền cược.
                        </div>
                        <li>
                            Nếu linh vật người chơi chọn không xuất hiện, đồng nghĩa với việc người chơi thua và mất số tiền cược.
                            <div>
                                <strong>Ví dụ:</strong>
                                <ul className="detail">
                                    <li>
                                        Cược 10 vào “Cá” và có một biểu tượng Cá trong kết quả. Tiền thắng{" "}
                                        <strong>{10 * (odds?.single ?? 0)}</strong>
                                    </li>
                                    <li>
                                        Cược 10 vào “Cua” và có hai biểu tượng Cua trong kết quả. Tiền thắng{" "}
                                        <strong>{10 * (odds?.double ?? 0)} </strong>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                {renderTermsAndConditionsVI()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideVI;
