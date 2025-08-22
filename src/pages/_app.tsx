import "../assets/errors.scss";
import "../assets/main.scss";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import { Themes } from "../common/constants";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useEffect } from "react";

const App = (appProps: AppProps) => {
    const { Component, pageProps } = appProps;
    const router = useRouter();

    useEffect(() => {
        if (router.isReady && router.query.currentTheme) {
            const currentTheme = router.query.currentTheme as string;
            document.documentElement.style.colorScheme = currentTheme;
        }
    }, [router.isReady, router.query.currentTheme]);

    return (
        <ThemeProvider 
            defaultTheme={router.query.currentTheme as string || Themes.light} 
            enableSystem={false} 
            storageKey={`theme-${uuidv4()}`}
        >
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default appWithTranslation(App);
