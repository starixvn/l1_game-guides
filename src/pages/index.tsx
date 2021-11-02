import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import GameGuide from "../components/game-guide";
import { GameConfigs } from "../components/game-guide/type";

export interface UserStakeLevelProps {
    minBet?: number;
    maxBet?: number;
}

const CheckIsInteger = (number: string | number | object) => {
    return Number.isInteger(+number) ? +number : 0;
};

const handleLocale = (queryParams: object | any, setLocale: Function) => {
    if (language.includes(queryParams?.lang?.toString())) {
        setLocale(languageMapper[queryParams.lang.toString()]);
    }
};

const handleUserStakeLevel = (queryParams: object | any, setUserStakeLevel: Function) => {
    if (queryParams?.minBet && queryParams?.maxBet) {
        setUserStakeLevel({ minBet: CheckIsInteger(queryParams.minBet), maxBet: CheckIsInteger(queryParams.maxBet) });
    }
};
export type GameConfigs = {
    maxBetPerChoices: any;
    enableFreeBet: boolean;
    maxBet: number;
    minBet: number;
    odds: any;
};

function bindEvent(element: any, eventName: any, eventHandler: any) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, eventHandler);
    }
}

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

            setIsLoading(false);
            setGameId(CheckIsInteger(queryParams?.gId));
            setName(queryParams?.name);
            queryParams?.t && setTheme(queryParams.t.toString());
            handleUserStakeLevel(queryParams, setUserStakeLevel);
            if (queryParams?.dy) {
                +queryParams?.dy === 0 && setDynamic(false);
            }
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
            {gameConfigs && (
                <GameGuide
                    gameId={gameId}
                    locale={router?.locale ?? "en"}
                    userStakeLevel={userStakeLevel}
                    name={name}
                    gameConfigs={gameConfigs}
                    dynamic={dynamic}
                ></GameGuide>
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
