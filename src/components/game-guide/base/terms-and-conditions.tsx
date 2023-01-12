import React from "react";
import { Markup } from "interweave";

export interface TermsAndConditionsResources {
    header: string;
    contents: Array<string>;
}

const TermsAndConditions: React.FunctionComponent<{ resources: TermsAndConditionsResources, style: string }> = ({ resources, style }) => {
    return (
        <li className={`guide-item ${style}`}>
            <h2>{resources.header}</h2>
            <ul className="style-number-rule">
                {
                    resources.contents.map((content, index) => <li className="number-dot" key={index}>{<Markup content={content} />}</li>)
                }
            </ul>
        </li>
    );
};

export default TermsAndConditions;
