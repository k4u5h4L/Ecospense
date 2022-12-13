import SearchBar from "@/components/Blogs/SearchBar/SearchBar";
import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import { PRIMARY_COLOUR, TWELVE_HOURS_IN_S } from "@/constants/commonConstants";
import Main from "@/containers/Blogs/Main";
import { refreshNews } from "@/services/refreshNews";
import { useState } from "react";
import { SearchOutline } from "react-ionicons";

const Blogs = ({}) => {
    const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
    const Cta = () => {
        return (
            <>
                <a
                    style={{ cursor: "pointer" }}
                    className="headerButton toggle-searchbox"
                    onClick={() => {
                        setShowSearchBar(true);
                    }}
                >
                    <SearchOutline color={PRIMARY_COLOUR} />
                </a>
            </>
        );
    };

    return (
        <>
            <InnerHeader title="News" cta={Cta} />
            <SearchBar
                showSearchBar={showSearchBar}
                setShowSearchBar={setShowSearchBar}
            />
            <Main />
            <Navbar />
        </>
    );
};

export async function getStaticProps() {
    // refreshNews().then(() => console.log("Refreshing task over"));
    console.log("Static props task complete");

    return {
        props: {},
        // re fetch all blogs after this time period
        revalidate: TWELVE_HOURS_IN_S, // 12 hours, in seconds
    };
}

export default Blogs;
