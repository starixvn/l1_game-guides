import React from "react";
import { renderTermsAndConditionsVI } from "../../../shared";
import { MaxBetChoicesProps, GameConfigProps, OddsProps } from "../type";
import { GameGuideProps } from "../../type";
import Styles from "../fantan.module.scss";
import { renderMD5VI } from "../../../shared/md5-count-down-timer/vi/index";

const renderGameRule = () => {
    return (
        <>
            <h2>Cách chơi</h2>
            <ul className="desc">
                <li>
                    Khi bắt đầu phiên, nhà cái sẽ dùng một cái bát và lấy ngẫu nhiên số hạt trên bàn. Khi hết thời gian đặt cược, số hạt có
                    trong bát sẽ được chia thành từng nhóm, mỗi nhóm 4 hạt cho đến khi số hạt còn lại nhỏ hơn hoặc bằng 4 và đây sẽ chính là
                    kết quả thắng thua của phiên đó
                </li>
                <li>
                    <b>Ví du: </b>
                    <ul className="detail">
                        <li>
                            Số hạt lấy ngẫu nhiên là 30. Chia các hạt thành từng nhóm, mỗi nhóm 4 hạt:
                            <p>7 x 4 + 2 = 30. Số hạt còn lại là 2 =&gt; Kết quả của phiên là 2</p>
                        </li>
                        <li>
                            Số hạt lấy ngẫu nhiên là 40. Chia các hạt thành từng nhóm, mỗi nhóm 4 hạt:
                            <p>9 x 4 + 4 = 40. Số hạt còn lại là 4 =&gt; Kết quả của phiên là 4</p>
                        </li>
                    </ul>
                </li>
                <li>
                    Có tất cả 14 cửa cược để lựa chọn:
                    <div className="table-container">
                        <table className="table table-medium">
                            <thead>
                                <tr className="text-center">
                                    <th>Loại Cược</th>
                                    <th>Cửa Cược</th>
                                    <th>Điều Kiện Thắng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={2} className="text-center">
                                        Chẵn Lẻ
                                    </td>
                                    <td>Lẻ</td>
                                    <td>Số hạt còn lại là số Lẻ</td>
                                </tr>
                                <tr>
                                    <td>Chẵn</td>
                                    <td>Số hạt còn lại là số Lẻ</td>
                                </tr>
                                <tr>
                                    <td rowSpan={4} className="text-center">
                                        Fan
                                    </td>
                                    <td>1 Fan</td>
                                    <td>Số hạt còn lại là số Lẻ</td>
                                </tr>
                                <tr>
                                    <td>2 Fan</td>
                                    <td>Số hạt còn lại là 2</td>
                                </tr>
                                <tr>
                                    <td>3 Fan</td>
                                    <td>Số hạt còn lại là 3</td>
                                </tr>
                                <tr>
                                    <td>4 Fan</td>
                                    <td>Số hạt còn lại là 4</td>
                                </tr>
                                <tr>
                                    <td rowSpan={4} className="text-center">
                                        Kwok
                                    </td>
                                    <td>1 2 Kwok</td>
                                    <td>Số hạt còn lại là 1 hoặc 2</td>
                                </tr>
                                <tr>
                                    <td>2 3 Kwok</td>
                                    <td>Số hạt còn lại là 2 hoặc 3</td>
                                </tr>
                                <tr>
                                    <td>3 4 Kwok</td>
                                    <td>Số hạt còn lại là 3 hoặc 4</td>
                                </tr>
                                <tr>
                                    <td>4 1 Kwok</td>
                                    <td>Số hạt còn lại là 1 hoặc 4</td>
                                </tr>
                                <tr>
                                    <td rowSpan={4} className="text-center">
                                        Chun
                                    </td>
                                    <td>2 3 4 Chun</td>
                                    <td>Số hạt còn lại là 2, 3 hoặc 4</td>
                                </tr>
                                <tr>
                                    <td>1 3 4 Chun</td>
                                    <td>Số hạt còn lại là 1, 3 hoặc 4</td>
                                </tr>
                                <tr>
                                    <td>1 2 4 Chun</td>
                                    <td>Số hạt còn lại là 1, 2 hoặc 4</td>
                                </tr>
                                <tr>
                                    <td>1 2 3 Chun</td>
                                    <td>Số hạt còn lại là 1, 2 hoặc 3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li>Người chơi lựa chọn mệnh giá chip phù hợp và nhấp vào cửa cược mong muốn.</li>
                <li>
                    <b>Lưu ý</b>: không thể hủy cược sau khi đặt.
                </li>
                <li>
                    Người chơi có thể đặt cược ở bất kì cửa cược có sẵn trên bàn; ngoại trừ cửa cược Chẵn và Lẻ, chỉ có thể cược vào một
                    trong hai cửa cược này.
                </li>
                <li>Tổng tiền cược tối đa cho một phiên là 2,000</li>
            </ul>
        </>
    );
};

const renderPayouts = (odds: OddsProps | undefined, maxBetFollowChoice: MaxBetChoicesProps | undefined) => {
    return (
        <li className="guide-item">
            <h2>Trả thưởng</h2>
            <ul className="desc">
                <li>Hệ thống sẽ tiến hành trả thưởng ngay khi phiên chơi có kết quả.</li>
                <li>Tỷ lệ trả thưởng đã bao gồm tiền cược.</li>
            </ul>
            <div className="table-container">
                <table className="table text-center table-medium">
                    <thead>
                        <tr>
                            <th>Lựa Chọn</th>
                            <th>Cửa Cược</th>
                            <th>Tỷ Lệ Trả Thưởng</th>
                            <th className={Styles["bet-limit-width"]}>Giới Hạn Cược (Min-Max)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}>Chẵn Lẻ</td>
                            <td className={Styles["text-left"]}>Lẻ</td>
                            <td rowSpan={2}>1:{odds?.even}</td>
                            <td rowSpan={2}>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetEven}
                            </td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>Chẵn</td>
                        </tr>
                        <tr>
                            <td rowSpan={4}>Fan</td>
                            <td className={Styles["text-left"]}>1 Fan</td>
                            <td rowSpan={4}>1:{odds?.fan1}</td>
                            <td rowSpan={4}>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetFan1}
                            </td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>2 Fan</td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>3 Fan</td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>4 Fan</td>
                        </tr>
                        <tr>
                            <td rowSpan={4}>Kwok</td>
                            <td className={Styles["text-left"]}>1 2 Kwok</td>
                            <td rowSpan={4}>1:{odds?.kwok12}</td>
                            <td rowSpan={4}>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetKwok12}
                            </td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>2 3 Kwok</td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>3 4 Kwok</td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>4 1 Kwok</td>
                        </tr>
                        <tr>
                            <td rowSpan={4}>Chun</td>
                            <td className={Styles["text-left"]}>2 3 4 Chun</td>
                            <td rowSpan={4}>1:{odds?.chun123}</td>
                            <td rowSpan={4}>
                                {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetChun123}
                            </td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>1 3 4 Chun</td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>1 2 4 Chun</td>
                        </tr>
                        <tr>
                            <td className={Styles["text-left"]}>1 2 3 Chun</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

const renderMD5Example = (gameName: string, gameId: any) => {
    return (
        <>
            <p className="content">
                <strong> Ví dụ:</strong> Kiểm tra tính minh bạch của kết quả
            </p>
            <ul className="desc">
                <li>
                    <strong>Bước 1:</strong> Copy chuỗi MD5 trước khi công bố kết quả.
                    <img className="format-img auto-center" src={`/static/images/fantan/md5_step1_vi.png?v=6`} alt="md5-string" />
                </li>
                <li>
                    <strong>Bước 2:</strong> Copy chuỗi dữ liệu trong mục <strong>Kết Quả</strong> sau khi hệ thống công bố kết quả.
                    <img className="format-img auto-center" src={`/static/images/fantan/md5_step2_vi.png?v=6`} alt="md5-result" />
                    <div>Trong đó XX tương ứng với số hạt được lấy ngẫu nhiên khi bắt đầu phiên.</div>
                </li>
                <li>
                    <strong>Bước 3:</strong> Truy cập{" "}
                    <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">
                        https://md5.services/
                    </a>{" "}
                    và dán <strong>Kết Quả</strong> vừa copy vào ô MD5.
                    <img className="format-img auto-center" src={`/static/images/fantan/md5_step3_vi.png?v=1`} alt="hash-darling" />
                </li>
                <li>
                    <strong>Bước 4:</strong> Bấm nút “hash darling, hash!”. So sánh chuỗi MD5 checksum vừa được tạo ra và chuỗi MD5 ở Bước
                    1.
                    <img className="format-img auto-center" src={`/static/images/fantan/md5_step4_vi.png?v=1`} alt="md5-checksum" />
                </li>
            </ul>
            <div className="content">Nếu 2 chuỗi trùng khớp, chứng minh kết quả của phiên đó là minh bạch.</div>
        </>
    );
};

const FantanGuideVI: React.FC<GameGuideProps<GameConfigProps, {}>> = (props) => {
    const { gameConfigs, gameName, gameId } = props;
    const { odds, maxBetPerChoices } = gameConfigs;

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>Giới thiệu</h2>
                    <p className="content">
                        “{gameName}” là trò casino có nguồn gốc từ Châu Á. Trò chơi sử dụng 150 hạt màu trắng, sẽ có 14 cửa cược trên bàn
                        game. Người chơi sẽ đặt cược và dự đoán kết quả cửa thắng.
                    </p>
                </li>
                <li className="guide-item">{renderGameRule()}</li>
                {renderPayouts(odds, maxBetPerChoices)}
                <li id="md5" className="guide-item">
                    {renderMD5VI()}
                    {renderMD5Example(gameName, gameId)}
                </li>
                {renderTermsAndConditionsVI(Styles["guide-item"])}
            </ul>
        </>
    );
};
export default FantanGuideVI;
