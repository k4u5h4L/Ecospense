// import { CameraOutline } from "react-ionicons";

const Main = () => {
    return (
        <>
            <div className="section mt-3 text-center">
                <div className="avatar-section">
                    {/* <a href="#">
                        <img
                            src="assets/img/sample/avatar/avatar1.jpg"
                            alt="avatar"
                            className="imaged w100 rounded"
                        />
                        <span className="button">
                            <CameraOutline />
                        </span>
                    </a> */}
                </div>
            </div>

            <div className="listview-title mt-1">Theme</div>
            <ul className="listview image-listview text inset no-line">
                <li>
                    <div className="item">
                        <div className="in">
                            <div>Dark Mode</div>
                            <div className="form-check form-switch ms-2">
                                <input
                                    className="form-check-input dark-mode-switch"
                                    type="checkbox"
                                    id="darkmodeSwitch"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="darkmodeSwitch"
                                ></label>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <div className="listview-title mt-1">Notifications</div>
            <ul className="listview image-listview text inset">
                <li>
                    <div className="item">
                        <div className="in">
                            <div>
                                Payment Alert
                                <div className="text-muted">
                                    Send notification when new payment received
                                </div>
                            </div>
                            <div className="form-check form-switch ms-2">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="SwitchCheckDefault1"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="SwitchCheckDefault1"
                                ></label>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" className="item">
                        <div className="in">
                            <div>Notification Sound</div>
                            <span className="text-primary">Beep</span>
                        </div>
                    </a>
                </li>
            </ul>

            <div className="listview-title mt-1">Profile Settings</div>
            <ul className="listview image-listview text inset">
                <li>
                    <a href="#" className="item">
                        <div className="in">
                            <div>Change Username</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="item">
                        <div className="in">
                            <div>Update E-mail</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="item">
                        <div className="in">
                            <div>Address</div>
                            <span className="text-primary">Edit</span>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="item">
                        <div className="in">
                            <div>Private Profile</div>
                            <div className="form-check form-switch ms-2">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="SwitchCheckDefault2"
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="SwitchCheckDefault2"
                                ></label>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <div className="listview-title mt-1">Security</div>
            <ul className="listview image-listview text mb-2 inset">
                <li>
                    <a href="#" className="item">
                        <div className="in">
                            <div>Update Password</div>
                        </div>
                    </a>
                </li>
                <li>
                    <div className="item">
                        <div className="in">
                            <div>2 Step Verification</div>
                            <div className="form-check form-switch ms-2">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="SwitchCheckDefault3"
                                    defaultChecked
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="SwitchCheckDefault3"
                                ></label>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <a href="#" className="item">
                        <div className="in">
                            <div>Log out all devices</div>
                        </div>
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Main;
