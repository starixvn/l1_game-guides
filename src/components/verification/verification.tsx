import { FormatIcu } from "@tolgee/format-icu";
import { BackendFetch, Tolgee, TolgeeProvider } from "@tolgee/react";
import { InContextTools } from "@tolgee/web/tools";
import { withTranslation } from "next-i18next";
import { withRouter } from "next/router";
import appSettings from "../../common/app-settings";
import { AVAILABLE_LANGUAGES, GAMES_PF, TolgeeConfig } from "../../common/constants";
import { isFixedStepsCrashGame } from "../../helpers/game-helper";
import { PFProps } from "../type";
import VerifyBase from "../verify-base";
import ChickenRoadVerification from "./chicken-road";
import ChristmasXVerification from "./christmas-x";
import CoinMiningVerification from "./coin-mining";
import CoinTossVerification from "./coin-toss";
import CrashXVerification from "./crash-x";
import FootballDiceVerification from "./football-dice";
import FootballCoinTossVerification from "./footballl-coin-toss";
import RocketXVerification from "./rocket-x";
import SpaceFlightVerification from "./space-flight";

const tolgee = Tolgee()
    .use(FormatIcu())
    .use(BackendFetch())
    .init({
        availableLanguages: AVAILABLE_LANGUAGES,
        fallbackLanguage: "en",
        defaultLanguage: "en",
        ns: ["Spaceflight", "Common", "FootballDice", "ChristmasX", "CrashX"],
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
        if (!pfProps?.provablyFair?.gameTypeId) {
            return <></>;
        }
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
            case GAMES_PF.COIN_MINING:
                return (
                    <TolgeeProvider tolgee={tolgee} fallback="">
                        <CoinMiningVerification key={`game-${name}`} {...pfProps} />
                    </TolgeeProvider>
                );
            case GAMES_PF.CRASH_X:
                return (
                    <TolgeeProvider tolgee={tolgee} fallback="">
                        <CrashXVerification key={`game-${name}`} {...pfProps} />
                    </TolgeeProvider>
                );
            case GAMES_PF.ROCKET_X:
                return (
                    <TolgeeProvider tolgee={tolgee} fallback="">
                        <RocketXVerification key={`game-${name}`} {...pfProps} />
                    </TolgeeProvider>
                );
            default:
                return this.renderOtherVerification();
        }
    };

    renderOtherVerification = () => {
        const pfProps = this.getPFProps();
        
        const { gameId } = this.props;
        if (isFixedStepsCrashGame(pfProps.provablyFair.gameTypeId)) {
            return (
                <TolgeeProvider tolgee={tolgee} fallback="">
                    <ChickenRoadVerification key={`game-${gameId}`} {...pfProps} />;
                </TolgeeProvider>
            );
        }
        return <></>;
    };
}

export default withRouter(withTranslation()(Verification));
