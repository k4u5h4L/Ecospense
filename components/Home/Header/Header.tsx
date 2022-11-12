import { MenuOutline, NotificationsOutline } from "react-ionicons";

const Header = () => {
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
                        src="assets/img/logo.png"
                        alt="logo"
                        className="logo"
                    />
                </div>
                <div className="right">
                    <a href="app-notifications.html" className="headerButton">
                        <NotificationsOutline color={"white"} />
                        <span className="badge badge-danger">4</span>
                    </a>
                    <a href="app-settings.html" className="headerButton">
                        <img
                            src="assets/img/sample/avatar/avatar1.jpg"
                            alt="image"
                            className="imaged w32"
                        />
                        <span className="badge badge-danger">6</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
