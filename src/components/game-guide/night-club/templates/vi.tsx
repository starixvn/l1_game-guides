import { renderTermsAndConditionsVI } from "../../../shared";
import Styles from "../nightclub.module.scss";
import SlotGuideTemplate from "../../base/base-slot/base-slot-template";
import { getNightClubTranslationResource } from "../languages";
import { ISlotTranslationResource } from "../../base/base-slot/types";

class NightClubGuideVI extends SlotGuideTemplate {
    get imageDirectoryName(): string {
        return "/static/images/nightclub";
    }

    getTranslationResource(langKey: string | undefined): ISlotTranslationResource {
        return getNightClubTranslationResource(langKey);
    }

    getStyles(): { readonly [key: string]: string } {
        return Styles;
    }

    renderTermAndConditions(styles: { readonly [key: string]: string }) {
        return renderTermsAndConditionsVI(styles["guide-item"]);
    }
}

export default NightClubGuideVI;
