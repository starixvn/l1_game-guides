import Styles from "../heroes-slot.module.scss";
import { getHeroesSlotTranslationResource } from "../languages";
import SlotGuideTemplate from "../../base/base-slot/base-slot-template";
import { ISlotTranslationResource } from "../../base/base-slot/types";

export class HeroesSlotTemplate extends SlotGuideTemplate {
    get imageDirectoryName(): string {
        return "/static/images/heroes";
    }

    getTranslationResource(langKey: string | undefined): ISlotTranslationResource {
        return getHeroesSlotTranslationResource(langKey);
    }

    getStyles(): { readonly [key: string]: string } {
        return Styles;
    }
}
