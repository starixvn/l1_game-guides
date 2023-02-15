import React, { useEffect } from "react";

import { ENVIRONMENT } from "../../../../common/constants";
import { formatOdds } from "../../../../helpers/number-helper";
import { renderTermsAndConditionsTW } from "../../../shared";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../type";
import MD5 from "../../base/md5";

const renderMd5Tw = (locale?: string) => {
    return (
        <MD5
            locale={locale}
            step1ImageUrl={"/static/images/mega-bigsmall/md5_step1_en.png?v=3"}
            step2ImageUrl={"/static/images/mega-bigsmall/md5_step2_en.png?v=3"}
            step3ImageUrl={"/static/images/mega-bigsmall/md5_step3_en.png?v=1"}
            step4ImageUrl={"/static/images/mega-bigsmall/md5_step4_en.png?v=1"}
            note={<div>注：從左到右，&#123;6, 2, 5&#125;分別對應三個骰子的點數。</div>}
        />
    );
};

const MultiplayBigSmallGuideTW: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, gameName, maxBetFollowChoice, isScrollMD5, environment, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item">
                    <h2>介紹</h2>
                    <p className="content">
                        {gameName} - 大小 的“不平衡投注池”版本，由拉斯維加斯、濱海灣、澳門和蒙特卡洛 4
                        個賭台組成，其中濱海灣和蒙特卡羅是縮短投注時間的渦輪版本。 {gameName} 可讓您同時玩 4
                        桌遊戲，體驗許多激動人心的新體驗。 遊戲是用三個骰子進行的，玩家對三個骰子的總點數是大還是小下注。
                    </p>
                </li>
                <li className="guide-item">
                    <h2>遊戲規則</h2>
                    <ul className="desc">
                        <li>對於每張桌子，骰杯將在遊戲回合開始時搖動。</li>
                        <li>玩家可以下注大或小，但不能同時下注。</li>
                        <ul className="detail">
                            <li>大: 如果三個骰子的總點數 &gt;= 11，玩家將獲勝 </li>
                            <li>小: 如果三個骰子的總點數 &lt;= 10，則玩家獲勝 </li>
                        </ul>
                        <li>玩家可以在下注時間結束前通過使用相同選項再次下注來增加賭注金額。 注意，投注無法取消。</li>
                        <li>
                            最小賭注和最大賭注必須在 {maxBetFollowChoice?.minBetMain} - {maxBetFollowChoice?.maxBetMain}{" "}
                            之間，每輪最大總賭注為 {maxBetFollowChoice?.maxBetMain}
                        </li>
                        <li>下注時間結束後，將顯示結果。 如果三個骰子的結果與您的賭注相符，則您獲勝。</li>
                    </ul>
                </li>
                <li className="guide-item">
                    <h2>支出</h2>
                    <ul className="desc">
                        <li>大, 小的賠率為 {formatOdds(odds?.big, fractionalOddsFormat)}</li>
                        <li>中獎金額根據投注賠率計算。</li>
                        <li>支付包括初始投注。</li>
                        <li>投注結算後，所有中獎金額都會立即添加到您的賬戶餘額中。</li>
                    </ul>
                </li>
                {environment === ENVIRONMENT.sc && renderMd5Tw(props.locale)}
                {renderTermsAndConditionsTW()}
            </ul>
        </>
    );
};
export default MultiplayBigSmallGuideTW;
