import InnerHeader from "@/components/InnerHeader/InnerHeader";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/containers/Chat/Main/Main"), {
    ssr: false,
});

const Chat = () => {
    return (
        <>
            <InnerHeader title="Chat help" cta={() => <></>} />
            <Main />
        </>
    );
};

export default Chat;
