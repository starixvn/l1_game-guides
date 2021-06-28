import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import GameGuide from "../components/game-guide";
import { locales, Themes, language, languageMapper } from "../common/constants";
import { GetStaticProps } from "next";

export interface UserStakeLevelProps {
    minBet: number;
    maxBet: number;
}

const CheckIsInteger = (number: string | number | object) => {
    return Number.isInteger(+number) ? +number : 0;
};

const Home = () => {
    const { setTheme } = useTheme();
    const [gameId, setGameId] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [userStakeLevel, setUserStakeLevel] = useState<UserStakeLevelProps>({ minBet: 0, maxBet: 0 });
    const router = useRouter();

    const handleChangeLocale = async (locate: string, currentURL: string) => {
        return router.push(currentURL, currentURL, { locale: languageMapper[locate] });
    };

    const handleStakeLevel = (queryParams: object | any) => {
        if (queryParams?.minBet || queryParams?.maxBet) {
            setUserStakeLevel({ minBet: CheckIsInteger(queryParams?.minBet), maxBet: CheckIsInteger(queryParams?.maxBet) });
        }
    };

    useEffect(() => {
        if (router.isReady) {
            const currentURL = router.asPath;
            const queryParams: object | any = router.query;

            setGameId(CheckIsInteger(queryParams?.gId));

            if (Themes.hasOwnProperty(queryParams?.t?.toString())) {
                setTheme(queryParams.t.toString());
            }

            if (language.includes(queryParams?.lang?.toString())) {
                handleChangeLocale(queryParams.lang.toString(), currentURL).then(() => {
                    setIsLoading(false);
                });
            }
            handleStakeLevel(queryParams);
        }
    }, [router.isReady]);

    useEffect(() => {
        return () => {
            setIsLoading(false);
            setUserStakeLevel({ minBet: 0, maxBet: 0 });
            setGameId(0);
        };
    }, []);

    return !isLoading && <GameGuide gameId={gameId} userStakeLevel={userStakeLevel}></GameGuide>;
};

export const getStaticProps: GetStaticProps = async ({ locale = locales.vi }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Home;
