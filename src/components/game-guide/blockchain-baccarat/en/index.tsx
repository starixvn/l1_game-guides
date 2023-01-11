import React, { useEffect } from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameGuideProps } from "../../type";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { GameConfigProps, MaxBetChoicesProps } from "../../baccarat/type";
import { useTranslation } from "next-i18next";
import BaseBaccaratIntroduction from "../../base-baccarat/base-baccarat-introduction";
import BaseBaccaratPointCalculationRules from "../../base-baccarat/base-baccarat-point-calculation-rules";
import BaseBaccaratThirdCardRule, { BaccaratThirdCardRuleResources } from "../../base-baccarat/base-baccarat-third-card-rule";
import BaseBaccaratPayout, { BaccaratPayoutResources } from "../../base-baccarat/base-baccarat-payouts";
import BlockChainBaccaratGameRule from "./blockchain-baccarat-game-rule";
import { BaccaratIntroductionResources } from "../../base-baccarat/card-model";

type BlockchainBaccaratResources = {
    introduction: BaccaratIntroductionResources

}

const BlockchainBaccaratGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, isScrollMD5, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    useEffect(() => {
        isScrollMD5 && ScrollToMD5();
    });

    const { t } = useTranslation('blockchainbaccarat');

    const introductionResources: BaccaratIntroductionResources = t('introduction', { returnObjects: true });
    const payoutResources: BaccaratPayoutResources = t('payouts', { returnObjects: true });
    const thirdCardRuleResources: BaccaratThirdCardRuleResources = t('thirdCardRules', { returnObjects: true });
    return (
        <>
            <ul className="game-guide">
                <li className="guide-item"><BaseBaccaratIntroduction resources={introductionResources} /></li>
                <li className="guide-item"><BlockChainBaccaratGameRule maxBetMain={maxBetFollowChoice?.maxBetMain ?? 0} t={t} /></li>
                <li className="guide-item"><BaseBaccaratPointCalculationRules t={t} /></li>
                <li className="guide-item"><BaseBaccaratThirdCardRule resources={thirdCardRuleResources} /></li>
                <li className="guide-item"> <BaseBaccaratPayout {...{ fractionalOddsFormat, odds, maxBetFollowChoice, resources: payoutResources }} /></li>
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};

export default BlockchainBaccaratGuideEN;
