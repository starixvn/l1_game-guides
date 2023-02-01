import { renderTermsAndConditionsVI } from "../../../shared";
import { FortuneCatTemplate } from "./default";

class FortuneCatGuideVI extends FortuneCatTemplate {
    renderTermAndConditions() {
        return renderTermsAndConditionsVI();
    }
}

export default FortuneCatGuideVI;
