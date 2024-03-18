import { useTranslate } from "@tolgee/react";
import { FC } from "react";
import Styles from "./pf.module.scss";

const PFDefinition: FC<any> = (props) => {
    const { t: translateCommon } = useTranslate();
    return <div>{translateCommon("pf_title_what_is_provably_fair")}</div>;
};

const PFHowItWorks: FC<any> = (props) => {
    const { t: translateCommon } = useTranslate();
    return <div>{translateCommon("pf_title_how_provably_fair_work")}</div>;
};

export { PFDefinition, PFHowItWorks };
