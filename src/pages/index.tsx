import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import GameGuide from "../components/game-guide";
import { locales, languageMapper, language } from "../common/constants";

export interface UserStakeLevelProps {
    minBet: number;
    maxBet: number;
}

const Home = () => {
    const { setTheme } = useTheme();
    const [gameId, setGameId] = useState<number>(0);
    const [locale, setLocale] = useState<string>(locales.vi);
    const [userStakeLevel, setUserStakeLevel] = useState<UserStakeLevelProps>({ minBet: 0, maxBet: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [containerHeight, setContainerHeight] = useState({ height: 0 });
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const CheckIsInteger = (number: string | number | object) => {
            return Number.isInteger(+number) ? +number : 0;
        };
        if (router.isReady) {
            setContainerHeight({ height: window.innerHeight });
            setIsLoading(false);
            const queryParams: object | any = router.query;
            setGameId(CheckIsInteger(queryParams?.gId));
            if (language.includes(queryParams?.lang.toString())) {
                setLocale(languageMapper[queryParams.lang.toString()]);
            }

            setTheme(queryParams?.t?.toString());
            setUserStakeLevel({ minBet: CheckIsInteger(queryParams?.minBet), maxBet: CheckIsInteger(queryParams?.maxBet) });
        }
    }, [router.isReady]);

    useEffect(() => {
        function handleResize() {
            if (wrapperRef.current) {
                setContainerHeight({ height: window.innerHeight });
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [wrapperRef]);

    if (isLoading) {
        return <></>;
    }

    return (
        <div ref={wrapperRef} id="container-guide">
            <GameGuide gameId={gameId} locale={locale} userStakeLevel={userStakeLevel}></GameGuide>
        </div>
    );
};

export default Home;
