import ShareBlogModal from "@/components/BlogDetail/ShareBlogModal/ShareBlogModal";
import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import { PRIMARY_COLOUR } from "@/constants/commonConstants";
import Main from "@/containers/BlogDetail/Main/Main";
import { ShareSocialOutline } from "react-ionicons";

const BlogDetail = ({ id }) => {
    return (
        <>
            <InnerHeader title="ID" cta={Cta} />
            <Main />
            <ShareBlogModal />
            <Navbar />
        </>
    );
};

const Cta = () => {
    return (
        <>
            <a
                href="#"
                className="headerButton"
                data-bs-toggle="modal"
                data-bs-target="#actionSheetShare"
            >
                <ShareSocialOutline color={PRIMARY_COLOUR} />
            </a>
        </>
    );
};

export default BlogDetail;
