import { useTranslate } from "@tolgee/react";

import { IBaseTermAndConditionResources } from "./types";
import BaseTermsAndConditions from "./terms-and-conditions";

const TermsAndConditionsLangLiveTolgee: React.FunctionComponent<{ extendDetails?: Array<string> }> = ({ extendDetails }) => {
    const { t } = useTranslate(["Langlive"]);
    let commonResources: IBaseTermAndConditionResources = {
        header: t("termsandconditions-title"),
        details: [
            t(`term_para1`),
            t(`term_para2`),
            t(`term_para3`),
            t(`term_para4`),
            t(`term_para5`),
            t(`term_para6`),
            t(`term_para7`),
            t(`term_para8`),
            t(`term_para9`),
        ],
        subDetails: {
            5: [
                t(`term_para6_list1`),
                t(`term_para6_list2`),
                t(`term_para6_list3`),
                t(`term_para6_list4`),
                t(`term_para6_list5`),
            ],
        },
    };

    const resources: IBaseTermAndConditionResources = {
        ...commonResources,
        details: (extendDetails ?? []).concat(commonResources.details),
    };
    return <BaseTermsAndConditions resources={resources} />;
};

export default TermsAndConditionsLangLiveTolgee;
