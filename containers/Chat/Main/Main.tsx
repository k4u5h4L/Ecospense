import { ChatMessage } from "@/types/ChatMessage";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { ArrowForwardOutline, CloseCircle } from "react-ionicons";
import { gql, useLazyQuery } from "@apollo/client";

const SEND_TEXT = gql`
    query GetChatResponseQuery($message: String!, $sender: String!) {
        getChatResponse(message: $message, sender: $sender) {
            message
            sender
            timestamp
            user
        }
    }
`;

const Main = () => {
    const allMessages: ChatMessage[] = [
        {
            message: "Hi there, how may I help you?",
            timestamp: new Date().toISOString(),
            sender: "Ecospense Helper", // if sent by user, value will be "Me"
            user: "",
        },
    ];
    // const [getText, { loading, error, data }] = useLazyQuery(SEND_TEXT);
    const [messages, setMessages] = useState<ChatMessage[]>(allMessages);
    const textBoxRef = useRef<any>();
    const { data: session, status } = useSession();

    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);

    const handleSubmit = async (e) => {
        console.log("Sent message");
        e.preventDefault();

        const m: string = textBoxRef.current.value;
        const u: string = session?.user?.email ?? "NA";

        allMessages.push({
            message: m,
            timestamp: new Date().toISOString(),
            sender: "me",
            user: u,
        });

        setMessages(allMessages);

        textBoxRef.current.value = "";

        // send to server and get response
        // await getText({ variables: { message: m, sender: u } });
        const data = await sendMessage(m, u);

        const {
            message: messageRes,
            sender: senderRes,
            timestamp: timestampRes,
            user: userRes,
        } = data;

        allMessages.push({
            message: messageRes,
            timestamp: timestampRes,
            sender: senderRes,
            user: userRes,
        });
        setMessages(allMessages);
        window.scrollTo(0, document.body.scrollHeight);
        console.log(allMessages);
    };

    const sendMessage = async (
        message: string,
        sender: string
    ): Promise<ChatMessage> => {
        const res = await fetch(`/api/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: message,
                sender: sender,
            }),
        });

        const data = await res.json();

        return data;
    };

    return (
        <>
            <div id="appCapsule">
                {/* <div className="message-divider">Friday, Sep 20, 10:40 AM</div> */}

                {messages.map((message, index) =>
                    message.sender.toLowerCase() != "me" ? (
                        <div key={Date.now()} className="message-item">
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
                        <div key={Date.now()} className="message-item user">
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
