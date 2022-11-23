import { CloseCircle, SearchOutline } from "react-ionicons";

const SearchBar = ({ showSearchBar, setShowSearchBar }) => {
    return (
        <>
            <div
                id="search"
                className={`appHeader ${showSearchBar ? "show" : ""}`}
            >
                <form className="search-form">
                    <div className="form-group searchbox">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                        />
                        <i className="input-icon icon ion-ios-search">
                            <SearchOutline />
                        </i>
                        <a
                            style={{ cursor: "pointer" }}
                            className="ms-1 close toggle-searchbox"
                            onClick={() => {
                                setShowSearchBar(false);
                            }}
                        >
                            <i className="icon ion-ios-close-circle">
                                <CloseCircle />
                            </i>
                        </a>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SearchBar;
