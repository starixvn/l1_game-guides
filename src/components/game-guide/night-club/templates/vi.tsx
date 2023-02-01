import { renderTermsAndConditionsVI } from "../../../shared";
import { NightClubTemplate } from "./default";

class NightClubGuideVI extends NightClubTemplate {
    renderTermAndConditions() {
        return renderTermsAndConditionsVI();
    }
}

export default NightClubGuideVI;
