import React from "react";

const Introduction: React.FunctionComponent<{ t: any }> = ({ t }) => {
    return (
        <>
            <h2>{t("introduction.header")}</h2>
            <p className="content">{t("introduction.content")}</p>
        </>);
}

export default Introduction;
