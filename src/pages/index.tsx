import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import GameGuide from "../components/game-guide";
import { locales, Themes } from "../common/constants";
import { GetStaticProps } from "next";
import { ThemeProvider } from "next-themes";
import React, { useState, useEffect } from "react";

const Home = () => {
    const [displayMode, setDisplayMode] = useState<string>(Themes.light);
    const router = useRouter();
    const queryParams = router.query;

    const gameId = queryParams.gameId ? +queryParams.gameId : 0;
    const locale = queryParams.locale ? queryParams.locale.toString() : "vi";
    const minBet = queryParams.minBet ? +queryParams.minBet : 0;
    const maxBet = queryParams.maxBet ? +queryParams.maxBet : 0;

    useEffect(() => {
        setDisplayMode(queryParams.displayMode ? queryParams.displayMode.toString() : Themes.light);
    }, [queryParams]);

    return (
        <ThemeProvider defaultTheme={displayMode}>
            <GameGuide gameId={gameId} locale={locale} userStakeLevel={{ minBet: minBet, maxBet: maxBet }}></GameGuide>
        </ThemeProvider>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale = locales.vi }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common", "messages"])),
    },
});

export default Home;
