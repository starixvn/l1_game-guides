import React from "react";
import { IBaseTermAndConditionResources } from "../../base/terms-and-conditions/languages/types";

const TexasTermsAndConditions: React.FunctionComponent<{ resources: IBaseTermAndConditionResources }> = ({ resources, children }) => {
    return (
        <>
            <h2>{resources.header}</h2>
            <ul className="style-number-rule">
                {children && <>{children}</>}
                {resources.details.map((detail, index) => (
                    <li className="number-dot" key={index}>
                        {detail}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TexasTermsAndConditions;
