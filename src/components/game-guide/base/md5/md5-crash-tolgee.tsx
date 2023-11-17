import { useTranslate } from "@tolgee/react";
import MD5 from ".";
import { MD5TolgeeProps } from "./md5-tolgee";

const MDCrashTolgee: React.FunctionComponent<MD5TolgeeProps> = ({
    step1ImageUrl,
    step2ImageUrl,
    step3ImageUrl,
    step4ImageUrl,
    note,
    validationDescription
}) => {
    const { t } = useTranslate(["Common", "Spaceflight"]);
    return <MD5 {... {
        locale: "",
        resources: {
            content: {
                header: t("title_md5",{ ns: "Common" }),
                technology: {
                    header: t("subtitle_md5tech", { ns: "Common" }),
                    details: [
                        t("md5tech_para_1", { ns: "Common" }),
                        t("md5tech_para_2", { ns: "Common" }),
                        t("md5tech_para_3", { ns: "Common" }),
                    ]
                },
                validation: {
                    header: t("subtitle_md5valid", { ns: "Common" }),
                    details: [
                         t("md5valid_para_2", { ns: "Spaceflight" }),
                         t("md5valid_para_3", { ns: "Spaceflight" }),
                        t("md5valid_para_3", { ns: "Common" }),
                        t("md5valid_para_4", { ns: "Common" }),
                    ]
                },
                noted: t("md5valid_para_5", { ns: "Common" })
            },
            example: {
                header: t("md5example", { ns: "Common" }),
                step1Text: t("md5valid_para_2", { ns: "Spaceflight" }),
                step2Text: t("md5valid_para_3", { ns: "Spaceflight" }),
                step3Text: t("md5valid_para_3", { ns: "Common" }),
                step4Text: t("md5valid_para_4", { ns: "Common" }),
                md5Key: "",
                result: "",
                copy: "",
            }
        },
        step1ImageUrl,
        step2ImageUrl,
        step3ImageUrl,
        step4ImageUrl,
        note,
        validationDescription
    }} />;
};

export default MDCrashTolgee;