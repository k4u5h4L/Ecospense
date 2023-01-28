// import { CameraOutline } from "react-ionicons";

import ImageDialog from "@/components/Dialogs/ImageDialog/ImageDialog";
import ImageNotification from "@/components/Notifications/ImageNotification";
import Toast from "@/components/Toast/Toast";
import { GET_PROFILE } from "@/constants/gqlQueries";
import { getNewAvatar } from "@/utils/getNewAvatar";
import { gql, useMutation, useQuery } from "@apollo/client";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { CameraOutline, HelpOutline, RefreshOutline } from "react-ionicons";

const UPDATE_PROFILE_PIC = gql`
    mutation UpdateProfilePic($pic: String!) {
        updateProfilePic(pic: $pic) {
            id
            pic
            income
            currency
        }
    }
`;

const Main = () => {
    const [isdarkMode, setIsDarkMode] = useState<boolean>();
    const { loading, error, data } = useQuery(GET_PROFILE);
    const [avatar, setAvatar] = useState<string>("");
    const [startChange, setStartChange] = useState<boolean>(false);

    const [
        updateProfilePic,
        { data: mData, loading: mLoading, error: mError },
    ] = useMutation(UPDATE_PROFILE_PIC, {
        update(cache, { data: { updateProfilePic } }) {
            cache.modify({
                fields: {
                    getProfile(existingProfile = {}) {
                        const newProfileRef = cache.writeFragment({
                            data: updateProfilePic,
                            fragment: gql`
                                fragment NewProfile on profile {
                                    id
                                    pic
                                    income
                                    currency
                                }
                            `,
                        });

                        console.log("profile pic cache updated");

                        return { ...existingProfile, newProfileRef };
                    },
                },
            });
        },
    });

    useEffect(() => {
        if (typeof document !== "undefined") {
            const theme = localStorage.getItem("theme");

            setIsDarkMode(theme == "dark");
        }
    }, []);

    const changeTheme = (theme: boolean): void => {
        if (typeof document !== "undefined") {
            localStorage.setItem("theme", theme ? "dark" : "light");

            document.body.className = theme ? "dark-mode" : "";
            setIsDarkMode((prev) => !prev);
        }
    };

    const handlePicChange = () => {
        const newAvatar = getNewAvatar();
        console.log("New avatar url: ", newAvatar);
        setAvatar(newAvatar);
    };

    const handlePicCancel = () => {
        setStartChange(false);
        setAvatar(data.getProfile.pic);
    };

    const handlePicUpdate = async () => {
        setStartChange(false);

        await updateProfilePic({
            variables: {
                pic: avatar,
            },
        });

        console.log("Profile pic updated");
    };

    const handleToastOk = () => {
        setStartChange(true);
    };

    return (
        <>
            <br />
            <br />
            <div className="section mt-3 text-center">
                <div className="avatar-section">
                    <a>
                        {loading ? (
                            <img
                                src="/assets/img/icon/settings.svg"
                                alt="avatar"
                                className="imaged w100 rounded"
                            />
                        ) : (
                            <img
                                src={avatar ? avatar : data.getProfile.pic}
                                alt="avatar"
                                className="imaged w100 rounded"
                            />
                        )}
                        <span
                            className="button"
                            onClick={handlePicChange}
                            style={{ cursor: "pointer" }}
                        >
                            <RefreshOutline color={"white"} />
                        </span>
                    </a>
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
                                    onChange={(e) => {
                                        changeTheme(e.target.checked);
                                    }}
                                    defaultChecked={isdarkMode}
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

            {/* <div className="listview-title mt-1">Notifications</div>
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
            </ul> */}

            <div className="listview-title mt-1">Your details</div>
            <ul className="listview image-listview text inset">
                <li>
                    <a href="#" className="item">
                        <div className="in">
                            <div>Name</div>
                            <div className="text-muted">Hello</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="item">
                        <div className="in">
                            <div>E-mail</div>
                            <div className="text-muted">Hello</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="item">
                        <div className="in">
                            <div>Currency</div>
                            <div className="text-muted">GBP</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="item">
                        <div className="in">
                            <div>Country</div>
                            <div className="text-muted">UK</div>
                            {/* <span className="text-primary">Edit</span> */}
                        </div>
                    </a>
                </li>
                {/* <li>
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
                </li> */}
            </ul>

            <div className="listview-title mt-1">Security</div>
            <ul className="listview image-listview text mb-2 inset">
                {/* <li>
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
                </li> */}
                <li>
                    <a
                        style={{ cursor: "pointer" }}
                        className="item"
                        onClick={() => signOut()}
                    >
                        <div className="in">
                            <div>Log out</div>
                        </div>
                    </a>
                </li>
            </ul>
            <br />
            <br />

            {data ? (
                <>
                    <Toast
                        show={!startChange && avatar.length > 0 && !mData}
                        text="Change profile photo?"
                        showOK={true}
                        icon={<HelpOutline color={"#white"} />}
                        showOkCta={handleToastOk}
                    />

                    <ImageNotification
                        text="Are you sure?"
                        body="Do you want to update your profile picture?"
                        show={startChange}
                        image={avatar ? avatar : data.getProfile.pic}
                        cancelCta={handlePicCancel}
                        proceedCta={handlePicUpdate}
                    />
                </>
            ) : null}
        </>
    );
};

export default Main;
