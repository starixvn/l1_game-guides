import { renderTermsAndConditionsVI } from "../../../shared";
import { NightClubTemplate } from "./default";

class NightClubGuideVI extends NightClubTemplate {
    renderTermAndConditions(styles: { readonly [key: string]: string }) {
        return renderTermsAndConditionsVI(styles["guide-item"]);
    }
}

export default NightClubGuideVI;
