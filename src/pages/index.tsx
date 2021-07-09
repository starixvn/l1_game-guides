import React, { useState, useEffect } from "react";
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
    const router = useRouter();

    useEffect(() => {
        const CheckIsInteger = (number: string | number | object) => {
            return Number.isInteger(+number) ? +number : 0;
        };
        if (router.isReady) {
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

    if (isLoading) {
        return <></>;
    }

    return <GameGuide gameId={gameId} locale={locale} userStakeLevel={userStakeLevel}></GameGuide>;
};

export default Home;
