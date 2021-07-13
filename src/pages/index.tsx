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
    let y: number;
    let height: number;

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
        const mouseDownHandler = function (e: MouseEvent) {
            if (wrapperRef.current) {
                height = Math.abs(wrapperRef.current.offsetHeight - window.innerHeight);
            }

            y = e.clientY;
            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler);
        };

        const mouseMoveHandler = function (e: MouseEvent) {
            // How far the mouse has been moved

            const dy = e.clientY - y;

            // Set the position of element
            if (wrapperRef.current) {
                let calculatedTop = wrapperRef.current.offsetTop + dy;

                if (calculatedTop > 0) {
                    calculatedTop = 0;
                }

                if (calculatedTop < -height) {
                    calculatedTop = -height;
                }
                wrapperRef.current.style.top = calculatedTop + "px";
            }

            // Reassign the position of mouse
            y = e.clientY;
        };

        const mouseUpHandler = function () {
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseup", mouseUpHandler);
        };

        document.addEventListener("mousedown", mouseDownHandler);

        return () => {
            if (wrapperRef.current) {
                wrapperRef.current.removeEventListener("mousedown", mouseDownHandler);
            }
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
