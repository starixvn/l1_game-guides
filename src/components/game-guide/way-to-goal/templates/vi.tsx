import { baseTermAndConditionVi } from "../../base/terms-and-conditions/languages/vi";
import BaseTermsAndConditions from "../../base/terms-and-conditions/terms-and-conditions";
import { WayToGoalTemplate } from "./default";

class WayToGoalGuideVI extends WayToGoalTemplate {
    renderTermAndConditions(styles: { readonly [key: string]: string }) {
        return <li className="guide-item"><BaseTermsAndConditions resources={baseTermAndConditionVi} /></li>
    }
}

export default WayToGoalGuideVI;
