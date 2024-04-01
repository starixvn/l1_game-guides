import { FC } from "react";
import { NextBallPFContentsProps } from "./type";
import { useTranslate } from "@tolgee/react";
import { useImgVersionContext } from "../../../contexts/img-version";
import Styles from "../snng-base/pf.module.scss";
import { renderContentPFBase } from "../snng-base";

const NextBallPFGuideContent: FC<NextBallPFContentsProps> = ({ locale }) => {
    const { t } = useTranslate(["BacBall", "Common", "SabaNumber", "Spaceflight", "BandarQiuQiu"]);
    const { imgVersion } = useImgVersionContext();
    const verImg = imgVersion ?? "1";
    const displayName = "Next Ball";

    return (
        <div className={`game-guide ${Styles["pf-guide-content"]}`}>
            {renderContentPFBase(t, displayName ?? "", verImg)}
            {/* {renderBacBallAppliedInGame(t, displayName ?? "", verImg)}
            {renderBacBallVerifyPF(t, locale)} */}
        </div>
    );
};

export default NextBallPFGuideContent;
