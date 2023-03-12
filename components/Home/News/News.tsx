import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import Link from "@/helpers/wrappers/Link/Link";
import { gql, useQuery } from "@apollo/client";
import { News } from "@prisma/client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const placeholderImage = "/assets/img/icon/default-image.jpg";

const GET_NEWS = gql`
    query Query($page: Int, $itemsPerPage: Int) {
        getCurrency {
            id
            currencyName
        }
        getAllNews(page: $page, itemsPerPage: $itemsPerPage) {
            title
            imageUrl
            id
        }
    }
`;

const News = () => {
    const { loading, error, data } = useQuery(GET_NEWS, {
        variables: {
            page: 1,
            itemsPerPage: 4,
        },
    });

    return (
        <>
            <div className="section full mt-4 mb-3">
                <div className="section-heading padding">
                    <h2 className="title">Lastest News</h2>
                    <Link href="/news" className="link">
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
                                {data.getAllNews.map((news: News) => (
                                    <SplideSlide
                                        key={news.id}
                                        className="splide__slide"
                                    >
                                        <Link
                                            href={`/news/${encodeURIComponent(
                                                news.id
                                            )}`}
                                        >
                                            <div className="blog-card">
                                                <img
                                                    src={
                                                        !news.imageUrl
                                                            ? placeholderImage
                                                            : news.imageUrl
                                                    }
                                                    alt="image"
                                                    onError={({
                                                        currentTarget,
                                                    }) => {
                                                        currentTarget.onerror =
                                                            null; // prevents looping
                                                        currentTarget.src =
                                                            placeholderImage;
                                                    }}
                                                    className="imaged w-100"
                                                />
                                                <div className="text">
                                                    <h4 className="title">
                                                        {news.title.slice(
                                                            0,
                                                            50
                                                        ) +
                                                            (news.title
                                                                .length >= 50
                                                                ? "..."
                                                                : "")}
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
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

export default News;
