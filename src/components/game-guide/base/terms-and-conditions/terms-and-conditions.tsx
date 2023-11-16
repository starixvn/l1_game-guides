import { Markup } from "interweave";
import React from "react";
import { ContentList, IBaseTermAndConditionResources } from "./languages/types";

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


export const RenderContentByList: React.FunctionComponent<{ resources: ContentList }> = ({ resources }) => {
    return (           
        <ul className="desc">
            {
                resources.details.map((detail, index) => <li key={index}><Markup content={detail} /></li>)
            }
        </ul>
    );
};



export default BaseTermsAndConditions;
