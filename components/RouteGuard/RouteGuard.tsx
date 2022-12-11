import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { PUBLIC_PATHS } from "@/constants/commonConstants";

export default function RouteGuard({ children }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const { data: session, status } = useSession();

    useEffect(() => {
        // on initial load - run auth check
        if (status != "loading") {
            authCheck(router.asPath);

            // on route change start - hide page content by setting authorized to false
            const hideContent = () => setAuthorized(false);
            router.events.on("routeChangeStart", hideContent);

            // on route change complete - run auth check
            router.events.on("routeChangeComplete", authCheck);

            // unsubscribe from events in useEffect return function
            return () => {
                router.events.off("routeChangeStart", hideContent);
                router.events.off("routeChangeComplete", authCheck);
            };
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in
        const path = url.split("?")[0];
        if (status != "authenticated" && !PUBLIC_PATHS.includes(path)) {
            setAuthorized(false);
            router.replace({
                pathname: "/splash",
                query: { returnUrl: router.asPath },
            });
        } else {
            setAuthorized(true);
        }
    }

    return authorized && children;
}
