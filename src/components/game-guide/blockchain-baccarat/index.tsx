import { GameGuideBase } from "../type";
import { BaccaratGuideState } from "../baccarat/type";
import BaseBaccaratGuide from "../base/base-baccarat";
import { getBlockchainBaccaratTranslationResource } from "./languages";
import { getBlockchainBaccaratTolgeeTranslationResource } from "./languages/tolgee";
import { Cards } from "../base/base-baccarat/card-model";
import { Markup } from "interweave";
import { IBlockchainBaccaratResources } from "./languages/types";
import BaseBaccaratGameRule from "../base/base-baccarat/base-baccarat-game-rule";
import { isMobile } from "react-device-detect";
import Styles from "../base/base-baccarat/base-baccarat.module.scss";
import { TolgeeInstance } from "@tolgee/react";
import initTolgee from "../../../helpers/tolgee-helper";

const tolgee = initTolgee(["BaseBaccarat", "BlockchainBaccarat", "Common"]);

const CutCard: React.FunctionComponent<{ resources: IBlockchainBaccaratResources }> = ({ resources }) => {
    const { cutCard, burnCard } = resources.extendGameRules;
    const imgMobile = isMobile ? "_mobile" : "";

    return (
        <ul className="style-number-dot">
            <li className="number-dot">
                <span className="font-weight-medium title-text">{cutCard.header}</span>
                <ul>
                    <li>{cutCard.description} </li>
                </ul>
                <img
                    className={Styles["cut-card"]}
                    src={`/static/images/blockchain-baccarat/cutcard${imgMobile}.png`}
                    alt="cut-card"
                    loading="eager"
                />
            </li>
            <li className="number-dot">
                <span className="font-weight-medium title-text">{burnCard.header}</span>
                <ul className="desc">
                    <li>{burnCard.description}</li>
                </ul>
                <div>
                    <Markup content={burnCard.noted} />
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>{burnCard.firstCard}</th>
                                    {Cards.map((card, index) => (
                                        <th key={index}>{card.name}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>{burnCard.burnValue}</strong>
                                    </td>
                                    {Cards.map((card, index) => (
                                        <td key={index}>{card.value}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <strong>{burnCard.example.header}</strong>:
                </div>
                <ul className="desc">
                    {burnCard.example.descriptions.map((description, index) => (
                        <li key={index}>{description}</li>
                    ))}
                </ul>
            </li>
        </ul>
    );
};

const BlockChainBaccaratGameRule: React.FunctionComponent<{
    environment: string | undefined;
    resources: IBlockchainBaccaratResources;
    maxBetMain: string;
}> = ({ environment, resources, maxBetMain }) => {
    return (
        <>
            <BaseBaccaratGameRule {...{ environment, resources, maxBetMain }} />
            <CutCard resources={resources} />
        </>
    );
};

class BlockChainBaccaratGuide extends BaseBaccaratGuide<GameGuideBase, BaccaratGuideState> {
    constructor(props: GameGuideBase) {
        super(props);
    }

    isTolgeeSupportLanguage = () => {
        const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];
        return !excludedLanguages.includes(this.props.locale || "en");
    }

    getResources = () => {
        if (this.isTolgeeSupportLanguage()) {
            const languageTag = this.props.locale || "en";
            return getBlockchainBaccaratTolgeeTranslationResource(tolgee, languageTag);
        }
        return getBlockchainBaccaratTranslationResource(this.props.locale);
    };

    renderGameRule = () => {
        return (
            <li className="guide-item">
                <BlockChainBaccaratGameRule
                    environment={this.props.environment}
                    resources={this.state.resources}
                    maxBetMain={(this.state.maxBetFollowChoice?.maxBetMain ?? 0).toString()}
                />
            </li>
        );
    };
}

export default BlockChainBaccaratGuide;
