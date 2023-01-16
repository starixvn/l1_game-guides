import React from "react";
import Styles from "./base-baccarat.module.scss";
import { Markup } from "interweave";
import { IBaseBaccaratResources } from "./languages/types";
import { StringFormat } from "../../../../helpers/string-helper";

const BaseBaccaratGameRule: React.FunctionComponent<{ resources: IBaseBaccaratResources, maxBetMain: string, environment: string | undefined }> = ({ resources, maxBetMain, environment }) => {
    const { gameRules } = resources;
    return (
        <>
            <h2>{gameRules.header}</h2>
            <ul className="desc">
                {
                    gameRules.getDetails(environment, maxBetMain).map((detail, index) => {
                        return <li key={index}>{<Markup content={StringFormat(detail, maxBetMain)} />}</li>
                    })
                }
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>{gameRules.table.header.options}</th>
                                    <th>{gameRules.table.header.options}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    gameRules.table.contents.map((content, index) => (<tr key={index}>
                                        <td>{content.choice}</td>
                                        <td className="text-start">{content.rule}</td>
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
