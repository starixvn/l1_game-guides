import React from "react";
import Styles from "../blockchain-baccarat.module.scss";
import { Markup } from "interweave";
import { Cards } from "../models/blockchain-baccarat-model";
import BaseBaccaratGameRule from "../../base-baccarat/base-baccarat-game-rule";

const CutCard: React.FunctionComponent<{ t: any }> = ({ t }) => {
    return (
        <ul className="style-number-dot">
            <li className="number-dot">
                <span className="font-weight-medium title-text">{t('gameRules.cutCard.header')}</span>
                <ul><li>{t('gameRules.cutCard.description')} </li></ul>
                <img className={Styles["cut-card"]} src={`/static/images/blockchain-baccarat/cutcard.png`} alt="cut-card" loading="eager" />
            </li>
            <li className="number-dot">
                <span className="font-weight-medium title-text">{t('gameRules.burnCard.header')}</span>
                <ul className="desc"><li>{t('gameRules.burnCard.description')}</li></ul>
                <div>
                    <Markup content={t("gameRules.burnCard.noted")} />
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>{t('gameRules.burnCard.firstCard')}</th>
                                    {
                                        Cards.map((card, index) => <th key={index}>{card.name}</th>)
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>{t('gameRules.burnCard.header')}</strong></td>
                                    {
                                        Cards.map((card, index) => <td key={index}>{card.value}</td>)
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <strong>{t('gameRules.burnCard.example.header')}</strong>:
                </div>
                <ul className="desc">
                    {
                        Object.entries(t('gameRules.burnCard.example.descriptions', { returnObjects: true })).map(([line, description]) => (
                            <li key={line}>{description}</li>))
                    }
                </ul>
            </li>
        </ul>
    );
};

const BlockChainBaccaratGameRule: React.FunctionComponent<{ maxBetMain: number | string, t: any }> = ({ maxBetMain, t }) => {
    return (
        <>
            <BaseBaccaratGameRule {...{ maxBetMain, t }} />
            <CutCard t={t} />

        </>
    );
};

export default BlockChainBaccaratGameRule;
