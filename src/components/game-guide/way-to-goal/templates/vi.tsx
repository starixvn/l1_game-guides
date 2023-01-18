import { renderTermsAndConditionsVI } from "../../../shared";
import { WayToGoalTemplate } from "./default";

class WayToGoalGuideVI extends WayToGoalTemplate {
    renderTermAndConditions(styles: { readonly [key: string]: string }) {
        return renderTermsAndConditionsVI(styles["guide-item"]);
    }
}

export default WayToGoalGuideVI;
