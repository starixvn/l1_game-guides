import React from "react";
import { PFProps } from "../type";
import SpaceFlightVerification from "./space-flight";
import { withRouter } from "next/router";
import { withTranslation } from "react-i18next";
import VerifyBase from "../verify-base";

class Verification<P extends PFProps> extends VerifyBase<P> {

    renderVerification = () => {
        const { gameId, name } = this.props;
        const pfProps = this.getPFProps();
        switch (gameId) {
            default:
                return <SpaceFlightVerification key={`game-${name}`} {...pfProps} />;
        }
    };
}

export default withRouter(withTranslation()(Verification));
