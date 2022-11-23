import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Link from "@/helpers/wrappers/Link/Link";

const MyAccounts = () => {
    return (
        <>
            <div className="section full mt-4">
                <div className="section-heading padding">
                    <h2 className="title">My Accounts</h2>
                    <Link scroll={false} href="/accounts" className="link">
                        View All
                    </Link>
                </div>

                <Splide
                    className="carousel-single splide"
                    hasTrack={false}
                    options={{
                        rewind: true,
                        gap: "1rem",
                        arrows: false,
                        pagination: false,
                        perPage: 1,
                        // type: "loop",
                        padding: {
                            left: "9%",
                        },
                    }}
                >
                    <SplideTrack className="splide__track">
                        <SplideSlide className="splide__slide">
                            <div className="card-block bg-primary">
                                <div className="card-main">
                                    <div className="card-button dropdown">
                                        <button
                                            type="button"
                                            className="btn btn-link btn-icon"
                                            data-bs-toggle="dropdown"
                                        >
                                            {/* <ion-icon
                                                    name="ellipsis-horizontal"
                                                ></ion-icon> */}
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {/* <ion-icon
                                                        name="pencil-outline"
                                                    ></ion-icon> */}
                                                Edit
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {/* <ion-icon
                                                        name="close-outline"
                                                    ></ion-icon> */}
                                                Remove
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {/* <ion-icon
                                                        name="arrow-up-circle-outline"
                                                    ></ion-icon> */}
                                                Upgrade
                                            </a>
                                        </div>
                                    </div>
                                    <div className="balance">
                                        <span className="label">BALANCE</span>
                                        <h1 className="title">$ 1,256,90</h1>
                                    </div>
                                    <div className="in">
                                        <div className="card-number">
                                            <span className="label">
                                                Card Number
                                            </span>
                                            •••• 9905
                                        </div>
                                        <div className="bottom">
                                            <div className="card-expiry">
                                                <span className="label">
                                                    Expiry
                                                </span>
                                                12 / 25
                                            </div>
                                            <div className="card-ccv">
                                                <span className="label">
                                                    CCV
                                                </span>
                                                553
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="splide__slide">
                            <div className="card-block bg-dark">
                                <div className="card-main">
                                    <div className="card-button dropdown">
                                        <button
                                            type="button"
                                            className="btn btn-link btn-icon"
                                            data-bs-toggle="dropdown"
                                        >
                                            {/* <ion-icon
                                                    name="ellipsis-horizontal"
                                                ></ion-icon> */}
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {/* <ion-icon
                                                        name="pencil-outline"
                                                    ></ion-icon> */}
                                                Edit
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {/* <ion-icon
                                                        name="close-outline"
                                                    ></ion-icon> */}
                                                Remove
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {/* <ion-icon
                                                        name="arrow-up-circle-outline"
                                                    ></ion-icon> */}
                                                Upgrade
                                            </a>
                                        </div>
                                    </div>
                                    <div className="balance">
                                        <span className="label">BALANCE</span>
                                        <h1 className="title">$ 1,256,90</h1>
                                    </div>
                                    <div className="in">
                                        <div className="card-number">
                                            <span className="label">
                                                Card Number
                                            </span>
                                            •••• 9905
                                        </div>
                                        <div className="bottom">
                                            <div className="card-expiry">
                                                <span className="label">
                                                    Expiry
                                                </span>
                                                12 / 25
                                            </div>
                                            <div className="card-ccv">
                                                <span className="label">
                                                    CCV
                                                </span>
                                                553
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>

                        <SplideSlide className="splide__slide">
                            <div className="card-block bg-secondary">
                                <div className="card-main">
                                    <div className="card-button dropdown">
                                        <button
                                            type="button"
                                            className="btn btn-link btn-icon"
                                            data-bs-toggle="dropdown"
                                        >
                                            {/* <ion-icon
                                                    name="ellipsis-horizontal"
                                                ></ion-icon> */}
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {/* <ion-icon
                                                        name="pencil-outline"
                                                    ></ion-icon> */}
                                                Edit
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {/* <ion-icon
                                                        name="close-outline"
                                                    ></ion-icon> */}
                                                Remove
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                {/* <ion-icon
                                                        name="arrow-up-circle-outline"
                                                    ></ion-icon> */}
                                                Upgrade
                                            </a>
                                        </div>
                                    </div>
                                    <div className="balance">
                                        <span className="label">BALANCE</span>
                                        <h1 className="title">$ 1,256,90</h1>
                                    </div>
                                    <div className="in">
                                        <div className="card-number">
                                            <span className="label">
                                                Card Number
                                            </span>
                                            •••• 9905
                                        </div>
                                        <div className="bottom">
                                            <div className="card-expiry">
                                                <span className="label">
                                                    Expiry
                                                </span>
                                                12 / 25
                                            </div>
                                            <div className="card-ccv">
                                                <span className="label">
                                                    CCV
                                                </span>
                                                553
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>
        </>
    );
};

export default MyAccounts;
