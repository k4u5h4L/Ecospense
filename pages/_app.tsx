import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import type { AppProps /*, AppContext */ } from "next/app";
import NextNprogress from "nextjs-progressbar";

import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/graphql/apolloClient";
import Interactivity from "@/containers/Interactivity/Interactivity";
import RouteGuard from "@/components/RouteGuard/RouteGuard";
import AppContext from "context/AppContext";
import PwaIcons from "@/components/MetaTags/PwaIcons";
import NativeAppFeel from "@/components/MetaTags/NativeAppFeel";

// import "@/styles/pwa-styles.css";
// import PageAnimation from "@/containers/PageAnimation/PageAnimation";
import { usePreserveScroll } from "@/hooks/index";

export default function App({ Component, pageProps, router }: AppProps) {
    const [value, setValue] = useState<any>({
        balance: 0,
    });
    const client = useApollo();
    usePreserveScroll();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const loader = document.getElementById("loader");

            if (loader) loader.style.display = "none";
        }
    }, []);

    return (
        <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
            <AppContext.Provider value={{ value, setValue }}>
                <Head>
                    <NativeAppFeel />
                    <PwaIcons />
                    <title>Ecospense</title>
                    <link rel="manifest" href="/site.webmanifest" />
                </Head>

                <NextNprogress
                    color="#ededf5"
                    startPosition={0.3}
                    stopDelayMs={200}
                    height={3}
                    options={{ showSpinner: false }}
                />
                <RouteGuard>
                    <ApolloProvider client={client}>
                        {/* <PageAnimation router={router}> */}
                        <div
                            style={{
                                WebkitTapHighlightColor: "transparent",
                            }}
                        >
                            <Component {...pageProps} />
                        </div>
                        {/* </PageAnimation> */}
                        <Interactivity />
                    </ApolloProvider>
                </RouteGuard>
            </AppContext.Provider>
        </SessionProvider>
    );
}
