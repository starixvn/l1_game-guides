import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { language, languageMapper, locales } from "../common/constants";
import GameGuide from "../components/game-guide";

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
    const wrapperRef = useRef<HTMLDivElement>(null);
    let top: number;
    let y: number;

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

    useEffect(() => {
        const mouseDownThumbHandler = function (e) {
            if (wrapperRef.current) {
                top = wrapperRef.current.scrollTop;
            }
            // Get the current mouse position
            y = e.clientY;

            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler);
        };

        const mouseUpHandler = function () {
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseup", mouseUpHandler);
        };

        const mouseMoveHandler = function (e: MouseEvent) {
            // How far the mouse has been moved
            const dy = e.clientY - y;
            if (wrapperRef.current) {
                const scrollRatio = wrapperRef.current.clientHeight / wrapperRef.current.scrollHeight;
                wrapperRef.current.scrollTop = top - dy / scrollRatio;
            }
        };

        document.addEventListener("mousedown", mouseDownThumbHandler);

        return () => {
            document.removeEventListener("mousedown", mouseDownThumbHandler);
        };
    }, [wrapperRef]);

    if (isLoading) {
        return <></>;
    }

    return (
        <div ref={wrapperRef} id="container-guide" className="container-guide">
            <GameGuide gameId={gameId} locale={locale} userStakeLevel={userStakeLevel}></GameGuide>
        </div>
    );
};

export default Home;
