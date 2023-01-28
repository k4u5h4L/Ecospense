import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import type { AppProps /*, AppContext */ } from "next/app";
import NextNprogress from "nextjs-progressbar";

import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/graphql/apolloClient";
import Interactivity from "@/containers/Interactivity/Interactivity";
import RouteGuard from "@/components/RouteGuard/RouteGuard";
import AppContext from "context/AppContext";
import PwaIcons from "@/components/MetaTags/PwaIcons";
import NativeAppFeel from "@/components/MetaTags/NativeAppFeel";

import "@/styles/pwa-styles.css";

const variantsPop: Variants = {
    hidden: { opacity: 1, x: "-100%", y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 1, x: "100%", y: 0 },
};

const variantsPush: Variants = {
    hidden: { opacity: 1, x: "100%", y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 1, x: "-100%", y: 0 },
};

export default function App({ Component, pageProps, router }: AppProps) {
    const [variants, setVariants] = useState<Variants>(variantsPush);
    const [value, setValue] = useState<any>({
        balance: 0,
    });
    const client = useApollo();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const loader = document.getElementById("loader");

            if (loader) loader.style.display = "none";
        }
    }, []);

    return (
        <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
            <ApolloProvider client={client}>
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
                        <AnimatePresence
                            exitBeforeEnter={false}
                            initial={false}
                            onExitComplete={() => window.scrollTo(0, 0)}
                        >
                            <motion.main
                                initial="hidden"
                                animate="enter"
                                exit="exit"
                                variants={variants}
                                transition={{ type: "linear" }}
                                key={router.route}
                            >
                                <div
                                    style={{
                                        WebkitTapHighlightColor: "transparent",
                                    }}
                                >
                                    <Component {...pageProps} />
                                </div>
                            </motion.main>
                        </AnimatePresence>
                        <Interactivity />
                    </RouteGuard>
                </AppContext.Provider>
            </ApolloProvider>
        </SessionProvider>
    );
}
