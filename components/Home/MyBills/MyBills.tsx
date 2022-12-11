import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import Link from "@/helpers/wrappers/Link/Link";
import { formatMoney } from "@/utils/formatMoney";
import { gql, useQuery } from "@apollo/client";
import { Bill } from "@prisma/client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const GET_BILLS = gql`
    query GetBills($page: Int, $itemsPerPage: Int) {
        getCurrency {
            id
            currencyName
        }
        getAllBills(page: $page, itemsPerPage: $itemsPerPage) {
            amount
            desc
            icon
            id
            name
        }
    }
`;

const MyBills = () => {
    const { loading, error, data } = useQuery(GET_BILLS, {
        variables: {
            page: 1,
            itemsPerPage: 4,
        },
    });

    return (
        <>
            <div className="section full mt-4">
                <div className="section-heading padding">
                    <h2 className="title">Monthly Bills</h2>
                    <Link href="/bills" className="link">
                        View All
                    </Link>
                </div>

                <Splide
                    className="carousel-multiple splide"
                    hasTrack={false}
                    options={{
                        rewind: true,
                        gap: "1rem",
                        arrows: false,
                        pagination: false,
                        perPage: 2,
                        type: "loop",
                        padding: {
                            left: "9%",
                        },
                    }}
                >
                    <SplideTrack className="splide__track">
                        {loading ? (
                            <ComponentLoaderPrimary />
                        ) : (
                            <>
                                {data.getAllBills.map((bill: Bill) => (
                                    <SplideSlide
                                        key={bill.id}
                                        className="splide__slide"
                                    >
                                        <div className="bill-box">
                                            <div className="img-wrapper">
                                                <img
                                                    src={bill.icon}
                                                    alt="img"
                                                    className="image-block imaged w48"
                                                />
                                            </div>
                                            <div className="price">
                                                {formatMoney(
                                                    bill.amount,
                                                    data.getCurrency
                                                        .currencyName
                                                )}
                                            </div>
                                            <p>{bill.name}</p>
                                            <a
                                                style={{ cursor: "pointer" }}
                                                onClick={() =>
                                                    alert(
                                                        "Paid the bill, and send notification"
                                                    )
                                                }
                                                className="btn btn-primary btn-block btn-sm"
                                            >
                                                PAY NOW
                                            </a>
                                        </div>
                                    </SplideSlide>
                                ))}
                            </>
                        )}
                    </SplideTrack>
                </Splide>
            </div>
        </>
    );
};

export default MyBills;
