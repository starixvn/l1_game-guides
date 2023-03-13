import Styles from "../nightclub.module.scss";
import { getNightClubTranslationResource } from "../languages";
import SlotGuideTemplate from "../../base/base-classic-slot/base-slot-template";
import { ISlotTranslationResource } from "../../base/base-classic-slot/types";

export class NightClubTemplate extends SlotGuideTemplate {
    get imageDirectoryName(): string {
        return "/static/images/nightclub";
    }

    getTranslationResource(langKey: string | undefined): ISlotTranslationResource {
        return getNightClubTranslationResource(langKey);
    }

    getStyles(): { readonly [key: string]: string } {
        return Styles;
    }
}
