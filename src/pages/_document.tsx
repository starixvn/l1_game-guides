import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default class extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                    <meta http-equiv="Pragma" content="no-cache" />
                    <meta http-equiv="Expires" content="0" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href={`/_next/static/style.css${uuidv4()}`} />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-MRWMQHR3Z9"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
