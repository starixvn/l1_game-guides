import { FC, useEffect } from "react";
import initTolgee from "../shared/tolgee-helper";
import { TolgeeProvider } from "@tolgee/react";
import BacBallPFGuideContent from "./content";

const tolgee = initTolgee(["BacBall", "SabaNumber"]);

const BacBallPFGuide: FC = () => {
    useEffect(() => {
        if (window?.location?.pathname) {
            tolgee.changeLanguage(window?.location?.pathname.replace("/", ""));
        }
    }, []);

    return (
        <TolgeeProvider tolgee={tolgee}>
            <BacBallPFGuideContent />
        </TolgeeProvider>
    );
};

export default BacBallPFGuide;
