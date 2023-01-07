import Header from "@/components/Home/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Interactivity from "@/containers/Interactivity/Interactivity";
// import Main from "@/containers/Home/Main/Main";
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
            <Interactivity />
        </>
    );
}
