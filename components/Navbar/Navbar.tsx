import Link from "@/helpers/wrappers/Link/Link";
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

const Navbar = () => {
    const router = useRouter();

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
            <div className="appBottomMenu" style={{ position: "sticky" }}>
                {routes.map((route, index) => (
                    <Link
                        href={route.link}
                        key={index}
                        className={`item ${
                            router.pathname == route.link ? "active" : ""
                        }`}
                    >
                        <div className="col">
                            <route.icon />
                            <strong>{route.name}</strong>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Navbar;
