import React from "react";
import { getTermsAndConditionsResource } from "./languages";

const BaseTermsAndConditions: React.FunctionComponent<{ locale?: string }> = ({ locale }) => {
    const resources = getTermsAndConditionsResource(locale);
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
