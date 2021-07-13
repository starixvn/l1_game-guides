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
                            const next = document.getElementById('__next')
                            let ele = document.getElementById('container-guide');
                            let y = 0;
                            let height = 0;
                            const mouseDownHandler = function(e) {
                                ele = document.getElementById('container-guide');
                                height = Math.abs(ele.offsetHeight - window.innerHeight);
                                y = e.clientY;
                                document.addEventListener('mousemove', mouseMoveHandler);
                                document.addEventListener('mouseup', mouseUpHandler);
                            };
                        
                            const mouseMoveHandler = function(e) {
                                // How far the mouse has been moved
                                const dy = e.clientY - y;
                            
                                // Set the position of element
                                let calculatedTop = (ele.offsetTop + dy);
                                if(calculatedTop > 0){
                                    calculatedTop = 0;
                                }
                                if(calculatedTop < -height){
                                    calculatedTop = -height;
                                }
                                ele.style.top = calculatedTop + "px"; 
                            
                                // Reassign the position of mouse
                                y = e.clientY;
                            };
                        
                            const mouseUpHandler = function() {
                                document.removeEventListener('mousemove', mouseMoveHandler);
                                document.removeEventListener('mouseup', mouseUpHandler);
                            };
                        
                            // Attach the handler
                            next.addEventListener('mousedown', mouseDownHandler);
                        
                        `,
                        }}
                    />
                </body>
            </Html>
        );
    }
}
