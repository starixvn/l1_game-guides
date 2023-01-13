import React from "react";
import { GameGuideProps } from "../../type";
import { GameConfigProps, MaxBetChoicesProps } from "../../baccarat/type";
import BaseBaccaratIntroduction from "../../base/base-baccarat/base-baccarat-introduction";
import BaseBaccaratPointCalculationRules from "../../base/base-baccarat/base-baccarat-point-calculation-rules";
import BaseBaccaratThirdCardRule from "../../base/base-baccarat/base-baccarat-third-card-rule";
import BaseBaccaratPayout from "../../base/base-baccarat/base-baccarat-payouts";
import { getVipBaccaratTranslationResource } from "../languages";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";
import BaseBaccaratGameRule from "../../base/base-baccarat/base-baccarat-game-rule";

const VipBaccaratGuideTemplate: React.FC<GameGuideProps<GameConfigProps, MaxBetChoicesProps>> = (props) => {
    const { gameConfigs, maxBetFollowChoice, fractionalOddsFormat, locale, environment } = props;
    const { odds } = gameConfigs;

    let resources = getVipBaccaratTranslationResource(locale);

    return (
        <>
            <ul className="game-guide">
                <li className="guide-item"><BaseBaccaratIntroduction resources={resources} /></li>
                <li className="guide-item"><BaseBaccaratGameRule environment={environment} resources={resources} maxBetMain={(maxBetFollowChoice?.maxBetMain ?? 0).toString()} /></li>
                <li className="guide-item"><BaseBaccaratPointCalculationRules resources={resources} /></li>
                <li className="guide-item"><BaseBaccaratThirdCardRule resources={resources} /></li>
                <li className="guide-item"><BaseBaccaratPayout {...{ fractionalOddsFormat, odds, maxBetFollowChoice, resources }} /></li>
                <li className="guide-item"><BaseTermsAndConditions resources={resources.termsAndConditions} /></li>
            </ul>
        </>
    );
};

export default VipBaccaratGuideTemplate;
