import Link from "@/helpers/wrappers/Link/Link";
import { signOut } from "next-auth/react";
import {
    CloseOutline,
    AddOutline,
    ArrowDownOutline,
    ArrowForwardOutline,
    CardOutline,
    PieChartOutline,
    DocumentTextOutline,
    AppsOutline,
    SettingsOutline,
    ChatbubbleOutline,
    LogOutOutline,
} from "react-ionicons";

const Sidebar = () => {
    return (
        <>
            <div
                className="modal fade panelbox panelbox-left"
                id="sidebarPanel"
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            <div className="profileBox pt-2 pb-2">
                                <div className="image-wrapper">
                                    <img
                                        src="assets/img/sample/avatar/avatar1.jpg"
                                        alt="image"
                                        className="imaged w36"
                                    />
                                </div>
                                <div className="in">
                                    <strong>Sebastian Doe</strong>
                                    <div className="text-muted">
                                        user@mail.com
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="btn btn-link btn-icon sidebar-close"
                                    data-bs-dismiss="modal"
                                >
                                    <CloseOutline color={"white"} />
                                </a>
                            </div>
                            <div className="sidebar-balance">
                                <div className="listview-title">Balance</div>
                                <div className="in">
                                    <h1 className="amount">$ 2,562.50</h1>
                                </div>
                            </div>

                            {/* <div className="action-group">
                                <Link href="/" className="action-button">
                                    <div className="in">
                                        <div className="iconbox">
                                            <AddOutline color={"white"} />
                                        </div>
                                        Deposit
                                    </div>
                                </Link>
                                <Link href="/" className="action-button">
                                    <div className="in">
                                        <div className="iconbox">
                                            <ArrowDownOutline color={"white"} />
                                        </div>
                                        Withdraw
                                    </div>
                                </Link>
                                <Link href="/" className="action-button">
                                    <div className="in">
                                        <div className="iconbox">
                                            <ArrowForwardOutline
                                                color={"white"}
                                            />
                                        </div>
                                        Send
                                    </div>
                                </Link>
                                <Link
                                    href="/accounts"
                                    className="action-button"
                                >
                                    <div className="in">
                                        <div className="iconbox">
                                            <CardOutline color={"white"} />
                                        </div>
                                        My Accounts
                                    </div>
                                </Link>
                            </div> */}

                            <div className="listview-title mt-1">Menu</div>
                            <ul className="listview flush transparent no-line image-listview">
                                <li>
                                    <Link href="/visualise" className="item">
                                        <div className="icon-box bg-primary">
                                            <PieChartOutline color={"white"} />
                                        </div>
                                        <div className="in">
                                            Stats
                                            {/* <span className="badge badge-primary">
                                                10
                                            </span> */}
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <a href="app-pages.html" className="item">
                                        <div className="icon-box bg-primary">
                                            <DocumentTextOutline
                                                color={"white"}
                                            />
                                        </div>
                                        <div className="in">Pages</div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="app-components.html"
                                        className="item"
                                    >
                                        <div className="icon-box bg-primary">
                                            <AppsOutline color={"white"} />
                                        </div>
                                        <div className="in">Components</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="app-cards.html" className="item">
                                        <div className="icon-box bg-primary">
                                            <CardOutline color={"white"} />
                                        </div>
                                        <div className="in">My Cards</div>
                                    </a>
                                </li>
                            </ul>

                            <div className="listview-title mt-1">Others</div>
                            <ul className="listview flush transparent no-line image-listview">
                                <li>
                                    <a
                                        href="app-settings.html"
                                        className="item"
                                    >
                                        <div className="icon-box bg-primary">
                                            <SettingsOutline color={"white"} />
                                        </div>
                                        <div className="in">Settings</div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="component-messages.html"
                                        className="item"
                                    >
                                        <div className="icon-box bg-primary">
                                            <ChatbubbleOutline
                                                color={"white"}
                                            />
                                        </div>
                                        <div className="in">Support</div>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => signOut()}
                                        className="item"
                                    >
                                        <div className="icon-box bg-primary">
                                            <LogOutOutline color={"white"} />
                                        </div>
                                        <div className="in">Log out</div>
                                    </a>
                                </li>
                            </ul>

                            {/* <div className="listview-title mt-1">
                                Send Money
                            </div>
                            <ul className="listview image-listview flush transparent no-line">
                                <li>
                                    <a href="#" className="item">
                                        <img
                                            src="assets/img/sample/avatar/avatar2.jpg"
                                            alt="image"
                                            className="image"
                                        />
                                        <div className="in">
                                            <div>Artem Sazonov</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="item">
                                        <img
                                            src="assets/img/sample/avatar/avatar4.jpg"
                                            alt="image"
                                            className="image"
                                        />
                                        <div className="in">
                                            <div>Sophie Asveld</div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="item">
                                        <img
                                            src="assets/img/sample/avatar/avatar3.jpg"
                                            alt="image"
                                            className="image"
                                        />
                                        <div className="in">
                                            <div>Kobus van de Vegte</div>
                                        </div>
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
