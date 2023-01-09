import React, { useEffect } from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameGuideProps } from "../../type";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import Introduction from "./introduction";
import GameRule from "./game-rule";
import PointCalculationRules from "./point-calculation-rules";
import ThirdCardRule from "./third-card-rule";
import Payout from "./payouts";
import { GameConfigProps, MaxBetChoicesProps } from "../../baccarat/type";
import { useTranslation } from "next-i18next";

const BlockchainBaccaratGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, isScrollMD5, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });

    const { t } = useTranslation('blockchainbaccarat');
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item"><Introduction t={t} /></li>
                <li className="guide-item"><GameRule maxBetMain={maxBetFollowChoice?.maxBetMain ?? 0} t={t} /></li>
                <li className="guide-item"><PointCalculationRules t={t} /></li>
                <li className="guide-item"><ThirdCardRule t={t} /></li>
                <li className="guide-item"> <Payout {...{ fractionalOddsFormat, odds, maxBetFollowChoice, t }} /></li>
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};

export default BlockchainBaccaratGuideEN;
