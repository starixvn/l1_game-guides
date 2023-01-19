
import { GameGuideBase } from "../type";
import { BaccaratGuideState } from "../baccarat/type";
import { getBaccaratTranslationResource } from "./languages";
import BaseBaccaratGuide from "../base/base-baccarat";
import { IMd5BaccaratResources } from "./languages/types";
import Md5Content, { Md5Example } from "../base/md5";
import { IMd5Resources } from "../base/md5/languages/types";
import { Markup } from "interweave";
import Styles from "../base/base-baccarat/base-baccarat.module.scss";

const BaccaratMd5: React.FunctionComponent<{ resources: IMd5BaccaratResources }> = ({ resources }) => (
    <>
        <Md5Content resources={resources.md5} />
        <BaccaratMd5Example resources={resources.md5} />
    </>
);

class BaccaratMd5Example extends Md5Example<{ resources: IMd5Resources }> {
    renderStep2() {
        const { example } = this.props.resources;
        return (<li>
            {<Markup content={example.step2Text} />}
            <img className="format-img auto-center" src={example.step2ImageUrl} alt="md5-result" />
            <div>
                {example.step2Noted1Text} <span className={Styles["black"]}>7♠️</span>{" "}
                <span className={Styles["black"]}>3♠️</span> <span className={Styles["red"]}>7♦️</span>{" "}
                <span className={Styles["black"]}>K♣️</span> <span className={Styles["black"]}>2♠️</span>{" "}
                <span className={Styles["red"]}>Q♦️</span> {example.step2Noted2Text}
            </div>
        </li>);
    }
};

class BaccaratGuide extends BaseBaccaratGuide<GameGuideBase, BaccaratGuideState> {
    constructor(props: GameGuideBase) {
        super({ ...props, ...{ folderConfigName: "baccarat" } });
    }

    getResources = () => {
        return getBaccaratTranslationResource(this.props.locale);
    }

    renderMd5 = () => {
        return <li className="guide-item" id="md5" ><BaccaratMd5 resources={this.state.resources} /></li>;
    };
};

export default BaccaratGuide;
