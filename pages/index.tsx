import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/containers/Home/Main/Main"), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <Header />
            <Main />
            <Navbar />
        </>
    );
}
