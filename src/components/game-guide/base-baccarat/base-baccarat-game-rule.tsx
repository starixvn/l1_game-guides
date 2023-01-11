import React from "react";
import Styles from "./base-baccarat.module.scss";

const BaseBaccaratGameRule: React.FunctionComponent<{ maxBetMain: number | string, t: any }> = ({ maxBetMain, t }) => {
    return (
        <>
            <h2>{t('gameRules.header')}</h2>
            <ul className="desc">
                {
                    Object.entries(t('gameRules.details', { returnObjects: true, maxBetMain })).map(([line, description]) => <li key={line}>{description}</li>)
                }
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>{t('gameRules.descriptionTable.header.options')}</th>
                                    <th>{t('gameRules.descriptionTable.header.options')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.entries(t('gameRules.descriptionTable.content', { returnObjects: true })).map(([choice, rule]) => (<tr key={choice}>
                                        <td>{choice}</td>
                                        <td className="text-start">{rule}</td>
                                    </tr>))
                                }
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </>
    );
};

export default BaseBaccaratGameRule;
