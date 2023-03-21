import "../assets/errors.scss";
import "../assets/main.scss";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import { Themes } from "../common/constants";
import { v4 as uuidv4 } from "uuid";

const App = (appProps: AppProps) => {
    const { Component, pageProps } = appProps;

    return (
        <ThemeProvider defaultTheme={Themes.light} enableSystem={false} storageKey={`theme-${uuidv4()}`}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default appWithTranslation(App);
