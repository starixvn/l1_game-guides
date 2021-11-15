import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { language, languageMapper, locales } from "../common/constants";
import GameGuide from "../components/game-guide";

export interface UserStakeLevelProps {
    minBet?: number;
    maxBet?: number;
}

const Home = () => {
    const { setTheme, theme } = useTheme();
    const [gameId, setGameId] = useState<number>(0);
    const [locale, setLocale] = useState<string>(locales.en);
    const [userStakeLevel, setUserStakeLevel] = useState<UserStakeLevelProps>();
    const [isLoading, setIsLoading] = useState(true);
    const [classContainerOptions, setClassContainerOptions] = useState<string>();
    const [name, setName] = useState<string>("");
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const CheckIsInteger = (number: string | number | object) => {
            return Number.isInteger(+number) ? +number : 0;
        };
        if (router.isReady) {
            setIsLoading(false);
            const queryParams: object | any = router.query;
            setGameId(CheckIsInteger(queryParams?.gId));
            if (language.includes(queryParams?.lang?.toString())) {
                setLocale(languageMapper[queryParams.lang.toString()]);
            }
            setName(queryParams?.name);

            if (queryParams?.t) {
                setTheme(queryParams.t.toString());
            }
            if (queryParams?.minBet && queryParams?.maxBet) {
                setUserStakeLevel({ minBet: CheckIsInteger(queryParams.minBet), maxBet: CheckIsInteger(queryParams.maxBet) });
            }
        }
    }, [router.isReady]);

    if (isLoading) {
        return <></>;
    }

    return (
        <div ref={wrapperRef} id="container-guide" className={`container-guide ${classContainerOptions}`}>
            <GameGuide gameId={gameId} locale={locale} userStakeLevel={userStakeLevel} name={name}></GameGuide>
        </div>
    );
};

export default Home;
