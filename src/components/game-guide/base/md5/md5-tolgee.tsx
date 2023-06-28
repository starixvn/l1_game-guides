import { useTranslate } from "@tolgee/react";
import MD5 from ".";

export type MD5TolgeeProps = {
    step1ImageUrl?: string;
    step2ImageUrl?: string;
    step3ImageUrl?: string;
    step4ImageUrl?: string;
    note?: JSX.Element | string;
};

const MD5Tolgee: React.FunctionComponent<MD5TolgeeProps> = ({
    step1ImageUrl,
    step2ImageUrl,
    step3ImageUrl,
    step4ImageUrl,
    note
}) => {
    const { t } = useTranslate(["Common"]);
    return <MD5 {... {
        locale: "",
        resources: {
            content: {
                header: t("title_md5"),
                technology: {
                    header: t("subtitle_md5tech"),
                    details: [
                        t("md5tech_para_1"),
                        t("md5tech_para_2"),
                        t("md5tech_para_3"),
                    ]
                },
                validation: {
                    header: t("subtitle_md5valid"),
                    details: [
                        t("md5valid_para_1"),
                        t("md5valid_para_2"),
                        t("md5valid_para_3"),
                        t("md5valid_para_4"),
                    ]
                },
                noted: "",
            },
            example: {
                header: "",
                step1Text: t("md5example_para_1"),
                step2Text: t("md5example_para_2"),
                step3Text: t("md5example_para_4"),
                step4Text: t("md5example_para_5"),
                md5Key: "",
                result: "",
                copy: "",
            }
        },
        step1ImageUrl,
        step2ImageUrl,
        step3ImageUrl,
        step4ImageUrl,
        note
    }} />;
};

export default MD5Tolgee;