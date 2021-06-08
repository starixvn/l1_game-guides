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
    const [locale, setLocale] = useState<string>("vi-VN");
    const [userStakeLevel, setUserStakeLevel] = useState<UserStakeLevel>({ minBet: 0, maxBet: 0 });
    const router = useRouter();
    const queryParams: any = router.query;
    const asPathCurrent = router.asPath;
    useEffect(() => {
        setUserStakeLevel(queryParams.userStakeLevel && JSON.parse(queryParams.userStakeLevel.toString()));
        setGameId(queryParams?.gameId ? +queryParams.gameId : 0);
        if (queryParams.locale && language.includes(queryParams.locale.toString())) {
            setLocale(queryParams.locale.toString());
        }

        if (queryParams.displayMode && Themes.hasOwnProperty(queryParams.displayMode.toString())) {
            setTheme(queryParams.displayMode.toString());
        }
    }, [queryParams]);

    useEffect(() => {
        router.push(asPathCurrent, asPathCurrent, { locale: languageMapper[locale] });
    }, [locale]);

    return <GameGuide gameId={gameId} locale={languageMapper[locale]} userStakeLevel={userStakeLevel}></GameGuide>;
};

export const getStaticProps: GetStaticProps = async ({ locale = locales.vi }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Home;
