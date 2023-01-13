import React from "react";
import Styles from "../../base/base-baccarat/base-baccarat.module.scss";
import { Markup } from "interweave";
import BaseBaccaratGameRule from "../../base/base-baccarat/base-baccarat-game-rule";
import { IBlockchainBaccaratResources } from "../languages/types";
import { Cards } from "../../base/base-baccarat/card-model";

const CutCard: React.FunctionComponent<{ resources: IBlockchainBaccaratResources }> = ({ resources }) => {
    const { cutCard, burnCard } = resources.extendGameRules;
    return (
        <ul className="style-number-dot">
            <li className="number-dot">
                <span className="font-weight-medium title-text">{cutCard.header}</span>
                <ul><li>{cutCard.description} </li></ul>
                <img className={Styles["cut-card"]} src={`/static/images/blockchain-baccarat/cutcard.png`} alt="cut-card" loading="eager" />
            </li>
            <li className="number-dot">
                <span className="font-weight-medium title-text">{burnCard.header}</span>
                <ul className="desc"><li>{burnCard.description}</li></ul>
                <div>
                    <Markup content={burnCard.noted} />
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>{burnCard.firstCard}</th>
                                    {
                                        Cards.map((card, index) => <th key={index}>{card.name}</th>)
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>{burnCard.header}</strong></td>
                                    {
                                        Cards.map((card, index) => <td key={index}>{card.value}</td>)
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <strong>{burnCard.example.header}</strong>:
                </div>
                <ul className="desc">
                    {
                        burnCard.example.descriptions.map((description, index) => (
                            <li key={index}>{description}</li>))
                    }
                </ul>
            </li>
        </ul>
    );
};

const BlockChainBaccaratGameRule: React.FunctionComponent<{ resources: IBlockchainBaccaratResources, maxBetMain: number | string }> = ({ resources, maxBetMain }) => {
    return (
        <>
            <BaseBaccaratGameRule {...{ resources, maxBetMain }} />
            <CutCard resources={resources} />
        </>
    );
};

export default BlockChainBaccaratGameRule;
