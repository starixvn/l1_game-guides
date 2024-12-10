import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { withTranslation } from "next-i18next";
import { withRouter } from "next/router";
import appSettings from "../../common/app-settings";
import { GAMES_PF, TolgeeConfig } from "../../common/constants";
import { PFProps } from "../type";
import VerifyBase from "../verify-base";
import ChristmasXVerification from "./christmas-x";
import CoinTossVerification from "./coin-toss";
import FootballDiceVerification from "./football-dice";
import FootballCoinTossVerification from "./footballl-coin-toss";
import SpaceFlightVerification from "./space-flight";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: ["en", "vi", "th", "id", "zh_cn", "zh_tw"],
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["Spaceflight", "Common", "FootballDice", "ChristmasX"],
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
            case GAMES_PF.SPACE_FLIGHT:
                return (
                    <TolgeeProvider tolgee={tolgee} fallback="">
                        <SpaceFlightVerification key={`game-${name}`} {...pfProps} />
                    </TolgeeProvider>
                );
            case GAMES_PF.FOOTBALL_DICE:
                return (
                    <TolgeeProvider tolgee={tolgee} fallback="">
                        <FootballDiceVerification key={`game-${name}`} {...pfProps} />
                    </TolgeeProvider>
                );
            case GAMES_PF.COIN_TOSS:
                return (
                    <TolgeeProvider tolgee={tolgee} fallback="">
                        <CoinTossVerification key={`game-${name}`} {...pfProps} />
                    </TolgeeProvider>
                );
            case GAMES_PF.FOOTBALL_COIN_TOSS:
                return (
                    <TolgeeProvider tolgee={tolgee} fallback="">
                        <FootballCoinTossVerification key={`game-${name}`} {...pfProps} />
                    </TolgeeProvider>
                );
            case GAMES_PF.CHRISTMAS_X:
                return (
                    <TolgeeProvider tolgee={tolgee} fallback="">
                        <ChristmasXVerification key={`game-${name}`} {...pfProps} />
                    </TolgeeProvider>
                );
            default:
                return <></>;
        }
    };
}

export default withRouter(withTranslation()(Verification));
