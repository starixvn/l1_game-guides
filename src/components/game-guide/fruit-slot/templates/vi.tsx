import React from "react";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps, OddsProps } from "../type";
import { locales } from "../../../../common/constants";
import Styles from "../fruit-slot.module.scss";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";
import { baseTermAndConditionVi } from "../../base/terms-and-conditions/languages/vi";

export const renderPayoutsTable = (odds: any, locale = "vi") => {
    return (
        <div className={Styles["symbol-container"]}>
            <div className={Styles["symbol-group"]}>
                <img
                    src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                    width={272}
                    height={190}
                    alt={"gameguide_2item_bg"}
                    loading="eager"
                />
                <div className={Styles["icon-wrapper"]}>
                    {renderItemSymbol(odds, "cherry", false)}
                    {renderItemSymbol(odds, "cherry3", false)}
                </div>
            </div>
            <div className={Styles["symbol-group"]}>
                <img
                    src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                    width={272}
                    height={190}
                    alt={"gameguide_2item_bg"}
                    loading="eager"
                />
                <div className={Styles["icon-wrapper"]}>
                    {renderItemSymbol(odds, "orange", false)}
                    {renderItemSymbol(odds, "orange3", false)}
                </div>
            </div>
            <div className={Styles["symbol-group"]}>
                <img
                    src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                    width={272}
                    height={190}
                    alt={"gameguide_2item_bg"}
                    loading="eager"
                />
                <div className={Styles["icon-wrapper"]}>
                    {renderItemSymbol(odds, "lemon", false)}
                    {renderItemSymbol(odds, "lemon3", false)}
                </div>
            </div>
            <div className={Styles["symbol-group"]}>
                <img
                    src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                    width={272}
                    height={190}
                    alt={"gameguide_2item_bg"}
                    loading="eager"
                />
                <div className={Styles["icon-wrapper"]}>
                    {renderItemSymbol(odds, "bell", false)}
                    {renderItemSymbol(odds, "bell3", false)}
                </div>
            </div>
            <div className={Styles["symbol-group"]}>
                <img
                    src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                    width={272}
                    height={190}
                    alt={"gameguide_2item_bg"}
                    loading="eager"
                />
                <div className={Styles["icon-wrapper"]}>
                    {renderItemSymbol(odds, "watermelon", false)}
                    {renderItemSymbol(odds, "watermelon3", false)}
                </div>
            </div>
            <div className={Styles["symbol-group"]}>
                <img
                    src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                    width={272}
                    height={190}
                    alt={"gameguide_2item_bg"}
                    loading="eager"
                />
                <div className={Styles["icon-wrapper"]}>
                    {renderItemSymbol(odds, "star", false)}
                    {renderItemSymbol(odds, "star3", false)}
                </div>
            </div>
            <div className={`${Styles["symbol-group"]} ${Styles["fix-height"]}`}>
                <img
                    src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                    width={272}
                    height={190}
                    alt={"gameguide_2item_bg"}
                    loading="eager"
                />
                <div className={Styles["icon-wrapper"]}>
                    {renderItemSymbol(odds, "tripleSeven", false)}
                    {renderItemSymbol(odds, "tripleSeven3", false)}
                </div>
            </div>
            <div className={Styles["symbol-group"]}>
                <img
                    src={`/static/images/fruit-slot/gameguide_3item_bg.png?v1`}
                    width={272}
                    height={284}
                    alt={"gameguide_2item_bg"}
                    loading="eager"
                />
                <div className={Styles["icon-wrapper"]}>
                    {renderItemSymbol(odds, "bar", false)}
                    {renderItemSymbol(odds, "bar50", false)}
                    {renderItemSymbol(odds, "bar25", false)}
                </div>
            </div>
            <div className={`${Styles["symbol-group"]} ${Styles["fix-height"]}`}>
                <img
                    src={`/static/images/fruit-slot/gameguide_2item_bg.png?v1`}
                    width={272}
                    height={190}
                    alt={"gameguide_2item_bg"}
                    loading="eager"
                />
                <div className={Styles["icon-wrapper"]}>
                    {renderItemSymbol(odds, "big", true, locale)}
                    {renderItemSymbol(odds, "small", true, locale)}
                </div>
            </div>
        </div>
    );
};

export const renderItemSymbol = (odds: OddsProps, itemName: string, isTextImages: boolean, locale = "vi") => {
    const pathSrc = "./static/images/fruit-slot/item_";
    const itemTextName = itemName + "_" + locale;
    const symbol = isTextImages ? itemTextName : itemName;

    return (
        <div className={Styles["wrapper-symbol"]}>
            <img className={`${Styles[itemName]} ${Styles["icon"]}`} src={`${pathSrc}${symbol}.png?v2`} alt={symbol}></img>
            <span>1:{odds?.[itemName]}</span>
        </div>
    );
};

const renderLuckySymbol = () => {
    return (
        <li className="guide-item">
            <h2>Biểu Tượng May Mắn</h2>
            <ul className="desc">
                <li>
                    Khi kết quả quay ra là biểu tượng May Mắn, hệ thống sẽ quay ngẫu nhiên thêm{" "}
                    <span className={Styles["text-highlight"]}>2</span> hoặc <span className={Styles["text-highlight"]}>3</span> kết quả,
                    trừ biểu tượng May Mắn. Và các kết quả được quay thêm là không trùng lặp.
                </li>
                <li>Kết quả quay thêm được sử dụng để tính toán kết quả thắng thua.</li>
                <li>Kết quả Tài/ Xỉu sẽ không được quay lại ở vòng May Mắn.</li>
                <li>
                    <strong>Ví dụ: </strong>Khi kết quả quay ra là biểu tượng May Mắn{" "}
                    <img className={Styles["symbol-mini"]} src="./static/images/fruit-slot/item_lucky.png" alt="item_lucky"></img>, hệ thống
                    sẽ quay ngẫu nhiên thêm 2 kết quả biểu tượng.
                    <p>
                        Kết quả quay thêm lần 1:{" "}
                        <img className={Styles["symbol-mini"]} src="./static/images/fruit-slot/item_lemon.png" alt="item_lemon"></img>
                    </p>
                    <p>
                        Kết quả quay thêm lần 2:{" "}
                        <img className={Styles["symbol-mini"]} src="./static/images/fruit-slot/item_star.png" alt="item_star"></img>
                    </p>
                    <p>Biểu tượng Chanh và Ngôi Sao được sử dụng để tính toán kết quả thắng thua.</p>
                </li>
            </ul>
        </li>
    );
};

const FruitSlotGuideVI: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice } = props;
    const { odds } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        {gameName} là trò chơi xèng trái cây truyền thống được cải tiến để mang đến cho người chơi những trải nghiệm mới đầy
                        hấp dẫn và gay cấn.
                    </p>
                </li>
                <li className="guide-item">
                    <h2>Cách chơi</h2>
                    <ul className="desc">
                        <li>
                            Người chơi chọn mệnh giá và nhấp vào cửa cược bạn muốn đặt cược trước khi hết thời gian quy định.
                            <div>
                                <span className={Styles["text-highlight"]}>Lưu ý</span>, không thể hủy cược sau khi đặt.
                            </div>
                        </li>
                        <li>
                            Người chơi có thể đặt cược vào một hoặc nhiều cửa cược cùng lúc trong cùng một lượt chơi và không bị giới hạn số
                            lần đặt cược. Ngoại trừ cửa cược Tài Xỉu, người chơi chỉ có thể đặt cược vào một trong hai cửa.
                        </li>
                        <li>
                            Tổng tiền cược tối đa cho một phiên là{" "}
                            <span className={Styles["text-highlight"]}>{maxBetFollowChoice?.maxBetMain}</span>.
                        </li>
                        <li>Khi thời gian đặt cược kết thúc, hệ thống sẽ bắt đầu quay thưởng để xác định kết quả thắng thua.</li>
                        <div>
                            <div style={{ marginLeft: "2rem" }}>
                                <img
                                    className={Styles["symbol-mini"]}
                                    src="./static/images/fruit-slot/gameguide_bullet.png"
                                    alt="item_star"
                                ></img>{" "}
                                Cửa Tài Xỉu: hệ thống chạy ngẫu nhiên các điểm từ 1 đến 14. Số điểm dừng lại cuối cùng sẽ được dùng để tính
                                kết quả.
                                <div style={{ marginLeft: "5rem" }}>✦ Tài: từ 8 đến 14</div>
                                <div style={{ marginLeft: "5rem" }}>✦ Xỉu: từ 1 đến 7</div>
                            </div>
                            <div style={{ marginLeft: "2rem" }}>
                                <img
                                    className={Styles["symbol-mini"]}
                                    src="./static/images/fruit-slot/gameguide_bullet.png"
                                    alt="item_star"
                                ></img>{" "}
                                Các cửa biểu tượng: hệ thống quay ngẫu nhiên và lựa chọn một trong các biểu tượng hiển thị trên bàn. Biểu
                                tượng được dừng lại sẽ được dùng để tính kết quả.
                            </div>
                        </div>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>Trả thưởng</h2>
                    <ul className="desc">
                        <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                        <li>Tiền thắng đã bao gồm tiền cược.</li>
                        <li>Bảng tỷ lệ trả thưởng:</li>
                        {renderPayoutsTable(odds, locales.vi)}
                    </ul>
                </li>
                {renderLuckySymbol()}
                <li className="guide-item"><BaseTermsAndConditions resources={baseTermAndConditionVi} /></li>
            </ul>
        </>
    );
};
export default FruitSlotGuideVI;
