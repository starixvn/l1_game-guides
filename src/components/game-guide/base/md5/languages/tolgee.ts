import { TolgeeInstance } from "@tolgee/react";
import { IMd5Resources } from "./types";

export function generateMD5TranslationResource(tolgee: TolgeeInstance): IMd5Resources {
    const namespace = "Common";
    const getTranslation = (key: string) => tolgee.t(key, {ns: namespace});
    return {
        content: {
            header: getTranslation("title_md5"),
            technology: {
                header: getTranslation("subtitle_md5tech"),
                details: [getTranslation("md5tech_para_1"), getTranslation("md5tech_para_2"), getTranslation("md5tech_para_3")],
            },
            validation: {
                header: getTranslation("subtitle_md5valid"),
                details: [getTranslation("md5valid_para_1"), getTranslation("md5valid_para_2"), getTranslation("md5valid_para_3"), getTranslation("md5valid_para_4")],
            },
            noted: getTranslation("md5valid_para_5"),
        },
        example: {
            header: getTranslation("md5example"),
            step1Text: getTranslation("md5example_para_1"),
            step2Text: getTranslation("md5example_para_2"),
            step3Text: getTranslation("md5example_para_4"),
            step4Text: getTranslation("md5example_para_5"),
            md5Key: getTranslation("md5_key"),
            result: getTranslation("md5_result"),
            copy: getTranslation("md5_copy"),
        }
    };
}
