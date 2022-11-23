import Link from "@/helpers/wrappers/Link/Link";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const ShareFunds = () => {
    return (
        <>
            <div className="section full mt-4">
                <div className="section-heading padding">
                    <h2 className="title">Send Money</h2>
                    <Link href="#" className="link">
                        Add New
                    </Link>
                </div>

                <Splide
                    className="carousel-small splide"
                    hasTrack={false}
                    options={{
                        rewind: true,
                        gap: "1rem",
                        arrows: false,
                        pagination: false,
                        perPage: 4,
                        type: "loop",
                        padding: {
                            left: "9%",
                        },
                    }}
                >
                    <SplideTrack className="splide__track">
                        <SplideSlide className="splide__slide">
                            <a href="#">
                                <div className="user-card">
                                    <img
                                        src="assets/img/sample/avatar/avatar2.jpg"
                                        alt="img"
                                        className="imaged w-100"
                                    />
                                    <strong>Jurrien</strong>
                                </div>
                            </a>
                        </SplideSlide>
                        <SplideSlide className="splide__slide">
                            <a href="#">
                                <div className="user-card">
                                    <img
                                        src="assets/img/sample/avatar/avatar3.jpg"
                                        alt="img"
                                        className="imaged w-100"
                                    />
                                    <strong>Elwin</strong>
                                </div>
                            </a>
                        </SplideSlide>
                        <SplideSlide className="splide__slide">
                            <a href="#">
                                <div className="user-card">
                                    <img
                                        src="assets/img/sample/avatar/avatar4.jpg"
                                        alt="img"
                                        className="imaged w-100"
                                    />
                                    <strong>Alma</strong>
                                </div>
                            </a>
                        </SplideSlide>
                        <SplideSlide className="splide__slide">
                            <a href="#">
                                <div className="user-card">
                                    <img
                                        src="assets/img/sample/avatar/avatar5.jpg"
                                        alt="img"
                                        className="imaged w-100"
                                    />
                                    <strong>Justine</strong>
                                </div>
                            </a>
                        </SplideSlide>
                        <SplideSlide className="splide__slide">
                            <a href="#">
                                <div className="user-card">
                                    <img
                                        src="assets/img/sample/avatar/avatar6.jpg"
                                        alt="img"
                                        className="imaged w-100"
                                    />
                                    <strong>Maria</strong>
                                </div>
                            </a>
                        </SplideSlide>
                        <SplideSlide className="splide__slide">
                            <a href="#">
                                <div className="user-card">
                                    <img
                                        src="assets/img/sample/avatar/avatar7.jpg"
                                        alt="img"
                                        className="imaged w-100"
                                    />
                                    <strong>Pamela</strong>
                                </div>
                            </a>
                        </SplideSlide>
                        <SplideSlide className="splide__slide">
                            <a href="#">
                                <div className="user-card">
                                    <img
                                        src="assets/img/sample/avatar/avatar8.jpg"
                                        alt="img"
                                        className="imaged w-100"
                                    />
                                    <strong>Neville</strong>
                                </div>
                            </a>
                        </SplideSlide>
                        <SplideSlide className="splide__slide">
                            <a href="#">
                                <div className="user-card">
                                    <img
                                        src="assets/img/sample/avatar/avatar9.jpg"
                                        alt="img"
                                        className="imaged w-100"
                                    />
                                    <strong>Alex</strong>
                                </div>
                            </a>
                        </SplideSlide>
                        <SplideSlide className="splide__slide">
                            <a href="#">
                                <div className="user-card">
                                    <img
                                        src="assets/img/sample/avatar/avatar10.jpg"
                                        alt="img"
                                        className="imaged w-100"
                                    />
                                    <strong>Stina</strong>
                                </div>
                            </a>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>
        </>
    );
};

export default ShareFunds;
