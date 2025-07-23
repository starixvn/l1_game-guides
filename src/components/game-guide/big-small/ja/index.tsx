import React, { useEffect } from "react";

import { renderTermsAndConditionsJA } from "../../../shared";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import { GameGuideProps } from "../../type";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { ENVIRONMENT } from "../../../../common/constants";
import { renderPromotionNoteJA } from "../../../shared/promotion-note/ja";
import { formatOdds } from "../../../../helpers/number-helper";
import MD5 from "../../base/md5";

const BigSmallGuideJA: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, isInPromotionTime, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>紹介</h2>
                    <p className="content">
                        {gameName}または一般的にSicboやTai Saiとして知られているゲームは、3つのサイコロでプレイされるゲームです。プレイヤーはベットを配置し、3つのサイコロの合計ポイントがビッグかスモールかを予測します。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>ゲームルール</h2>
                    <ul className="desc">
                        <li>ゲームラウンドの開始時にサイコロカップが振られます。</li>
                        <li>ベット時間中、プレイヤーはビッグまたはスモールのいずれかにベットできますが、両方にはベットできません。</li>
                        <ul className="detail">
                            <li>ビッグ：3つのサイコロの合計ポイント &gt;= 11の場合、プレイヤーが勝ちます</li>
                            <li>スモール：3つのサイコロの合計ポイント &lt;= 10の場合、プレイヤーが勝ちます</li>
                        </ul>
                        <li>
                            プレイヤーは、ベット時間が終了する前に同じ選択で別のベットを配置することで、賭け金を増やすことができます。注意：配置されたベットはキャンセルできません。
                        </li>
                        <li>
                            最小ベットと最大ベットは {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain} の間でなければならず、ラウンドあたりの最大総賭け金は {maxBetFollowChoice?.maxBetMain} です
                        </li>
                        <li>
                            ベット時間が終了すると、結果が表示されます。3つのサイコロの結果があなたのベットと一致する場合、あなたが勝ちます。
                        </li>
                        <li>
                            バランスドベッティングプール：ビッグとスモールに賭けられた総額が異なる場合、差額は最新のベットチケットを持っているプレイヤーに返金されます。
                            <p>
                                <strong>例：</strong> プレイヤーAがビッグに100ベット、プレイヤーBがスモールに40ベット、Cがスモールに80ベット。ビッグとスモールに賭けられた総額をバランスするために、システムはプレイヤーCに20を返金します。
                            </p>
                        </li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>配当</h2>
                    <ul className="desc">
                        <li>ビッグ、スモールの配当は {formatOdds(odds?.big, fractionalOddsFormat)} です</li>
                        <li>
                            勝金額はベットオッズに従って計算されます。<strong>注意</strong>、配当には初期賭け金が含まれます。
                        </li>
                        <li>すべての勝金額は、ベットが決済されるとすぐにアカウント残高に追加されます。</li>
                        {renderPromotionNoteJA(isInPromotionTime)}
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && (
                    <MD5
                        locale={props.locale}
                        step1ImageUrl={"/static/images/big-small/md5_step1_en.png?v=3"}
                        step2ImageUrl={"/static/images/big-small/md5_step2_en.png?v=3"}
                        step3ImageUrl={"/static/images/big-small/md5_step3.png?v=1"}
                        step4ImageUrl={"/static/images/big-small/md5_step4.png?v=1"}
                        note={<div>注意：左から右へ、&#123;6, 2, 5&#125; は3つのサイコロの値に対応しています。</div>}
                    />
                )}
                {renderTermsAndConditionsJA()}
            </ul>
        </>
    );
};
export default BigSmallGuideJA; 