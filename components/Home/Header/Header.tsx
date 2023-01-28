import { GET_PROFILE } from "@/constants/gqlQueries";
import Link from "@/helpers/wrappers/Link/Link";
import { gql, useQuery } from "@apollo/client";
import {
    MenuOutline,
    NotificationsOutline,
    PersonCircleOutline,
} from "react-ionicons";

const Header = () => {
    const { loading, error, data } = useQuery(GET_PROFILE);

    return (
        <>
            <div className="appHeader bg-primary text-light">
                <div className="left">
                    <a
                        href="#"
                        className="headerButton"
                        data-bs-toggle="modal"
                        data-bs-target="#sidebarPanel"
                    >
                        <MenuOutline color={"white"} />
                    </a>
                </div>
                <div className="pageTitle">
                    <img
                        src="/assets/img/logo.png"
                        alt="logo"
                        className="logo"
                        height={42}
                    />
                </div>
                <div className="right">
                    {/* <a href="app-notifications.html" className="headerButton">
                        <NotificationsOutline color={"white"} />
                        <span className="badge badge-danger">4</span>
                    </a> */}
                    <Link href="/settings" className="headerButton">
                        {loading ? (
                            <PersonCircleOutline color={"white"} />
                        ) : (
                            <img
                                src={data.getProfile.pic}
                                alt="image"
                                className="imaged w32"
                            />
                        )}
                        {/* <span className="badge badge-danger">6</span> */}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
