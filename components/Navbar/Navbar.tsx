import { PRIMARY_COLOUR } from "@/constants/commonConstants";
import Link from "@/helpers/wrappers/Link/Link";
import { isItOniOS } from "@/utils/platformUtils";
import { useRouter } from "next/router";
import {
    PieChartOutline,
    CardOutline,
    SettingsOutline,
    HomeOutline,
    SwapHorizontalOutline,
} from "react-ionicons";

type Route = {
    icon: Function;
    name: string;
    link: string;
};

type PropType = {
    curRoute?: string;
};

const Navbar = ({ curRoute }: PropType) => {
    const router = useRouter();

    if (!curRoute) {
        curRoute = router.pathname;
    }

    const routes: Route[] = [
        {
            icon: SwapHorizontalOutline,
            name: "Convert Currency",
            link: "/convert",
        },
        {
            icon: PieChartOutline,
            name: "Stats",
            link: "/visualise",
        },
        {
            icon: HomeOutline,
            name: "Home",
            link: "/",
        },
        {
            icon: CardOutline,
            name: "My Accounts",
            link: "/accounts",
        },
        {
            icon: SettingsOutline,
            name: "Settings",
            link: "/settings",
        },
    ];

    return (
        <>
            <div
                className="appBottomMenu"
                style={{
                    // position: "sticky",
                    paddingBottom: isItOniOS() ? "10px" : "0px",
                }}
            >
                {routes.map((route, index) => (
                    <Link
                        href={route.link}
                        key={index}
                        className={`item ${
                            // router.pathname == route.link ? "active" : ""
                            curRoute == route.link ? "active" : ""
                        }`}
                    >
                        <div className="col">
                            <route.icon
                                width="24px"
                                height="24px"
                                color={
                                    curRoute == route.link
                                        ? PRIMARY_COLOUR
                                        : "black"
                                }
                            />
                            <strong>{route.name}</strong>
                            {/* <HomeOutline /> */}
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Navbar;
