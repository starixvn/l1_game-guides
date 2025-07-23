import React from "react";
import { renderTermsAndConditionsJA } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds, numberWithCommas } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";

export const renderIconChoice = () => {
    return (
        <>
            <div className="symbol-size icon-nai"></div>
            <div className="symbol-size icon-bau"></div>
            <div className="symbol-size icon-ga"></div>
            <div className="symbol-size icon-ca"></div>
            <div className="symbol-size icon-cua"></div>
            <div className="symbol-size icon-tom"></div>
        </>
    );
};

const FishPrawnCrabGuideJA: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>紹介</h2>
                    <p className="content">
                        {gameName}は、Hoo Hey Howとしても知られる、アジアで人気のある3つのサイコロを使用するゲームです。各サイコロには6つのユニークなシンボル（魚、エビ、カニ、雄鶏、ひょうたん、鹿）が含まれています。6つのベットオプションがあり、各シンボルに対して1つずつあります。プレイヤーはどのシンボルが出現するかにベットします。
                    </p>
                    <div className="icon-wrapper">
                        {renderIconChoice()}
                        <div className="text">鹿</div>
                        <div className="text">ひょうたん</div>
                        <div className="text">雄鶏</div>
                        <div className="text">魚</div>
                        <div className="text">カニ</div>
                        <div className="text">エビ</div>
                    </div>
                </li>
                <li className="guide-item">
                    <h2>ゲームルール</h2>
                    <ul className="desc">
                        <li>ゲームラウンドの開始時にサイコロカップが振られます。</li>
                        <li>
                            ベット時間が終了すると、サイコロの結果が表示されます。ベットしたシンボルが出現した場合、あなたが勝ちます。
                        </li>
                        <li>
                            シンボルは、ゲームテーブル上の位置に応じて1から6まで番号が付けられます。割り当てられた番号は設定時間中のみ表示されます。
                        </li>
                        <li>
                            最小ベットと最大ベットは {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetChoice} の間でなければならず、ラウンドあたりの最大総賭け金は {maxBetFollowChoice?.maxBetMain} です
                        </li>
                        <li>
                            ベットオッズ：
                            <ul className="detail">
                                <li>選択したシンボルが1回出現した場合 {formatOdds(odds?.single, fractionalOddsFormat)}</li>
                                <li>選択したシンボルが2回出現した場合 {formatOdds(odds?.double, fractionalOddsFormat)}</li>
                                <li>選択したシンボルが3回出現した場合 {formatOdds(odds?.triple, fractionalOddsFormat)}</li>
                            </ul>
                        </li>
                        <li>
                            プレイヤーは、ゲームテーブルに表示された1つまたは複数のベットオプションにベットできます。注意：配置されたベットはキャンセルできません。
                        </li>
                        <li>
                            勝金額はベットオッズに従って計算されます。注意：配当には初期賭け金が含まれます。
                        </li>
                        <li>
                            すべての勝金額は、ベットが決済されるとすぐにアカウント残高に追加されます。
                            <div>
                                <strong>例：</strong>
                                <ul className="detail">
                                    <li>
                                        「魚」に10ベットして魚のシンボルが1つ出現した場合、{" "}
                                        <strong>{numberWithCommas(10 * (odds?.single ?? 0))}</strong> が支払われます
                                    </li>
                                    <li>
                                        「カニ」に10ベットしてカニのシンボルが2つ出現した場合、{" "}
                                        <strong>{numberWithCommas(10 * (odds?.double ?? 0))}</strong> が支払われます
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <MD5
                        locale={props.locale}
                        step1ImageUrl={"/static/images/fish-prawn-crab/md5_step1_en.png?v=4"}
                        step2ImageUrl={"/static/images/fish-prawn-crab/md5_step2_en.png?v=4"}
                        step3ImageUrl={"/static/images/fish-prawn-crab/md5_step3_en.png?v=5"}
                        step4ImageUrl={"/static/images/fish-prawn-crab/md5_step4_en.png?v=5"}
                        note={
                            <div>
                                注意：左から右へ、&#123;3, 1, 2&#125; は3つのサイコロに出現する各シンボルの割り当て番号に対応しています
                            </div>
                        }
                    />
                )}
                {renderTermsAndConditionsJA()}
            </ul>
        </>
    );
};
export default FishPrawnCrabGuideJA; 