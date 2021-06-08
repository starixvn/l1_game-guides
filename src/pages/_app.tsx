import "../assets/errors.scss";
import "../assets/main.scss";
import { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { Themes } from "../common/constants";

const SabaGameGuideApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider defaultTheme={Themes.light}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default appWithTranslation(SabaGameGuideApp);
