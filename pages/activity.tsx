import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/containers/Activity/Main/Main";

const Activity = () => {
    return (
        <>
            <InnerHeader title="Activity" cta={() => <></>} />
            <Main />
            <Navbar />
        </>
    );
};

export default Activity;
