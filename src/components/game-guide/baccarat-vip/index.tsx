import { GameGuideBase } from "../type";
import { getVipBaccaratTranslationResource } from "./languages";
import BaccaratGuide from "../baccarat";

class VipBaccaratGuide extends BaccaratGuide {
    constructor(props: GameGuideBase) {
        super({ ...props, ...{ folderConfigName: "baccarat-vip" } });
    }

    getResources = () => {
        return getVipBaccaratTranslationResource(this.props.locale);
    }
};

export default VipBaccaratGuide;
