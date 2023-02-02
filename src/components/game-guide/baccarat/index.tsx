import { GameGuideBase } from "../type";
import { BaccaratGuideState } from "../baccarat/type";
import { getBaccaratTranslationResource } from "./languages";
import BaseBaccaratGuide from "../base/base-baccarat";
import Styles from "../base/base-baccarat/base-baccarat.module.scss";
import MD5 from "../base/md5";

class BaccaratGuide extends BaseBaccaratGuide<GameGuideBase, BaccaratGuideState> {
    constructor(props: GameGuideBase) {
        super(props);
    }

    getResources = () => {
        return getBaccaratTranslationResource(this.props.locale);
    };

    renderMd5 = () => {
        const { md5 } = this.state.resources;

        return <MD5
            locale={this.props.locale}
            step1ImageUrl={md5.step1ImageUrl}
            step2ImageUrl={md5.step2ImageUrl}
            step3ImageUrl={md5.step3ImageUrl}
            step4ImageUrl={md5.step4ImageUrl}
            note={
                <>
                    {md5.step2Noted1Text} <span className={Styles["black"]}>7♠️</span> <span className={Styles["black"]}>3♠️</span>{" "}
                    <span className={Styles["red"]}>7♦️</span> <span className={Styles["black"]}>K♣️</span>{" "}
                    <span className={Styles["black"]}>2♠️</span> <span className={Styles["red"]}>Q♦️</span> {md5.step2Noted2Text}
                </>
            }
        />;
    };
}

export default BaccaratGuide;
