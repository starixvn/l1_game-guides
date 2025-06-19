import { Markup } from "interweave";
import React from "react";
import { IBaseTermAndConditionResources } from "./types";

const BaseTermsAndConditions: React.FunctionComponent<{ resources: IBaseTermAndConditionResources }> = ({ resources }) => {
    return (
        <li className="guide-item" role="article">
            <h2>{resources.header}</h2>
            <ul className="style-number-rule">
                {resources.details.map((detail, index) => (
                    <React.Fragment key={index}>
                        {index !== 5 && (
                            <li className="number-dot">
                                <Markup content={detail} />
                            </li>
                        )}

                        {index === 5 && (
                            <li className="number-dot">
                                <Markup content={detail} />
                                <ul className="style-number-sub-rule">
                                    {resources.subDetails[index]?.map((subDetail, subIndex) => (
                                        <li key={subIndex}>
                                            <Markup content={subDetail} />
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </li>
    );
};

export default BaseTermsAndConditions;
