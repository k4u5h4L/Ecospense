import News from "@/components/Home/News/News";
import { TRENDING_UP_GREEN_COLOUR } from "@/constants/commonConstants";
import { ArrowDownOutline, ArrowUpOutline, CaretUp } from "react-ionicons";
import Chart from "react-apexcharts";
import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4,
    chartExample5,
} from "@/constants/databases";

const Main = () => {
    return (
        <>
            <div id="appCapsule">
                <div className="section full gradientSection">
                    <div className="in coin-head">
                        <h1 className="total">$ 32,517.50</h1>
                        <h4 className="caption">
                            <span className="iconbox text-success">
                                <CaretUp color={TRENDING_UP_GREEN_COLOUR} />
                            </span>
                            $2,325.19 <strong>(+1.50%)</strong>
                        </h4>
                    </div>
                </div>

                <div className="section mb-2">
                    <div className="card coin-chart">
                        <div className="card-body pt-1">
                            <ul className="nav nav-tabs lined" role="tablist">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        data-bs-toggle="tab"
                                        href="#tab-24h"
                                        role="tab"
                                    >
                                        24H
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        href="#tab-1w"
                                        role="tab"
                                    >
                                        1W
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        href="#tab-1m"
                                        role="tab"
                                    >
                                        1M
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        href="#tab-1y"
                                        role="tab"
                                    >
                                        1Y
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        data-bs-toggle="tab"
                                        href="#tab-all"
                                        role="tab"
                                    >
                                        All
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content">
                            <div
                                className="tab-pane fade show active"
                                id="tab-24h"
                                role="tabpanel"
                            >
                                <div className="chart-example-1">
                                    <Chart
                                        series={chartExample1.series}
                                        options={chartExample1.options}
                                        type="area"
                                        height={140}
                                    />
                                </div>
                            </div>

                            <div
                                className="tab-pane fade"
                                id="tab-1w"
                                role="tabpanel"
                            >
                                <div className="chart-example-2">
                                    <Chart
                                        series={chartExample2.series}
                                        options={chartExample2.options}
                                        type="area"
                                        height={140}
                                    />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="tab-1m"
                                role="tabpanel"
                            >
                                <div className="chart-example-3">
                                    <Chart
                                        series={chartExample3.series}
                                        options={chartExample3.options}
                                        type="area"
                                        height={140}
                                    />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="tab-1y"
                                role="tabpanel"
                            >
                                <div className="chart-example-4">
                                    <Chart
                                        series={chartExample4.series}
                                        options={chartExample4.options}
                                        type="area"
                                        height={140}
                                    />
                                </div>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="tab-all"
                                role="tabpanel"
                            >
                                <div className="chart-example-5">
                                    <Chart
                                        series={chartExample5.series}
                                        options={chartExample5.options}
                                        type="area"
                                        height={140}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <a
                                        href="crypto-exchange.html"
                                        className="btn btn-block btn-lg btn-success"
                                    >
                                        BUY
                                    </a>
                                </div>
                                <div className="col">
                                    <a
                                        href="crypto-exchange.html"
                                        className="btn btn-block btn-lg btn-secondary"
                                    >
                                        SELL
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section mt-2 mb-4">
                    <div className="card">
                        <ul className="listview no-line transparent flush simple-listview">
                            <li>
                                <div className="text-muted">Daily Change</div>
                                <strong className="text-success">+5.10%</strong>
                            </li>
                            <li>
                                <div className="text-muted">High Price</div>
                                <strong>$56,367.23</strong>
                            </li>
                            <li>
                                <div className="text-muted">Low Price</div>
                                <strong>$18,529.90</strong>
                            </li>
                            <li>
                                <div className="text-muted">Market Supply</div>
                                <strong>BTC 14.62M</strong>
                            </li>
                            <li>
                                <div className="text-muted">Market Cap</div>
                                <strong>$526.48B</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="card mt-2">
                        <div className="card-body">
                            <div className="row mb-05 fontsize-sub">
                                <div className="col text-success">
                                    <strong>72% Buy</strong>
                                </div>
                                <div className="col text-secondary text-end">
                                    <strong>26% Sell</strong>
                                </div>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "72%" }}
                                    aria-valuenow={72}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                ></div>
                                <div
                                    className="progress-bar bg-secondary"
                                    role="progressbar"
                                    style={{ width: "28%" }}
                                    aria-valuenow={28}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section mt-4">
                    <div className="section-heading">
                        <h2 className="title">History</h2>
                        <a href="#" className="link">
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
                                                Sell Order #7893
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
                                    <div className="icon-box bg-danger">
                                        <ArrowDownOutline color={"white"} />
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Bitcoin</strong>
                                            <div className="text-small text-secondary">
                                                Buy order #5501
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <strong>$550,26</strong>
                                            <div className="text-small">
                                                March 23, 2021
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-danger">
                                        <ArrowDownOutline color={"white"} />
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Bitcoin</strong>
                                            <div className="text-small text-secondary">
                                                Buy order #5432
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <strong>$1.509,24</strong>
                                            <div className="text-small">
                                                March 22, 2021
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-success">
                                        <ArrowUpOutline color={"white"} />
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Bitcoin</strong>
                                            <div className="text-small text-secondary">
                                                Sell order #5245
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <strong>$52,68</strong>
                                            <div className="text-small">
                                                March 5, 2021
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-danger">
                                        <ArrowDownOutline color={"white"} />
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Bitcoin</strong>
                                            <div className="text-small text-secondary">
                                                Buy order #4954
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <strong>$1.509,24</strong>
                                            <div className="text-small">
                                                March 3, 2021
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-success">
                                        <ArrowUpOutline color={"white"} />
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Bitcoin</strong>
                                            <div className="text-small text-secondary">
                                                Sell order #4923
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <strong>$52,68</strong>
                                            <div className="text-small">
                                                March 2, 2021
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="card-body pt-0">
                            <a
                                href="#"
                                className="btn btn-block btn-outline-secondary"
                            >
                                Load more
                            </a>
                        </div>
                    </div>
                </div>

                <News />

                <div className="section inset mb-4 mt-4">
                    <div className="accordion" id="accordionExample1">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordion01"
                                >
                                    What is Bitcoin?
                                </button>
                            </h2>
                            <div
                                id="accordion01"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample1"
                            >
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut at feugiat tellus. Sed
                                    quis velit tellus.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordion02"
                                >
                                    How Bitcoin works?
                                </button>
                            </h2>
                            <div
                                id="accordion02"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample1"
                            >
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut at feugiat tellus. Sed
                                    quis velit tellus.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#accordion03"
                                >
                                    How can i buy/sell Bitcoin?
                                </button>
                            </h2>
                            <div
                                id="accordion03"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample1"
                            >
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut at feugiat tellus. Sed
                                    quis velit tellus.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="appFooter">
                    <div className="footer-title">
                        Copyright © Finapp 2021. All Rights Reserved.
                    </div>
                    Bootstrap 5 based mobile template.
                </div>
            </div>
        </>
    );
};

export default Main;
