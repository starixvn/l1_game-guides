import { renderTermsAndConditionsVI } from "../../../shared";
import { WayToGoalTemplate } from "./default";

class WayToGoalGuideVI extends WayToGoalTemplate {
    renderTermAndConditions() {
        return renderTermsAndConditionsVI();
    }
}

export default WayToGoalGuideVI;
