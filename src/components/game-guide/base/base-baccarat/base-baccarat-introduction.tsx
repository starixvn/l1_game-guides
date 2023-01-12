import React from "react";
import { BaccaratIntroductionResources } from "./card-model";

const BaseBaccaratIntroduction: React.FunctionComponent<{ resources: BaccaratIntroductionResources }> = ({ resources }) => {
    return (
        <>
            <h2>{resources.header}</h2>
            <p className="content">{resources.content}</p>
        </>
    );
}

export default BaseBaccaratIntroduction;
