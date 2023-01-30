import React from "react";
import { IBaseTermAndConditionResources } from "./languages/types";

const BaseTermsAndConditions: React.FunctionComponent<{ resources: IBaseTermAndConditionResources }> = ({ resources }) => {
    return (
        <>
            <h2>{resources.header}</h2>
            <ul className="style-number-rule">
                {
                    resources.details.map((detail, index) => <li className="number-dot" key={index}>{detail}</li>)
                }
            </ul>
        </>
    );
};

export default BaseTermsAndConditions;
