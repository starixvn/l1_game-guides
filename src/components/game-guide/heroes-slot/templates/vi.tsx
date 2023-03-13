import { renderTermsAndConditionsVI } from "../../../shared";
import { HeroesSlotTemplate } from "./default";

class HeroesSlotGuideVI extends HeroesSlotTemplate {
    renderTermAndConditions() {
        return renderTermsAndConditionsVI();
    }
}

export default HeroesSlotGuideVI;
