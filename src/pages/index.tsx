import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import GameGuide from "../components/game-guide";
import { environment } from "../common/constants";

export interface UserStakeLevelProps {
    minBet?: number;
    maxBet?: number;
}

export type GameConfigs = {
    maxBetPerChoices: any;
    enableFreeBet: boolean;
    maxBet: number;
    minBet: number;
    odds: any;
};

const CheckIsInteger = (number: string | number | object) => {
    return Number.isInteger(+number) ? +number : 0;
};

const handleUserStakeLevel = (queryParams: object | any, setUserStakeLevel: Function) => {
    if (queryParams?.minBet && queryParams?.maxBet) {
        setUserStakeLevel({ minBet: CheckIsInteger(queryParams.minBet), maxBet: CheckIsInteger(queryParams.maxBet) });
    }
};

const changeFontFamilyFollowLanguage = (locale: string, env: string) => {
    let fontFamily = "Roboto";
    if (env === environment.c) {
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
const Home = () => {
    const { setTheme } = useTheme();
    const [gameId, setGameId] = useState<number>(0);
    const [userStakeLevel, setUserStakeLevel] = useState<UserStakeLevelProps>();
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState<string>("");
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [gameConfigs, setGameConfigs] = useState<GameConfigs>();
    const [dynamic, setDynamic] = useState<boolean>(true);
    const [isGetGameConfigs, setIsGetGameConfigs] = useState<boolean>(true);
    const [isScrollMD5, setIsScrollMD5] = useState<boolean>(false);

    useEffect(() => {
        const CheckIsInteger = (number: string | number | object) => {
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

            changeFontFamilyFollowLanguage(router?.locale ?? "en", queryParams?.f ? environment.c : environment.s);
            setIsLoading(false);
            setGameId(CheckIsInteger(queryParams?.gId));
            setName(queryParams?.name);
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
            {!isGetGameConfigs ? (
                <GameGuide
                    gameId={gameId}
                    locale={router?.locale ?? "en"}
                    userStakeLevel={userStakeLevel}
                    name={name}
                    gameConfigs={gameConfigs}
                    dynamic={dynamic}
                    isScrollMD5={isScrollMD5}
                    isGetGameConfigs={isGetGameConfigs}
                ></GameGuide>
            ) : (
                gameConfigs && (
                    <GameGuide
                        gameId={gameId}
                        locale={router?.locale ?? "en"}
                        userStakeLevel={userStakeLevel}
                        name={name}
                        gameConfigs={gameConfigs}
                        dynamic={dynamic}
                        isScrollMD5={isScrollMD5}
                        isGetGameConfigs={isGetGameConfigs}
                    ></GameGuide>
                )
            )}
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
