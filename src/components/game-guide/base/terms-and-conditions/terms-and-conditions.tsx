import React from "react";
import { IBaseTermAndConditionResources } from "./languages/types";
import { Markup } from "interweave";

const BaseTermsAndConditions: React.FunctionComponent<{ resources: IBaseTermAndConditionResources }> = ({ resources }) => {
    return (
        <li className="guide-item">
            <h2>{resources.header}</h2>
            <ul className="style-number-rule">
                {
                    resources.details.map((detail, index) => <li className="number-dot" key={index}><Markup content={detail} /></li>)
                }
            </ul>
        </li>
    );
};

export default BaseTermsAndConditions;
