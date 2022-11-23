import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import type { AppProps /*, AppContext */ } from "next/app";
import NextNprogress from "nextjs-progressbar";

import "@splidejs/react-splide/css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

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
                    <Component {...pageProps} />
                </motion.main>
            </AnimatePresence>
        </SessionProvider>
    );
}
