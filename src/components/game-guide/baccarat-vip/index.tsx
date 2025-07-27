import { GameGuideBase } from "../type";
import { BaccaratGuideState } from "../baccarat/type";
import { getVipBaccaratTranslationResource } from "./languages";
import { getVipBaccaratTolgeeTranslationResource } from "./languages/tolgee";
import BaseBaccaratGuide from "../base/base-baccarat";
import { TolgeeProvider } from "@tolgee/react";
import initTolgee from "../../../helpers/tolgee-helper";
import { isShowedMD5 } from "../../shared";
import ScrollToMD5 from "../../shared/md5-count-down-timer";
import MD5 from "../base/md5";
import { generateMD5TranslationResource } from "../base/md5/languages/tolgee";
import { getBaseMD5TranslationResource } from "../base/md5/languages";

const tolgee = initTolgee(["BaseBaccarat", "BaccaratVip", "Common"]);

const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];

// Main class component that extends BaseBaccaratGuide
class VipBaccaratGuide extends BaseBaccaratGuide<GameGuideBase, BaccaratGuideState> {
    constructor(props: GameGuideBase) {
        super(props);
    }

    isTolgeeSupportLanguage = () => {
        return !excludedLanguages.includes(this.props.locale || "en");
    }

    componentDidMount() {
        // Set the language immediately for Tolgee
        if (this.isTolgeeSupportLanguage()) {
            tolgee.changeLanguage(this.props.locale || "en");
        }
        
        // Initialize resources properly
        this.setState({ resources: this.getResources() });
    }

    componentDidUpdate(prevProps: GameGuideBase) {
        if (prevProps.locale !== this.props.locale) {
            if (this.isTolgeeSupportLanguage()) {
                tolgee.changeLanguage(this.props.locale || "en");
            }
            this.setState({ resources: this.getResources() });
        }
    }

    getResources = () => {
        if (this.isTolgeeSupportLanguage()) {
            const languageTag = this.props.locale || "en";
            try {
                return getVipBaccaratTolgeeTranslationResource(tolgee, languageTag);
            } catch (error) {
                console.warn("Tolgee translation failed, falling back to static translations:", error);
                return getVipBaccaratTranslationResource(this.props.locale);
            }
        }
        return getVipBaccaratTranslationResource(this.props.locale);
    }

    renderMd5 = () => {
        const { md5 } = this.state.resources;

        return (
            <MD5
                resources={this.isTolgeeSupportLanguage() ? generateMD5TranslationResource(tolgee) : getBaseMD5TranslationResource(this.props.locale)}
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
const VipBaccaratGuideWrapper = (props: GameGuideBase) => {
    const isTolgeeSupportLanguage = () => {
        return !excludedLanguages.includes(props.locale || "en");
    };

    // For non-Tolgee languages, render directly
    if (!isTolgeeSupportLanguage()) {
        return <VipBaccaratGuide {...props} />;
    }

    // For Tolgee-supported languages, wrap with TolgeeProvider
    return (
        <TolgeeProvider tolgee={tolgee} fallback="">
            <VipBaccaratGuide {...props} />
        </TolgeeProvider>
    );
};

export default VipBaccaratGuideWrapper;
