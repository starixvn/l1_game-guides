import { TolgeeProvider } from "@tolgee/react";
import initTolgee from "../../../helpers/tolgee-helper";
import { isShowedMD5 } from "../../shared";
import ScrollToMD5 from "../../shared/md5-count-down-timer";
import { BaccaratGuideState } from "../baccarat/type";
import BaseBaccaratGuide from "../base/base-baccarat";
import MD5 from "../base/md5";
import { GameGuideBase } from "../type";
import { getBaccaratTranslationResource } from "./languages";
import { getBaccaratTolgeeTranslationResource } from "./languages/tolgee";
import { generateMD5TranslationResource } from "../base/md5/languages/tolgee";
import { getBaseMD5TranslationResource } from "../base/md5/languages";

const tolgee = initTolgee(["BaseBaccarat", "Baccarat", "Common"]);

const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];

// Main class component that extends BaseBaccaratGuide
class BaccaratGuide extends BaseBaccaratGuide<GameGuideBase, BaccaratGuideState> {
    constructor(props: GameGuideBase) {
        super(props);
    }

    isTolgeeSupportLanguage = () => {
        return !excludedLanguages.includes(this.props.locale || "en");
    };

    async componentDidMount() {
        // Set the language immediately for Tolgee
        if (this.isTolgeeSupportLanguage()) {
            await tolgee.changeLanguage(this.props.locale || "en");
        }

        // Initialize resources properly
        this.setState({
            resources: this.getResources(),
            md5Resources: this.getMD5Resources(),
        });
    }

    async componentDidUpdate(prevProps: GameGuideBase) {
        if (prevProps.locale !== this.props.locale) {
            if (this.isTolgeeSupportLanguage()) {
                await tolgee.changeLanguage(this.props.locale || "en");
            }
            this.setState({
                resources: this.getResources(),
                md5Resources: this.getMD5Resources(),
            });
        }
    }

    getResources = () => {
        if (this.isTolgeeSupportLanguage()) {
            const languageTag = this.props.locale || "en";
            try {
                return getBaccaratTolgeeTranslationResource(tolgee, languageTag);
            } catch (error) {
                console.warn("Tolgee translation failed, falling back to static translations:", error);
                return getBaccaratTranslationResource(this.props.locale);
            }
        }
        return getBaccaratTranslationResource(this.props.locale);
    };

    getMD5Resources = () => {
        if (this.isTolgeeSupportLanguage()) {
            try {
                return generateMD5TranslationResource(tolgee);
            } catch (error) {
                console.warn("Tolgee MD5 translation failed, falling back to static translations:", error);
                return getBaseMD5TranslationResource(this.props.locale);
            }
        }
        return getBaseMD5TranslationResource(this.props.locale);
    };

    renderMd5 = () => {
        const { md5 } = this.state.resources;

        return (
            <MD5
                resources={this.state.md5Resources}
                locale={this.props.locale}
                step1ImageUrl={md5.step1ImageUrl}
                step2ImageUrl={md5.step2ImageUrl}
                step3ImageUrl={md5.step3ImageUrl}
                step4ImageUrl={md5.step4ImageUrl}
                note={
                    <>
                        {md5.step2Noted1Text} 7♠️ 3♠️ 7♦️ K♣️ 2♠️ Q♦️ {md5.step2Noted2Text}
                    </>
                }
            />
        );
    };

    render() {
        if (!this.state?.resources || !this.state.configs) {
            return <></>;
        }

        this.props.isScrollMD5 && ScrollToMD5();

        return (
            <ul className="game-guide">
                {this.renderIntroduction()}
                {this.renderGameRule()}
                {this.renderPointCalculationRules()}
                {this.renderThirdCardRule()}
                {this.renderPayout()}
                {isShowedMD5(this.props.environment, this.props.orientation) && this.renderMd5()}
                {this.renderTermsAndConditions()}
            </ul>
        );
    }
}

// Simple wrapper component that provides Tolgee context when needed
const BaccaratGuideWrapper = (props: GameGuideBase) => {
    const isTolgeeSupportLanguage = () => {
        return !excludedLanguages.includes(props.locale || "en");
    };

    // For non-Tolgee languages, render directly
    if (!isTolgeeSupportLanguage()) {
        return <BaccaratGuide {...props} />;
    }

    // For Tolgee-supported languages, wrap with TolgeeProvider
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <BaccaratGuide {...props} />
        </TolgeeProvider>
    );
};

export default BaccaratGuideWrapper;
