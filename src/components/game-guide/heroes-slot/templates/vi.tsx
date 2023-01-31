import { renderTermsAndConditionsVI } from "../../../shared";
import { HeroesSlotTemplate } from "./default";

class HeroesSlotGuideVI extends HeroesSlotTemplate {
    renderTermAndConditions(styles: { readonly [key: string]: string }) {
        return renderTermsAndConditionsVI(styles["guide-item"]);
    }
}

export default HeroesSlotGuideVI;
