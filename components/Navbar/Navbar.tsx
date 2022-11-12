import {
    PieChartOutline,
    DocumentTextOutline,
    AppsOutline,
    CardOutline,
    SettingsOutline,
} from "react-ionicons";

const Navbar = () => {
    return (
        <>
            <div className="appBottomMenu">
                <a href="index.html" className="item active">
                    <div className="col">
                        <PieChartOutline />
                        <strong>Overview</strong>
                    </div>
                </a>
                <a href="app-pages.html" className="item">
                    <div className="col">
                        <DocumentTextOutline />
                        <strong>Pages</strong>
                    </div>
                </a>
                <a href="app-components.html" className="item">
                    <div className="col">
                        <AppsOutline />
                        <strong>Components</strong>
                    </div>
                </a>
                <a href="app-cards.html" className="item">
                    <div className="col">
                        <CardOutline />
                        <strong>My Cards</strong>
                    </div>
                </a>
                <a href="app-settings.html" className="item">
                    <div className="col">
                        <SettingsOutline />
                        <strong>Settings</strong>
                    </div>
                </a>
            </div>
        </>
    );
};

export default Navbar;
