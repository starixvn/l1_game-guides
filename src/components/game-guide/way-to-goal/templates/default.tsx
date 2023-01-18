import Styles from "../way-to-goal.module.scss";
import { getWayToGoalTranslationResource } from "../languages";
import SlotGuideTemplate from "../../base/base-slot/base-slot-template";
import { ISlotTranslationResource } from "../../base/base-slot/types";

export class WayToGoalTemplate extends SlotGuideTemplate {
    get imageDirectoryName(): string {
        return "/static/images/way-to-goal";
    }

    getTranslationResource(langKey: string | undefined): ISlotTranslationResource {
        return getWayToGoalTranslationResource(langKey);
    }

    getStyles(): { readonly [key: string]: string } {
        return Styles;
    }
}
