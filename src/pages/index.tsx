import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { language, languageMapper, locales } from "../common/constants";
import GameGuide from "../components/game-guide";

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

const Home = () => {
    const { setTheme } = useTheme();
    const [gameId, setGameId] = useState<number>(0);
    const [locale, setLocale] = useState<string>(locales.en);
    const [userStakeLevel, setUserStakeLevel] = useState<UserStakeLevelProps>();
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            const queryParams: object | any = router.query;

            setIsLoading(false);
            setGameId(CheckIsInteger(queryParams?.gId));
            handleLocale(queryParams, setLocale);
            setName(queryParams?.name);
            queryParams?.t && setTheme(queryParams.t.toString());
            handleUserStakeLevel(queryParams, setUserStakeLevel);
        }
    }, [router.isReady]);

    if (isLoading) {
        return <></>;
    }

    return (
        <div id="container-guide" className="container-guide">
            <GameGuide gameId={gameId} locale={locale} userStakeLevel={userStakeLevel} name={name}></GameGuide>
        </div>
    );
};

export default Home;
