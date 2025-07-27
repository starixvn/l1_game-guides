import { GameGuideBase } from "../type";
import { getVipBaccaratTranslationResource } from "./languages";
import { getVipBaccaratTolgeeTranslationResource } from "./languages/tolgee";
import BaccaratGuide from "../baccarat";
import { TolgeeInstance, TolgeeProvider, useTolgee } from "@tolgee/react";
import initTolgee from "../../../helpers/tolgee-helper";
import { useEffect, useState } from "react";
import { handleLanguage } from "../../../helpers/game-helper";
import { isShowedMD5 } from "../../shared";
import ScrollToMD5 from "../../shared/md5-count-down-timer";

const tolgee = initTolgee(["BaseBaccarat", "BaccaratVip", "Common"]);

// Functional component that uses Tolgee hooks for VIP baccarat
const VipBaccaratGuideWithTolgee = (props: GameGuideBase) => {
    const { t } = useTolgee();
    const [resources, setResources] = useState<any>(null);

    const isTolgeeSupportLanguage = () => {
        const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];
        return !excludedLanguages.includes(props.locale || "en");
    };

    useEffect(() => {
        if (isTolgeeSupportLanguage()) {
            handleLanguage(tolgee, props.locale || "en", () => {
                const languageTag = props.locale || "en";
                const tolgeeResources = getVipBaccaratTolgeeTranslationResource(tolgee, languageTag);
                setResources(tolgeeResources);
            });
        } else {
            const staticResources = getVipBaccaratTranslationResource(props.locale);
            setResources(staticResources);
        }
    }, [props.locale]);

    if (!resources) {
        return <></>;
    }

    // Create a class component that extends BaccaratGuide
    class VipBaccaratGuideClass extends BaccaratGuide {
        constructor(props: GameGuideBase) {
            super(props);
        }

        getResources = () => resources;
    }

    return <VipBaccaratGuideClass {...props} />;
};

class VipBaccaratGuide extends BaccaratGuide {
    constructor(props: GameGuideBase) {
        super(props);
    }

    isTolgeeSupportLanguage = () => {
        const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];
        return !excludedLanguages.includes(this.props.locale || "en");
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

    render() {
        if (!this.state?.resources || !this.state.configs) {
            return <></>;
        }

        this.props.isScrollMD5 && ScrollToMD5();
        
        // For non-Tolgee languages, render normally
        if (!this.isTolgeeSupportLanguage()) {
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

        // Wrap the content with TolgeeProvider for Tolgee-supported languages
        return (
            <TolgeeProvider tolgee={tolgee} fallback="">
                <VipBaccaratGuideWithTolgee {...this.props} />
            </TolgeeProvider>
        );
    }
}

export default VipBaccaratGuide;
