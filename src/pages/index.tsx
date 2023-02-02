import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

import { ENVIRONMENT } from "../common/constants";
import GameGuide from "../components/game-guide/game-guide";
import GameGuideMini from "../components/game-guide-mini/game-guide-mini";
import { checkIsInteger } from "../helpers/number-helper";

export interface UserStakeLevelProps {
    minBet?: number;
    maxBet?: number;
}

export type GameConfigs = {
    maxBetPerChoices?: any;
    enableFreeBet?: boolean;
    maxBet?: number;
    minBet?: number;
    odds?: any;
    originalOdds?: any;
};

const handleUserStakeLevel = (queryParams: object | any, setUserStakeLevel: Function) => {
    if (queryParams?.minBet && queryParams?.maxBet) {
        setUserStakeLevel({ minBet: checkIsInteger(queryParams.minBet), maxBet: checkIsInteger(queryParams.maxBet) });
    }
};

const changeFontFamilyFollowLanguage = (locale: string, env: string, gameId: number) => {
    let fontFamily = "SanFranciscoDisplay";
    if (env === ENVIRONMENT.sc) {
        switch (locale) {
            case "th":
                fontFamily = "Noto-Thai";
                break;
            case "zh_cn":
                fontFamily = "Noto-ZH-CN";
                break;
            case "zh_tw":
                fontFamily = "Noto-ZH-TW";
                break;
            default:
                fontFamily = "Noto";
                break;
        }
    }

    document.documentElement.style.fontFamily = fontFamily;
    document.body.style.fontFamily = fontFamily;
};

const handleEnv = (queryParams: object | any) => {
    if (queryParams?.f) {
        return queryParams.f ?? ENVIRONMENT.sc;
    }

    return ENVIRONMENT.sm;
};

const Home = () => {
    const { setTheme } = useTheme();
    const [gameId, setGameId] = useState<number>(0);
    const [userStakeLevel, setUserStakeLevel] = useState<UserStakeLevelProps>({});
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState<string>("");
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [gameConfigs, setGameConfigs] = useState<GameConfigs>();
    const [dynamic, setDynamic] = useState<boolean>(true);
    const [isGetGameConfigs, setIsGetGameConfigs] = useState<boolean>(true);
    const [isScrollMD5, setIsScrollMD5] = useState<boolean>(false);
    const [environment, setEnvironment] = useState<string>(ENVIRONMENT.sm);
    const [isInPromotionTime, setIsInPromotionTime] = useState<boolean>(false);
    const [fractionalOddsFormat, setFractionalOddsFormat] = useState<boolean>(false);

    const getTemplateFollowEnv = () => {
        const props = {
            gameId,
            locale: router?.locale ?? "en",
            userStakeLevel,
            name,
            gameConfigs,
            dynamic,
            isScrollMD5,
            isGetGameConfigs,
            environment,
            isInPromotionTime,
            fractionalOddsFormat,
        };

        if (environment === ENVIRONMENT.si) {
            return <GameGuideMini {...props} />;
        }

        return <GameGuide {...props} />;
    };

    useEffect(() => {
        const checkIsInteger = (number: string | number | object) => {
            return Number.isInteger(+number) ? +number : 0;
        };

        const bindEvent = (element: any, eventName: any, eventHandler: any) => {
            if (element.addEventListener) {
                element.addEventListener(eventName, eventHandler, false);
            } else if (element.attachEvent) {
                element.attachEvent(`on${eventName}`, eventHandler);
            }
        };

        if (router.isReady) {
            const queryParams: object | any = router.query;
            const env = handleEnv(queryParams);
            setIsLoading(false);
            setGameId(checkIsInteger(queryParams?.gId));
            changeFontFamilyFollowLanguage(router?.locale ?? "en", env, gameId);
            setEnvironment(env);
            setName(queryParams?.name);
            setIsInPromotionTime(queryParams?.p === "true");
            setFractionalOddsFormat(queryParams?.fof === "true");
            queryParams?.t && setTheme(queryParams.t.toString());
            handleUserStakeLevel(queryParams, setUserStakeLevel);
            if (queryParams?.dy) {
                +queryParams?.dy === 0 && setDynamic(false);
            }
            queryParams?.c && +queryParams?.c === 0 && setIsGetGameConfigs(false);
            queryParams?.md5 && +queryParams?.md5 === 1 && setIsScrollMD5(true);
        }

        bindEvent(window, "message", function (event: any) {
            event?.data && typeof event?.data === "string" && setGameConfigs(JSON.parse(event.data));
        });
    }, [router.isReady]);

    if (isLoading) {
        return <></>;
    }

    return (
        <div ref={wrapperRef} id="container-guide" className="container-guide">
            {!isGetGameConfigs ? getTemplateFollowEnv() : gameConfigs && getTemplateFollowEnv()}
        </div>
    );
};

export const getStaticProps = async ({ locale = "en" }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "blackjack", "sicbo", "threecards"])),
        },
    };
};

export default Home;
