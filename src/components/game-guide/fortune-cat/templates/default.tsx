import Styles from "../fortune-cat.module.scss";
import { getFortuneCatTranslationResource } from "../languages";
import SlotGuideTemplate from "../../base/base-classic-slot/base-slot-template";
import { ISlotTranslationResource } from "../../base/base-classic-slot/types";

export class FortuneCatTemplate extends SlotGuideTemplate {
    get imageDirectoryName(): string {
        return "/static/images/fortune-cat";
    }

    getTranslationResource(langKey: string | undefined): ISlotTranslationResource {
        return getFortuneCatTranslationResource(langKey);
    }

    getStyles(): { readonly [key: string]: string } {
        return Styles;
    }
}
