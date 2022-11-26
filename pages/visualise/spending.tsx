import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import dynamic from "next/dynamic";
// import Main from "@/containers/Visualise/Spending/Main/Main";

const Main = dynamic(
    () => import("@/containers/Visualise/Spending/Main/Main"),
    {
        ssr: false,
    }
);

const VisSpending = () => {
    return (
        <>
            <InnerHeader
                title="Your Money Habits"
                cta={() => <></>}
                bg={"bg-primary"}
            />
            <Main />
            <Navbar />
        </>
    );
};

export default VisSpending;
