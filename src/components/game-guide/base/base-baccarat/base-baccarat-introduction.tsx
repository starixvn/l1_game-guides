import React from "react";
import { IBaseBaccaratResources } from "./languages/types";

const BaseBaccaratIntroduction: React.FunctionComponent<{ resources: IBaseBaccaratResources }> = ({ resources }) => {
    return (
        <>
            <h2>{resources.introduction.header}</h2>
            <p className="content">{resources.introduction.content}</p>
        </>
    );
}

export default BaseBaccaratIntroduction;
