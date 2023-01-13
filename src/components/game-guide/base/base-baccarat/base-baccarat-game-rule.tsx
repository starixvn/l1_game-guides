import React from "react";
import Styles from "./base-baccarat.module.scss";
import { Markup } from "interweave";
import { IBaseBaccaratResources } from "./languages/types";
import _ from "lodash";

const BaseBaccaratGameRule: React.FunctionComponent<{ resources: IBaseBaccaratResources, maxBetMain: number | string }> = ({ resources, maxBetMain }) => {
    const { gameRules } = resources;
    return (
        <>
            <h2>{gameRules.header}</h2>
            <ul className="desc">
                {
                    gameRules.details.map((detail, index) => {
                        const template = _.template(detail);
                        return <li key={index}>{<Markup content={template({ maxBetMain })} />}</li>
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
