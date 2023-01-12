import React from "react";
import Styles from "./base-baccarat.module.scss";
import { Markup } from "interweave";

interface GameRuleByChoice {
    choice: string;
    rule: string;
}

export interface BaccaratGameRuleResources {
    header: string;
    details: Array<string>;
    table: {
        header: {
            options: string;
            descriptions: string;
        }
        contents: Array<GameRuleByChoice>;
    }
}

const BaseBaccaratGameRule: React.FunctionComponent<{ resources: BaccaratGameRuleResources }> = ({ resources }) => {
    return (
        <>
            <h2>{resources.header}</h2>
            <ul className="desc">
                {
                    resources.details.map((detail, index) => <li key={index}>{<Markup content={detail} />}</li>)
                }
                <li className="contentBeforeEmpty">
                    <div className="table-container">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className={Styles["rule-options"]}>{resources.table.header.options}</th>
                                    <th>{resources.table.header.options}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    resources.table.contents.map((content, index) => (<tr key={index}>
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
