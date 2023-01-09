import React from "react";
import Styles from "../blockchain-baccarat.module.scss";

const ThirdCardRule: React.FunctionComponent<{ t: any }> = ({ t }) => {
    return (
        <>
            <h2>{t("thirdCardRules.header")}</h2>
            <ul className="desc">
                {
                    Object.entries(t('thirdCardRules.descriptions', { returnObjects: true })).map(([line, description]) => (
                        <li key={line}>{description}</li>))
                }

                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">{t("thirdCardRules.playerHand.header")}</span>
                        <div className="table-container">
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th className={Styles["sum-two-cards"]}>{t("thirdCardRules.playerHand.cardsTotal")}</th>
                                        <th>{t("thirdCardRules.playerHand.action")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Object.entries(t('thirdCardRules.playerHand.example', { returnObjects: true })).map(([cardTotal, action], index) => (<tr key={index}>
                                            <td>{cardTotal}</td>
                                            <td className="text-start">{action}</td>
                                        </tr>))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">{t("thirdCardRules.bankerHand.header")}</span>
                        <ul className="desc">
                            <li>
                                {t("thirdCardRules.bankerHand.description")}
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles["sum-two-cards"]}>{t("thirdCardRules.bankerHand.cardsTotal")}</th>
                                                <th>{t("thirdCardRules.bankerHand.action")}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                Object.entries(t('thirdCardRules.bankerHand.example', { returnObjects: true })).map(([cardTotal, action], index) => (<tr key={index}>
                                                    <td>{cardTotal}</td>
                                                    <td className="text-start">{action}</td>
                                                </tr>))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            <li>{t("thirdCardRules.bankerHand.secondDescription")} </li>
                        </ul>
                    </li>
                </ul>
            </ul>
        </>
    )
}
export default ThirdCardRule;
