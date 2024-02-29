import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { ImgVersionProvider } from "../contexts/img-version";
import Verification from "../components/verification/verification";
import { ENVIRONMENT } from "../common/constants";
export type ProvablyFair = {
    provablyFair: string;
    roundId: number;
    result?: number;
    serverSeed?: string;
    mergeClientSeed?: string;
    mergeSeed?: string;
    finalHash?: string;
};
const ProvablyFair = (props: any) => {
    const { setTheme } = useTheme();
    const [gameId, setGameId] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState<string>("");
    const router = useRouter();
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [provablyFair, setProvablyFair] = useState<ProvablyFair>();
    const [dynamic, setDynamic] = useState<boolean>(true);
    const [displayName, setDisplayName] = useState<string>("");
    const [scrollToId, setScrollToId] = useState<string>("");
    const [environment, setEnvironment] = useState<string>(ENVIRONMENT.sm);

    const getTemplateFollowEnv = () => {
        const props = {
            gameId,
            locale: router?.locale ?? "en",
            provablyFair,
            name,
            dynamic,
            environment,
            displayName,
        };

        return <Verification {...props} />;
    };

    useEffect(() => {
        const checkIsInteger = (number: string | number | object) => {
            return Number.isInteger(+number) ? +number : 0;
        };

        const bindEvent = (element: any, eventName: any, eventHandler: any) => {
            if (element.addEventListener) {
                element.addEventListener(eventName, eventHandler, false);
            } else if (element.attachEvent) {
                element.attachEvent(`on${eventName}`, eventHandler);
            }
        };

        if (router.isReady) {
            const queryParams: object | any = router.query;
            setIsLoading(false);
            setEnvironment("si");
            setGameId(checkIsInteger(queryParams?.gId));
            setName(queryParams?.name);
            setDisplayName(queryParams?.displayName);
            queryParams?.t && setTheme(queryParams.t.toString());
            queryParams?.scrollToId && setScrollToId(queryParams.scrollToId);
        }

        bindEvent(window, "message", function (event: any) {
            event?.data && typeof event?.data === "string" && setProvablyFair(JSON.parse(event.data));
        });
    }, [router.isReady]);
    return (
        <ImgVersionProvider value={{ imgVersion: "122" }}>
            <div ref={wrapperRef} id="container-guide" className="container-guide">
                {getTemplateFollowEnv()}
            </div>
        </ImgVersionProvider>
    );
    //return <div>OK la là la</div>;
};

export default ProvablyFair;
