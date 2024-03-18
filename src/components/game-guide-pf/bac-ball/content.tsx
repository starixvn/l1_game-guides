import { FC } from "react";
import { PFDefinition, PFHowItWorks } from "../base";
import { useTranslate } from "@tolgee/react";
import Styles from "./bac-ball-pf.module.scss";

const BacBallApplyPF: FC = () => {
    const { t: translateCommon } = useTranslate();
    const { t: translateBacBall } = useTranslate(["BacBall"]);
    const { t: translateSN } = useTranslate(["SabaNumber"]);

    return <div>{translateCommon("pf_title_how_is_pf_applied_in_game")}</div>;
};

const BacBallVerifyPF: FC = () => {
    const { t: translateCommon } = useTranslate();
    const { t: translateBacBall } = useTranslate(["BacBall"]);
    const { t: translateSN } = useTranslate(["SabaNumber"]);

    return <div>{translateCommon("pf_title_verify_the_provably_fair")}</div>;
};

const BacBallPFGuideContent: FC = () => {
    return (
        <>
            <div>Title</div>
            <PFDefinition />
            <PFHowItWorks />
            <BacBallApplyPF />
            <BacBallVerifyPF />
        </>
    );
};

export default BacBallPFGuideContent;
