import "../assets/errors.scss";
import "../assets/main.scss";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Themes } from "../common/constants";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider defaultTheme={Themes.light}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
