import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import type { AppProps /*, AppContext */ } from "next/app";
import NextNprogress from "nextjs-progressbar";

import "@splidejs/react-splide/css";
import { useEffect } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
    useEffect(() => {
        if (typeof document !== "undefined") {
            const theme = localStorage.getItem("theme");

            document.body.className = theme ? "dark-mode" : "";
        }
    }, []);

    return (
        <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="description"
                    content="An expense tracking application"
                />
                <meta name="keywords" content="expense, finance, budget" />
                <meta name="theme-color" content="#0d6efd" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="viewport"
                    content="initial-scale=1, viewport-fit=cover, user-scalable=no"
                />
                <title>Ecospense</title>
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <NextNprogress
                color="#0d6efd"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                options={{ showSpinner: false }}
            />
            <Component {...pageProps} />
        </SessionProvider>
    );
}
