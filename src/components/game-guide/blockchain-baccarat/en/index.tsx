import React from "react";
import { renderTermsAndConditionsEN } from "../../../shared";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../../baccarat/type";
import { useTranslation } from "next-i18next";
import BaseBaccaratIntroduction from "../../base-baccarat/base-baccarat-introduction";
import BaseBaccaratPointCalculationRules, { BaccaratPointCalculationRulesResources } from "../../base-baccarat/base-baccarat-point-calculation-rules";
import BaseBaccaratThirdCardRule, { BaccaratThirdCardRuleResources } from "../../base-baccarat/base-baccarat-third-card-rule";
import BaseBaccaratPayout, { BaccaratPayoutResources } from "../../base-baccarat/base-baccarat-payouts";
import BlockChainBaccaratGameRule, { BlockchainBaccaratGameRuleResources } from "./blockchain-baccarat-game-rule";
import { BaccaratIntroductionResources } from "../../base-baccarat/card-model";

interface BlockchainBaccaratResources {
    introduction: BaccaratIntroductionResources;
    gameRules: BlockchainBaccaratGameRuleResources;
    pointRules: BaccaratPointCalculationRulesResources;
    thirdCardRules: BaccaratThirdCardRuleResources;
    payouts: BaccaratPayoutResources;
}

const BlockchainBaccaratGuideEN: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat } = props;
    const { odds } = gameConfigs;
    const { t } = useTranslation(['blockchainbaccarat', 'basebaccarat']);
    const baseResources: BlockchainBaccaratResources = t('basebaccarat:resources', { returnObjects: true });
    const blockchainBaccaratResources: BlockchainBaccaratResources = t('blockchainbaccarat:resources', { returnObjects: true });
    const resources: BlockchainBaccaratResources = {
        ...baseResources,
        ...blockchainBaccaratResources,
        gameRules: {
            ...baseResources.gameRules,
            ...blockchainBaccaratResources.gameRules,
        },
    };

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item"><BaseBaccaratIntroduction resources={resources.introduction} /></li>
                <li className="guide-item"><BlockChainBaccaratGameRule maxBetMain={maxBetFollowChoice?.maxBetMain ?? 0} resources={resources.gameRules} /></li>
                <li className="guide-item"><BaseBaccaratPointCalculationRules resources={resources.pointRules} /></li>
                <li className="guide-item"><BaseBaccaratThirdCardRule resources={resources.thirdCardRules} /></li>
                <li className="guide-item"> <BaseBaccaratPayout {...{ fractionalOddsFormat, odds, maxBetFollowChoice, resources: resources.payouts }} /></li>
                {renderTermsAndConditionsEN()}
            </ul>
        </>
    );
};

export default BlockchainBaccaratGuideEN;
