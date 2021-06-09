import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import GameGuide from "../components/game-guide";
import { locales, Themes, language, languageMapper } from "../common/constants";
import { GetStaticProps } from "next";

export interface UserStakeLevel {
    minBet: number;
    maxBet: number;
}

const Home = () => {
    const { setTheme } = useTheme();
    const [gameId, setGameId] = useState<number>(0);
    const [localeParam, setLocaleParam] = useState<string>("");
    const [isChangeLocale, setIsChangeLocale] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [userStakeLevel, setUserStakeLevel] = useState<UserStakeLevel>({ minBet: 0, maxBet: 0 });
    const router = useRouter();
    const asPathCurrent = router.asPath;
    const queryParams: any = router.query;

    useEffect(() => {
        setIsChangeLocale(false);
        setUserStakeLevel(queryParams.userStakeLevel && JSON.parse(queryParams.userStakeLevel.toString()));
        setGameId(queryParams?.gameId ? +queryParams.gameId : 0);
        if (queryParams.locale && language.includes(queryParams.locale.toString())) {
            setLocaleParam(queryParams.locale.toString());
            setIsChangeLocale(true);
        }

        if (queryParams.displayMode && Themes.hasOwnProperty(queryParams.displayMode.toString())) {
            setTheme(queryParams.displayMode.toString());
        }

        const timeOut = setTimeout(() => setIsLoading(false), 1000);
        return () => {
            clearTimeout(timeOut);
        };
    }, [queryParams]);

    useEffect(() => {
        if (isChangeLocale) {
            router.push(asPathCurrent, asPathCurrent, { locale: languageMapper[localeParam] });
        }
    }, [localeParam]);

    return !isLoading ? <GameGuide gameId={gameId} userStakeLevel={userStakeLevel}></GameGuide> : <></>;
};

export const getStaticProps: GetStaticProps = async ({ locale = locales.vi }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Home;
