import { Markup } from "interweave";
import { ENVIRONMENT } from "../../../../../common/constants";
import MD5 from "../../../base/md5";
import Styles from "../keno-max.module.scss";

export default class KenoMD5 extends MD5 {
    renderStep1() {
        const { environment, md5Key } = this.props;
        const { example } = this.state.translationResource;

        return environment === ENVIRONMENT.sc ? (
            <li>
                {<Markup content={example.step1Text} />}
                <img className="format-img auto-center" src={this.props.step1ImageUrl} alt="md5-string" />
            </li>
        ) : (
            <li>
                {<Markup content={example.step1Text} />}
                <div className={Styles["md5-section"]}>
                    <span className={`${Styles["text"]}`}>
                        <strong>{example.md5Key}:</strong> {md5Key}
                    </span>
                    <div className={Styles["copy-box"]}>
                        <span className={Styles["copy-text"]}>{example.copy}</span>
                    </div>
                </div>
            </li>
        );
    }

    renderStep2() {
        const { example } = this.state.translationResource;
        const { environment, md5Result } = this.props;
        return environment === ENVIRONMENT.sc ? (
            <li>
                {<Markup content={example.step2Text} />}
                <img className="format-img auto-center" src={this.props.step2ImageUrl} alt="md5-result" />
                <div>{this.props.note}</div>
            </li>
        ) : (
            <li>
                {<Markup content={example.step2Text} />}

                <div className={Styles["md5-section"]}>
                    <span className={`${Styles["text"]}`}>
                        <strong>{example.result}:</strong> {md5Result}
                    </span>
                    <div className={Styles["copy-box"]}>
                        <span className={Styles["copy-text"]}>{example.copy}</span>
                    </div>
                </div>
                <div>{this.props.note}</div>
            </li>
        );
    }
}
