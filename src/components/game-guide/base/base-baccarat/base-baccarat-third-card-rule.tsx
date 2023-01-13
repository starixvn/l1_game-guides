import React from "react";
import Styles from "./base-baccarat.module.scss";
import { IBaseBaccaratResources } from "./languages/types";

const BaseBaccaratThirdCardRule: React.FunctionComponent<{ resources: IBaseBaccaratResources }> = ({ resources }) => {
    const { header, descriptions, playerHand, bankerHand } = resources.thirdCardRules;
    return (
        <>
            <h2>{header}</h2>
            <ul className="desc">
                {
                    descriptions.map((description, index) => (
                        <li key={index}>{description}</li>))
                }
                <ul className="style-number-dot">
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">{playerHand.header}</span>
                        <div className="table-container">
                            <table className="table text-center">
                                <thead>
                                    <tr>
                                        <th className={Styles["sum-two-cards"]}>{playerHand.cardsTotal}</th>
                                        <th>{playerHand.action}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        playerHand.examples.map((example, index) => (<tr key={index}>
                                            <td>{example.twoCardsTotal}</td>
                                            <td className="text-start">{example.action}</td>
                                        </tr>))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </li>
                    <li className="number-dot">
                        <span className="font-weight-medium title-text">{bankerHand.header}</span>
                        <ul className="desc">
                            <li>
                                {bankerHand.firstDescription}
                                <div className="table-container">
                                    <table className="table text-center">
                                        <thead>
                                            <tr>
                                                <th className={Styles["sum-two-cards"]}>{bankerHand.cardsTotal}</th>
                                                <th>{bankerHand.action}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                bankerHand.examples.map((example, index) => (<tr key={index}>
                                                    <td>{example.twoCardsTotal}</td>
                                                    <td className="text-start">{example.action}</td>
                                                </tr>))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                            {
                                bankerHand.secondDescription.map((description, index) => (
                                    <li key={index}>{description}</li>))
                            }
                        </ul>
                    </li>
                </ul>
            </ul>
        </>
    )
}
export default BaseBaccaratThirdCardRule;
