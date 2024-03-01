import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { withRouter } from "next/router";
import { withTranslation } from "react-i18next";
import appSettings from "../../common/app-settings";
import { TolgeeConfig } from "../../common/constants";
import { PFProps } from "../type";
import VerifyBase from "../verify-base";
import SpaceFlightVerification from "./space-flight";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh-cn", "zh-tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["Spaceflight", "Common"],
        defaultNs: "Spaceflight",
    });

if (!appSettings.useTolgeeStatic) {
    tolgee.addPlugin(
        InContextTools({
            credentials: {
                apiUrl: TolgeeConfig.url,
                apiKey: TolgeeConfig.key,
                projectId: TolgeeConfig.projectId,
            },
        })
    );
}

class Verification<P extends PFProps> extends VerifyBase<P> {
    componentDidMount(): void {
        tolgee.changeLanguage(this.props.locale);
    }

    renderVerification = () => {
        const { gameId, name } = this.props;
        const pfProps = this.getPFProps();
        switch (gameId) {
            default:
                return (
                    <TolgeeProvider tolgee={tolgee} fallback="">
                        <SpaceFlightVerification key={`game-${name}`} {...pfProps} />
                    </TolgeeProvider>
                );
        }
    };
}

export default withRouter(withTranslation()(Verification));
