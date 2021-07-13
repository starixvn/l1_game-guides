import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="vi">
                <Head>
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
                    <meta httpEquiv="Pragma" content="no-cache" />
                    <meta httpEquiv="Expires" content="-1" />
                    <meta name="theme-color" content="transparent" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            const ele = document.getElementById('container-guide');
                            let pos = { top: 0, left: 0, x: 0, y: 0 };
                        
                            const mouseDownHandler = function(e) {
                                console.log("mouseDownHandler");
                                pos = {
                                    left: ele.scrollLeft,
                                    top: ele.scrollTop,
                                    // Get the current mouse position
                                    x: e.clientX,
                                    y: e.clientY,
                                };
                        
                                window.body.addEventListener('mousemove', mouseMoveHandler);
                                window.body.addEventListener('mouseup', mouseUpHandler);
                            };
                        
                            const mouseMoveHandler = function(e) {
                                // How far the mouse has been moved
                                const dx = e.clientX - pos.x;
                                const dy = e.clientY - pos.y;
                        
                                // Scroll the element
                                console.log("mouseMoveHandler");
                                ele.scrollTop = pos.top - dy;
                                ele.scrollLeft = pos.left - dx;
                            };
                        
                            const mouseUpHandler = function() {
                                window.body.removeEventListener('mousemove', mouseMoveHandler);
                                window.body.removeEventListener('mouseup', mouseUpHandler);
                            };
                        
                            // Attach the handler
                            ele.addEventListener('mousedown', mouseDownHandler);
                        
                        `,
                        }}
                    />
                </body>
            </Html>
        );
    }
}
