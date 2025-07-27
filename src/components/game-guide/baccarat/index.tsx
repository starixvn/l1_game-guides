import { GameGuideBase } from "../type";
import { BaccaratGuideState } from "../baccarat/type";
import { getBaccaratTranslationResource } from "./languages";
import BaseBaccaratGuide from "../base/base-baccarat";
import Styles from "../base/base-baccarat/base-baccarat.module.scss";
import MD5 from "../base/md5";
import { TolgeeProvider, useTolgee } from "@tolgee/react";
import initTolgee from "../../../helpers/tolgee-helper";
import { getBaccaratTolgeeTranslationResource } from "./languages/tolgee";
import { handleLanguage } from "../../../helpers/game-helper";
import { isShowedMD5 } from "../../shared";
import ScrollToMD5 from "../../shared/md5-count-down-timer";
import { useEffect, useState } from "react";

const tolgee = initTolgee(["BaseBaccarat", "Baccarat", "Common"]);

// Functional component that uses Tolgee hooks
const BaccaratGuideWithTolgee = (props: GameGuideBase) => {
    const { t } = useTolgee();
    const [resources, setResources] = useState<any>(null);
    const [configs, setConfigs] = useState<any>(null);
    const [maxBetFollowChoice, setMaxBetFollowChoice] = useState<any>(null);

    const isTolgeeSupportLanguage = () => {
        const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];
        return !excludedLanguages.includes(props.locale || "en");
    };

    useEffect(() => {
        if (isTolgeeSupportLanguage()) {
            handleLanguage(tolgee, props.locale || "en", () => {
                const languageTag = props.locale || "en";
                const tolgeeResources = getBaccaratTolgeeTranslationResource(tolgee, languageTag);
                setResources(tolgeeResources);
            });
        } else {
            const staticResources = getBaccaratTranslationResource(props.locale);
            setResources(staticResources);
        }
    }, [props.locale]);

    useEffect(() => {
        // Initialize configs
        const { userStakeLevel, gameConfigs, dynamic, isGetGameConfigs, folderConfigName, project } = props;

        import(`/src/components/game-guide/${folderConfigName}/configs/${project}/game-configs.ts`).then((mod: any) => {
            let configsData = mod.default;
            if (configsData) {
                if (isGetGameConfigs) {
                    if (dynamic) {
                        configsData = gameConfigs;
                    } else {
                        gameConfigs.odds = configsData?.odds;
                        configsData = gameConfigs;
                    }
                }
                setConfigs(configsData);
            }
        });
    }, [props]);

    if (!resources || !configs) {
        return <></>;
    }

    // Create a class component that extends BaseBaccaratGuide
    class BaccaratGuideClass extends BaseBaccaratGuide<GameGuideBase, BaccaratGuideState> {
        private componentProps: GameGuideBase;
        private componentResources: any;

        constructor(props: GameGuideBase) {
            super(props);
            this.componentProps = props;
            this.componentResources = resources;
            this.state = {
                resources,
                configs,
                maxBetFollowChoice,
            } as BaccaratGuideState;
        }

        getResources = () => this.componentResources;

        renderMd5 = () => {
            const { md5 } = this.componentResources;

            return (
                <MD5
                    locale={this.componentProps.locale}
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

            this.componentProps.isScrollMD5 && ScrollToMD5();
            
            return (
                <ul className="game-guide">
                    {this.renderIntroduction()}
                    {this.renderGameRule()}
                    {this.renderPointCalculationRules()}
                    {this.renderThirdCardRule()}
                    {this.renderPayout()}
                    {isShowedMD5(this.componentProps.environment, this.componentProps.orientation) && this.renderMd5()}
                    {this.renderTermsAndConditions()}
                </ul>
            );
        }
    }

    return <BaccaratGuideClass {...props} />;
};

// Main component that handles the hybrid approach
class BaccaratGuide extends BaseBaccaratGuide<GameGuideBase, BaccaratGuideState> {
    
    constructor(props: GameGuideBase) {
        super(props);
    }

    isTolgeeSupportLanguage = () => {
        const excludedLanguages = ["th", "id", "vi", "zh_cn", "zh_tw"];
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
                return getBaccaratTolgeeTranslationResource(tolgee, languageTag);
            } catch (error) {
                console.warn("Tolgee translation failed, falling back to static translations:", error);
                return getBaccaratTranslationResource(this.props.locale);
            }
        }
        return getBaccaratTranslationResource(this.props.locale);
    };

    renderMd5 = () => {
        const { md5 } = this.state.resources;

        return (
            <MD5
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
                <BaccaratGuideWithTolgee {...this.props} />
            </TolgeeProvider>
        );
    }
}

export default BaccaratGuide;
