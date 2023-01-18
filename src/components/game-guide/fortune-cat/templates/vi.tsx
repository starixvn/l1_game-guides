import { renderTermsAndConditionsVI } from "../../../shared";
import { FortuneCatTemplate } from "./default";

class FortuneCatGuideVI extends FortuneCatTemplate {
    renderTermAndConditions(styles: { readonly [key: string]: string }) {
        return renderTermsAndConditionsVI(styles["guide-item"]);
    }
}

export default FortuneCatGuideVI;
