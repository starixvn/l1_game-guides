import React from "react";

import { BaccaratGuideState, GameConfigProps } from "../../baccarat/type";
import { GameGuideBase } from "../../type";
import BaseBaccaratThirdCardRule from "./base-baccarat-third-card-rule";
import BaseBaccaratPayout from "./base-baccarat-payouts";
import BaseTermsAndConditions from "../terms-and-conditions/terms-and-conditions";
import BaseBaccaratPointCalculationRules from "./base-baccarat-point-calculation-rules";
import BaseBaccaratGameRule from "./base-baccarat-game-rule";
import BaseBaccaratIntroduction from "./base-baccarat-introduction";
import ScrollToMD5 from "../../../shared/md5-count-down-timer";
import { handleMaxBetChoice } from "../../../shared/baccarat";

abstract class BaseBaccaratGuide<P extends GameGuideBase, S extends BaccaratGuideState> extends React.PureComponent<P, S> {
    private configs: any;

    constructor(props: P) {
        super(props);
        const { userStakeLevel, gameConfigs, dynamic, isGetGameConfigs, folderConfigName, project } = props;

        import(`/src/components/game-guide/${folderConfigName}/configs/${project}/game-configs.ts`).then((mod: any) => {
            this.configs = mod.default as GameConfigProps;
            if (this.configs) {
                if (isGetGameConfigs) {
                    if (dynamic) {
                        this.configs = gameConfigs;
                    } else {
                        gameConfigs.odds = this.configs?.odds;
                        this.configs = gameConfigs;
                    }
                }
                this.setState({ configs: this.configs });
                this.setState({ maxBetFollowChoice: handleMaxBetChoice(userStakeLevel, this.configs) });
            }

            this.setState({ resources: this.getResources() });
        });
    }

    getResources = () => {
        return {};
    };

    renderIntroduction = () => {
        return (
            <li className="guide-item">
                <BaseBaccaratIntroduction resources={this.state.resources} />
            </li>
        );
    };

    renderGameRule = () => {
        return (
            <li className="guide-item">
                <BaseBaccaratGameRule
                    environment={this.props.environment}
                    resources={this.state.resources}
                    maxBetMain={(this.state.maxBetFollowChoice?.maxBetMain ?? 0).toString()}
                />
            </li>
        );
    };

    renderPointCalculationRules = () => {
        return (
            <li className="guide-item">
                <BaseBaccaratPointCalculationRules resources={this.state.resources} />
            </li>
        );
    };

    renderThirdCardRule = () => {
        return (
            <li className="guide-item">
                <BaseBaccaratThirdCardRule resources={this.state.resources} />
            </li>
        );
    };

    renderPayout = () => {
        return (
            <li className="guide-item">
                <BaseBaccaratPayout
                    {...{
                        fractionalOddsFormat: this.props.fractionalOddsFormat,
                        odds: this.configs.odds,
                        maxBetFollowChoice: this.state.maxBetFollowChoice,
                        resources: this.state.resources,
                    }}
                />
            </li>
        );
    };

    renderMd5 = () => {
        return <></>;
    };

    renderTermsAndConditions = () => {
        return <BaseTermsAndConditions resources={this.state.resources.termsAndConditions} />;
    };

    render() {
        if (!this.state?.resources) {
            return <></>;
        }

        this.props.isScrollMD5 && ScrollToMD5();
        return (
            <>
                <ul className="game-guide">
                    {this.renderIntroduction()}
                    {this.renderGameRule()}
                    {this.renderPointCalculationRules()}
                    {this.renderThirdCardRule()}
                    {this.renderPayout()}
                    {this.renderMd5()}
                    {this.renderTermsAndConditions()}
                </ul>
            </>
        );
    }
}

export default BaseBaccaratGuide;
