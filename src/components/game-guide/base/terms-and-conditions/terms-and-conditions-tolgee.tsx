import { useTranslate } from "@tolgee/react";

import { IBaseTermAndConditionResources } from "./languages/types";
import BaseTermsAndConditions from "./terms-and-conditions";

const TermsAndConditionsTolgee: React.FunctionComponent<{ extendDetails?: Array<string> }> = ({ extendDetails }) => {
    const { t } = useTranslate(["Common"]);
    let commonResources: IBaseTermAndConditionResources = {
        header: t("title_terms_conditions"),
        details: [
            t(`terms_conditions_para_1`),
            t(`terms_conditions_para_2`),
            t(`terms_conditions_para_3`),
            t(`terms_conditions_para_4`),
        ],
    };

    const resources: IBaseTermAndConditionResources = {
        ...commonResources,
        details: (extendDetails ?? []).concat(commonResources.details),
    };
    return <BaseTermsAndConditions resources={resources} />;
};

export default TermsAndConditionsTolgee;
