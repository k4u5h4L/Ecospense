import { ChatMessage } from "@/types/ChatMessage";
import { getTimeFromIsoString } from "@/utils/getTimeFromIsoString";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { ArrowForwardOutline, CloseCircle } from "react-ionicons";

const Main = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            message: "Hi there, how may I help you?",
            timestamp: new Date().toISOString(),
            sender: "Ecospense Helper", // if sent by user, value will be "Me"
            user: "",
        },
    ]);
    const textBoxRef = useRef<any>();
    const { data: session, status } = useSession();

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);

    const handleSubmit = async (e) => {
        console.log("Sent message");
        e.preventDefault();

        setMessages([
            ...messages,
            {
                message: textBoxRef.current.value,
                timestamp: new Date().toISOString(),
                sender: "me",
                user: session?.user?.email ?? "NA",
            },
        ]);

        textBoxRef.current.value = "";

        // send to server and get response
    };

    return (
        <>
            <div id="appCapsule">
                {/* <div className="message-divider">Friday, Sep 20, 10:40 AM</div> */}

                {messages.map((message, index) =>
                    message.sender.toLowerCase() != "me" ? (
                        <div key={index} className="message-item">
                            <img
                                src="/assets/img/favicon.png"
                                alt="avatar"
                                className="avatar"
                            />
                            <div className="content">
                                <div className="title">{message.sender}</div>
                                <div className="bubble">{message.message}</div>
                                <div className="footer">
                                    {new Date(message.timestamp).toLocaleString(
                                        [],
                                        { hour: "2-digit", minute: "2-digit" }
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div key={index} className="message-item user">
                            <div className="content">
                                <div className="bubble">{message.message}</div>
                                <div className="footer">
                                    {new Date(message.timestamp).toLocaleString(
                                        [],
                                        { hour: "2-digit", minute: "2-digit" }
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                )}

                {/* <div className="message-item user">
                    <div className="content">
                        <div className="bubble">
                            <img
                                src="/assets/img/sample/photo/2.jpg"
                                alt="photo"
                                className="imaged w160"
                            />
                        </div>
                        <div className="footer">10:46 AM</div>
                    </div>
                </div> */}

                {/* <div className="message-item">
                    <img
                        src="/assets/img/sample/avatar/avatar1.jpg"
                        alt="avatar"
                        className="avatar"
                    />
                    <div className="content">
                        <div className="title">John</div>
                        <div className="bubble">
                            <img
                                src="/assets/img/sample/photo/5.jpg"
                                alt="photo"
                                className="imaged w160"
                            />
                        </div>
                        <div className="footer">10:40 AM</div>
                    </div>
                </div> */}
            </div>

            <div className="chatFooter">
                <form
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    {/* <a
                        href="#"
                        className="btn btn-icon btn-text-secondary rounded"
                    >
                        ion-ixcon name="camera"></ion-icon>
                    </a> */}
                    <div className="form-group basic">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Type a message..."
                                ref={textBoxRef}
                            />
                            <i className="clear-input">
                                <CloseCircle />
                            </i>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-icon btn-primary rounded"
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        <ArrowForwardOutline color={"white"} />
                    </button>
                </form>
            </div>
        </>
    );
};

export default Main;
