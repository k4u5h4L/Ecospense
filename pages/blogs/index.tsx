import SearchBar from "@/components/Blogs/SearchBar/SearchBar";
import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import { PRIMARY_COLOUR } from "@/constants/commonConstants";
import Main from "@/containers/Blogs/Main";
import { useState } from "react";
import { SearchOutline } from "react-ionicons";

const Blogs = () => {
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

export default Blogs;
