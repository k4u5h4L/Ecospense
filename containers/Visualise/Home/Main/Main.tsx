import {
    TRENDING_UP_GREEN_COLOUR,
    TRENDING_DOWN_RED_COLOUR,
    ELLIPSIS_GREY_COLOUR,
} from "@/constants/commonConstants";
import {
    ArrowDownOutline,
    ArrowForwardOutline,
    ArrowUpOutline,
    ChatboxEllipses,
    CloseCircle,
    CopyOutline,
    EllipsisVertical,
    Link as LinkIcon,
    LogoFacebook,
    LogoTwitter,
    ShareSocialOutline,
    SwapVerticalOutline,
    TrendingDownOutline,
    TrendingUpOutline,
} from "react-ionicons";
import News from "@/components/Home/News/News";
import Copyrights from "@/components/Home/Copyrights/Copyrights";
import Banner from "@/components/Visualise/Home/Banner/Banner";
import DepositModal from "@/components/Visualise/Home/DepositModal";
import WithdrawModal from "@/components/Visualise/Home/WithdrawModal";
import SendModal from "@/components/Visualise/Home/SendModal";

const Main = () => {
    return (
        <>
            <div id="appCapsule">
                <Banner />
                <DepositModal />
                <WithdrawModal />
                <SendModal />

                <div className="section mt-4">
                    <div className="section-heading">
                        <h2 className="title">My Portfolio</h2>
                        <a href="crypto-portfolio.html" className="link">
                            View All
                        </a>
                    </div>
                    <div className="card">
                        <ul className="listview flush transparent no-line image-listview detailed-list mt-1 mb-1">
                            <li>
                                <div className="item">
                                    <div className="icon-box text-success">
                                        <TrendingUpOutline
                                            color={TRENDING_UP_GREEN_COLOUR}
                                        />
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Bitcoin</strong>
                                            <div className="text-small text-secondary">
                                                0.053201 BTC
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <strong>$5,503.30</strong>
                                            <div className="text-small">
                                                <span className="badge badge-success">
                                                    <ArrowUpOutline
                                                        color={"white"}
                                                    />
                                                    2.59%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="item">
                                    <div className="icon-box text-danger">
                                        <TrendingDownOutline
                                            color={TRENDING_DOWN_RED_COLOUR}
                                        />
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Cardano</strong>
                                            <div className="text-small text-secondary">
                                                251.48 ADA
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <strong>$316.50</strong>
                                            <div className="text-small">
                                                <span className="badge badge-danger">
                                                    <ArrowDownOutline
                                                        color={"white"}
                                                    />
                                                    2.59%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="section-heading padding mt-4">
                    <h2 className="title">Watchlist</h2>
                    <a href="#" className="link">
                        View All
                    </a>
                </div>

                <div className="carousel-multiple splide">
                    <div className="splide__track">
                        <ul className="splide__list">
                            <li className="splide__slide">
                                <div className="card coinbox">
                                    <div className="card-body pb-0">
                                        <a
                                            href="#"
                                            className="fixed-button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#actionSheetWatchlist"
                                        >
                                            <EllipsisVertical
                                                color={ELLIPSIS_GREY_COLOUR}
                                            />
                                        </a>
                                        <h4>BTC/USD</h4>
                                        <div className="text">$38,509.44</div>
                                        <div className="change">
                                            <span className="badge badge-success">
                                                <ArrowUpOutline
                                                    color={"white"}
                                                />
                                                6.78%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="chart chart-sparkline-success-1"></div>
                                </div>
                            </li>

                            <li className="splide__slide">
                                <div className="card coinbox">
                                    <div className="card-body pb-0">
                                        <a
                                            href="#"
                                            className="fixed-button"
                                            data-bs-toggle="modal"
                                            data-bs-target="#actionSheetWatchlist"
                                        >
                                            <EllipsisVertical
                                                color={ELLIPSIS_GREY_COLOUR}
                                            />
                                        </a>
                                        <h4>ETH/USD</h4>
                                        <div className="text">$1,462.61</div>
                                        <div className="change">
                                            <span className="badge badge-danger">
                                                <ArrowDownOutline
                                                    color={"white"}
                                                />
                                                2.54%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="chart chart-sparkline-danger-1"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="modal fade action-sheet"
                    id="actionSheetWatchlist"
                    tabIndex={-1}
                    role="dialog"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">BTC/USD</h5>
                                <h3 className="text-center mb-05 fontsize-headingLarge text-success">
                                    $38,509.44
                                </h3>
                                <div className="text-muted text-center mb-1 fontsize-caption">
                                    Added 28 days ago
                                </div>
                            </div>

                            <div className="modal-body">
                                <ul className="action-button-list">
                                    <li>
                                        <a
                                            href="#"
                                            className="btn btn-list"
                                            data-bs-dismiss="modal"
                                        >
                                            <span>Buy</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="btn btn-list"
                                            data-bs-dismiss="modal"
                                        >
                                            <span>Sell</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="btn btn-list"
                                            data-bs-dismiss="modal"
                                        >
                                            <span>Remove from List</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="btn btn-list"
                                            data-bs-dismiss="modal"
                                        >
                                            <span>Hide from List</span>
                                        </a>
                                    </li>
                                    <li className="action-divider"></li>
                                    <li>
                                        <a
                                            href="#"
                                            className="btn btn-list text-danger"
                                            data-bs-dismiss="modal"
                                        >
                                            <span>Close</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section mt-4">
                    <div className="section-heading">
                        <h2 className="title">Transactions</h2>
                        <a href="crypto-transactions.html" className="link">
                            View All
                        </a>
                    </div>
                    <div className="card">
                        <ul className="listview flush transparent no-line image-listview detailed-list mt-1 mb-1">
                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-success">
                                        <ArrowUpOutline color={"white"} />
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Bitcoin</strong>
                                            <div className="text-small text-secondary">
                                                Sell
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <strong>$855,24</strong>
                                            <div className="text-small">
                                                Today 11:38 AM
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-warning">
                                        <ArrowDownOutline color={"white"} />
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Etherium</strong>
                                            <div className="text-small text-secondary">
                                                Buy
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <strong>$40,68</strong>
                                            <div className="text-small">
                                                March 8, 2021
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box">
                                        <img
                                            src="/assets/img/sample/avatar/avatar4.jpg"
                                            alt="image"
                                            className="imaged rounded w36"
                                        />
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Bitcoin</strong>
                                            <div className="text-small text-secondary">
                                                Send
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <strong>$100,00</strong>
                                            <div className="text-small">
                                                March 4, 2021
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-secondary">
                                        <SwapVerticalOutline color={"white"} />
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Tether</strong>
                                            <div className="text-small text-secondary">
                                                Trade
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <strong>$2.405,48</strong>
                                            <div className="text-small">
                                                February 24, 2021
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="section mt-4 full">
                    <div className="carousel-single splide">
                        <div className="splide__track">
                            <ul className="splide__list">
                                <li className="splide__slide">
                                    <div className="card card-with-icon">
                                        <div className="card-body pt-3 pb-3 text-center">
                                            <div className="card-icon bg-success mb-2">
                                                <LinkIcon color={"white"} />
                                            </div>
                                            <h3 className="card-titlde mb-1">
                                                Refer a Friend
                                            </h3>

                                            <p>
                                                Invite your friends and earn
                                                prizes!
                                            </p>
                                            <div className="row">
                                                <div className="col">
                                                    <a
                                                        href="#"
                                                        className="btn btn-secondary"
                                                    >
                                                        <CopyOutline
                                                            color={"white"}
                                                        />
                                                        Invite now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="splide__slide">
                                    <div className="card card-with-icon">
                                        <div className="card-body pt-3 pb-3 text-center">
                                            <div className="card-icon mb-2">
                                                <ChatboxEllipses
                                                    color={"white"}
                                                />
                                            </div>
                                            <h3 className="card-titlde mb-1">
                                                Join Our Group Chat
                                            </h3>

                                            <p>
                                                Let&apos;s talk about the market
                                                and strategiest!
                                            </p>
                                            <div className="row">
                                                <div className="col">
                                                    <a
                                                        href="component-messages.html"
                                                        className="btn btn-block btn-primary"
                                                    >
                                                        Join now
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a
                                                        href="component-messages.html"
                                                        className="btn btn-block btn-secondary"
                                                    >
                                                        View groups
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="splide__slide">
                                    <div className="card card-with-icon">
                                        <div className="card-body pt-3 pb-3 text-center">
                                            <div className="card-icon bg-secondary mb-2">
                                                <ShareSocialOutline
                                                    color={"white"}
                                                />
                                            </div>
                                            <h3 className="card-titlde mb-1">
                                                Follow Us
                                            </h3>

                                            <p>Follow us on social media!</p>
                                            <div className="row">
                                                <div className="col">
                                                    <a
                                                        href="#"
                                                        className="btn btn-block btn-facebook"
                                                    >
                                                        <LogoFacebook
                                                            color={"white"}
                                                        />
                                                        Facebook
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <a
                                                        href="#"
                                                        className="btn btn-block btn-twitter"
                                                    >
                                                        <LogoTwitter
                                                            color={"white"}
                                                        />
                                                        Twitter
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <News />
                <Copyrights />
            </div>
        </>
    );
};

export default Main;
