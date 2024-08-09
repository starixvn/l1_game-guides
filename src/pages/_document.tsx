import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { buildVersion } from "../common/constants";

export default class CustomDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        const configFileWithVersion = `./c.js?${buildVersion}`;
        return (
            <Html lang="vi">
                <Head>
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                    <meta httpEquiv="Pragma" content="no-cache" />
                    <meta httpEquiv="Expires" content="-1" />
                    <meta name="theme-color" content="transparent" />
                    <script type="text/javascript" src={configFileWithVersion}></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
