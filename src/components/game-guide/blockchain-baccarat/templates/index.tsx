import React from "react";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../../baccarat/type";
import BaseBaccaratIntroduction from "../../base/base-baccarat/base-baccarat-introduction";
import BaseBaccaratPointCalculationRules from "../../base/base-baccarat/base-baccarat-point-calculation-rules";
import BaseBaccaratThirdCardRule from "../../base/base-baccarat/base-baccarat-third-card-rule";
import BaseBaccaratPayout from "../../base/base-baccarat/base-baccarat-payouts";
import BlockChainBaccaratGameRule from "./blockchain-baccarat-game-rule";
import { getBlockchainBaccaratTranslationResource } from "../languages";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";


const BlockchainBaccaratGuideTemplate: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat, locale } = props;
    const { odds } = gameConfigs;

    const resources = getBlockchainBaccaratTranslationResource(locale);

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item"><BaseBaccaratIntroduction resources={resources} /></li>
                <li className="guide-item"><BlockChainBaccaratGameRule resources={resources} maxBetMain={maxBetFollowChoice?.maxBetMain ?? 0} /></li>
                <li className="guide-item"><BaseBaccaratPointCalculationRules resources={resources} /></li>
                <li className="guide-item"><BaseBaccaratThirdCardRule resources={resources} /></li>
                <li className="guide-item"><BaseBaccaratPayout {...{ fractionalOddsFormat, odds, maxBetFollowChoice, resources }} /></li>
                <li className="guide-item"><BaseTermsAndConditions resources={resources.termsAndConditions} /></li>
            </ul>
        </>
    );
};

export default BlockchainBaccaratGuideTemplate;
