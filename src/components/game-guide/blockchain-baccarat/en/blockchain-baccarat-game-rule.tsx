import React from "react";
import Styles from "../blockchain-baccarat.module.scss";
import { Markup } from "interweave";
import { Cards } from "../models/blockchain-baccarat-model";
import BaseBaccaratGameRule, { BaccaratGameRuleResources } from "../../base/base-baccarat/base-baccarat-game-rule";

export interface BlockchainBaccaratGameRuleResources extends BaccaratGameRuleResources {
    cutCard: {
        header: string;
        description: string;
    },
    burnCard: {
        header: string;
        description: string;
        noted: string;
        firstCard: string;
        example: {
            header: string;
            descriptions: Array<string>
        }
    }
}

const CutCard: React.FunctionComponent<{ resources: BlockchainBaccaratGameRuleResources }> = ({ resources }) => {
    return (
        <ul className="style-number-dot">
            <li className="number-dot">
                <span className="font-weight-medium title-text">{resources.cutCard.header}</span>
                <ul><li>{resources.cutCard.description} </li></ul>
                <img className={Styles["cut-card"]} src={`/static/images/blockchain-baccarat/cutcard.png`} alt="cut-card" loading="eager" />
            </li>
            <li className="number-dot">
                <span className="font-weight-medium title-text">{resources.burnCard.header}</span>
                <ul className="desc"><li>{resources.burnCard.description}</li></ul>
                <div>
                    <Markup content={resources.burnCard.noted} />
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>{resources.burnCard.firstCard}</th>
                                    {
                                        Cards.map((card, index) => <th key={index}>{card.name}</th>)
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>{resources.burnCard.header}</strong></td>
                                    {
                                        Cards.map((card, index) => <td key={index}>{card.value}</td>)
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <strong>{resources.burnCard.example.header}</strong>:
                </div>
                <ul className="desc">
                    {
                        resources.burnCard.example.descriptions.map((description, index) => (
                            <li key={index}>{description}</li>))
                    }
                </ul>
            </li>
        </ul>
    );
};

const BlockChainBaccaratGameRule: React.FunctionComponent<{ resources: BlockchainBaccaratGameRuleResources }> = ({ resources }) => {
    return (
        <>
            <BaseBaccaratGameRule resources={resources} />
            <CutCard resources={resources} />
        </>
    );
};

export default BlockChainBaccaratGameRule;
