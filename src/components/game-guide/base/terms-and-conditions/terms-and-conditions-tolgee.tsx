import { useTranslate } from "@tolgee/react";

import { IBaseTermAndConditionResources } from "./languages/types";
import BaseTermsAndConditions from "./terms-and-conditions";

const TermsAndConditionsTolgee: React.FunctionComponent<{ extendDetails?: Array<string> }> = ({ extendDetails }) => {
    const { t } = useTranslate(["Common"]);
    let commonResources: IBaseTermAndConditionResources = {
        header: t("termsandconditions-title"),
        details: [
            t(`termsandconditions_para_1`),
            t(`termsandconditions_para_2`),
            t(`termsandconditions_para_3`),
            t(`termsandconditions_para_4`),
        ],
    };

    const resources: IBaseTermAndConditionResources = {
        ...commonResources,
        details: (extendDetails ?? []).concat(commonResources.details),
    };
    return <BaseTermsAndConditions resources={resources} />;
};

export default TermsAndConditionsTolgee;
