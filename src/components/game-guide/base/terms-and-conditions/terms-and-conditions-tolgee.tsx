import { useTranslate } from "@tolgee/react";
import BaseTermsAndConditions from "./terms-and-conditions";
import { IBaseTermAndConditionResources } from "./languages/types";

const TermsAndConditionsTolgee = () => {
    const { t } = useTranslate(["Common"]);

    let resources: IBaseTermAndConditionResources = {
        header: t("termsandconditions-title"),
        details: [
            t(`termsandconditions_para_1`),
            t(`termsandconditions_para_2`),
            t(`termsandconditions_para_3`),
            t(`termsandconditions_para_4`),
        ]
    }

    return <BaseTermsAndConditions resources={resources} />;
};


export default TermsAndConditionsTolgee;