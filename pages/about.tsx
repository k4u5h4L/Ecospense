import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import Main from "@/containers/About/Main/Main";
import { useSession } from "next-auth/react";

const About = () => {
    const { status } = useSession();

    return (
        <>
            <InnerHeader title="About" cta={() => <></>} />
            <Main />
            {status === "authenticated" ? <Navbar /> : null}
        </>
    );
};

export default About;
