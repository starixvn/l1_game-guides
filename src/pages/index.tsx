import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import GameGuide from "../components/game-guide";
import { locales, Themes } from "../common/constants";
import { GetStaticProps } from "next";

export interface UserStakeLevelProps {
    minBet: number;
    maxBet: number;
}

const Home = () => {
    const { setTheme } = useTheme();
    const [gameId, setGameId] = useState<number>(0);
    const [userStakeLevel, setUserStakeLevel] = useState<UserStakeLevelProps>({ minBet: 0, maxBet: 0 });
    const router = useRouter();

    useEffect(() => {
        const CheckIsInteger = (number: string | number | object) => {
            return Number.isInteger(+number) ? +number : 0;
        };
        if (router.isReady) {
            const queryParams: object | any = router.query;
            setGameId(CheckIsInteger(queryParams?.gId));
            setTheme(queryParams?.t?.toString());
            setUserStakeLevel({ minBet: CheckIsInteger(queryParams?.minBet), maxBet: CheckIsInteger(queryParams?.maxBet) });
        }
    }, [router.isReady]);

    return <GameGuide gameId={gameId} userStakeLevel={userStakeLevel}></GameGuide>;
};

export const getStaticProps: GetStaticProps = async ({ locale = locales.vi }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
});

export default Home;
