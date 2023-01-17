import React from "react";
import Styles from "../../base/base-baccarat/base-baccarat.module.scss";
import { Markup } from "interweave";
import { IMd5BaccaratResources } from "../languages/types";
import Md5Content, { Md5Example } from "../../base/md5/baccarat-md5";
import { IMd5Resources } from "../../base/md5/languages/types";

const BaccaratMd5: React.FunctionComponent<{ resources: IMd5BaccaratResources }> = ({ resources }) => {
    return (
        <>
            <Md5Content resources={resources.md5} />
            <BaccaratMd5Example resources={resources.md5} />
        </>
    );
};

class BaccaratMd5Example extends Md5Example<{ resources: IMd5Resources }> {
    renderStep2() {
        const { example } = this.props.resources;
        return (<li>
            {<Markup content={example.details.step2.text} />}
            <img className="format-img auto-center" src={example.details.step2.imageUrl} alt="md5-result" />
            <div>
                {example.details.step2.noted1} <span className={Styles["black"]}>7♠️</span>{" "}
                <span className={Styles["black"]}>3♠️</span> <span className={Styles["red"]}>7♦️</span>{" "}
                <span className={Styles["black"]}>K♣️</span> <span className={Styles["black"]}>2♠️</span>{" "}
                <span className={Styles["red"]}>Q♦️</span> {example.details.step2.noted2}
            </div>
        </li>);
    }
};

export default BaccaratMd5;
