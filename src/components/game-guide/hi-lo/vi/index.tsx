import React, { useEffect } from "react";

import { renderTermsAndConditionsVI } from "../../../shared";
import { GameGuideProps } from "../../type";
import Styles from "../hi-lo.module.scss";

const renderGameRule = () => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>Người chơi chọn mức tiền cược mong muốn, và bấm <img src="/static/images/hi-lo/play.png" alt="play icon" width="30" height="30" className={Styles["play"]}/> để bắt đầu chơi.</li>
                <li>Hệ thống sẽ chọn ngẫu nhiên 1 lá bài và người chơi dự đoán lá bài xuất hiện tiếp theo sẽ Cao hơn hay Thấp hơn lá bài hiện tại.</li>
                <li>Sau mỗi lượt dự đoán, nếu thắng người chơi sẽ có 2 lựa chọn 
                    <ul className="detail">
                        <li>
                            Bấm nút <strong>&quot;Ăn Non&quot;</strong> để nhận tiền thắng và phiên chơi kết thúc.
                        </li>
                        <li>
                            Hoặc tiếp tục dự đoán lá bài kế tiếp sẽ Cao hay Thấp so với lá bài hiện tại (lá kết quả của lượt chơi gần nhất), 
                            khi đó số tiền thắng ở lượt dự đoán trước sẽ được tính như là tiền cược cho lượt chơi tiếp theo.
                        </li>
                    </ul>
                    <div><strong>Ví dụ:</strong></div>
                    <div>Hệ thống chọn ngẫu nhiên lá bài đầu tiên <span className={Styles["red"]}>9</span><span className={`${Styles["red"]} ${Styles["large-font"]}`}>♥</span>. Người chơi cược 100 cho lựa chọn &quot;Thấp&quot;</div>
                    <p>Kết quả: 4<span className={`${Styles["black"]} ${Styles["large-font"]}`}>♠</span>. Người chơi thắng 123, và sẽ có 2 lựa chọn:
                        <ul className="plus">
                            <li>Bấm &quot;Ăn Non&quot; để nhận 123 tiền thắng vào tài khoản và phiên chơi kết thúc.</li>
                            <li>Tiếp tục dự đoán lá bài được rút kế tiếp sẽ Cao hay Thấp hơn lá hiện tại (4<span className={`${Styles["black"]} ${Styles["large-font"]}`}>♠</span>), với mức tiền cược 123</li>
                            
                        </ul>
                    </p>
                    <ul className="desc">
                        <li>Mỗi lượt dự đoán sẽ diễn ra trong vòng 2 phút. Hết thời gian mà người chơi không đưa ra dự đoán thì hệ thống sẽ:
                            <ul className="detail">
                                <li>Với lượt chơi đầu tiên sau khi bấm <img src="/static/images/hi-lo/play.png" alt="play icon" width="30" height="30" className={Styles["play"]}/>, nếu người chơi không đưa ra lựa chọn sau 2 phút, hệ thống sẽ tự động chọn kết quả ngẫu nhiên Cao hoặc Thấp và phiên chơi kết thúc.</li>
                                <li>Với những lượt chơi khác, nếu người chơi không đưa ra lựa chọn sau 2 phút, hệ thống sẽ tính như người chơi chọn &quot;Ăn Non&quot;.</li>
                            </ul>
                        </li>
                        <li>Phiên chơi chỉ kết thúc khi người chơi bấm nút Ăn Non hoặc Thua.</li>
                        <li>Bài sẽ được xào lại sau mỗi lượt dự đoán.</li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

const renderPayouts = () => {
    return (
        <>
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Mỗi lượt dự đoán sẽ có mức thưởng khác nhau trên từng lựa chọn Cao/Thấp</li>
                <li>Tiền trả thưởng đã bao gồm tiền cược.</li>
            </ul>
        </>
    );
};

const HiLoGuideVI: React.FC<GameGuideProps<{}, {}>> = () => {
    return (
        <div>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        Cao Thấp là thể loại game bài - mini rất được yêu thích bởi sự đơn giản trong luật chơi. 
                        Trò chơi sử dụng bộ bài tây 52 lá (không bao gồm lá Joker), người chơi sẽ dự đoán lá bài xuất hiện tiếp theo sẽ Cao hơn hay Thấp hơn lá bài hiện tại.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule()}</li>
                <li className="guide-item">
                    <h2>Thang sức mạnh</h2>
                    <ul className="desc">
                        <li>Thứ tự các lá bài từ nhỏ đến lớn: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), King (K), Ace (A)</li>
                        <li>Không so chất (<span className={`${Styles["black"]} ${Styles["large-font"]}`}>♠ ♣</span><span className={`${Styles["red"]} ${Styles["large-font"]}`}> ♦ ♥</span>) của lá bài.</li>
                    </ul>
                    <div><strong>Lưu ý:</strong></div>
                    <ul className="desc">
                        <li>Trong trường hợp lá bài rút ra có cùng điểm số với lá bài hiện tại ={'>'} Kết quả &quot;Hòa&quot;, người chơi sẽ tiếp tục lượt chơi tiếp theo.</li>
                        <li>Với các lá 2 hoặc Ace (A), người chơi chỉ có thể lựa chọn Thấp cho Ace (A), Cao cho lá 2 và kết quả của lượt chơi đó sẽ tính là &quot;Hòa&quot;.
</li>
                    </ul>
                </li>
                <li className="guide-item">{renderPayouts()}</li>
                

                {renderTermsAndConditionsVI("", 45)}
            </ul>
        </div>
    );
};
export default HiLoGuideVI;
