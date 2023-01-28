import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import Link from "@/helpers/wrappers/Link/Link";
import { formatDate } from "@/utils/formatDate";
import { ApolloError, gql, useQuery } from "@apollo/client";
import { News } from "@prisma/client";
import Error from "next/error";
import { useRouter } from "next/router";
import { LogOutOutline } from "react-ionicons";

const GET_NEWS = gql`
    query GetNewsDetail($getNewsByIdId: ID!, $page: Int, $itemsPerPage: Int) {
        getNewsById(id: $getNewsByIdId) {
            id
            sourceName
            author
            title
            description
            url
            imageUrl
            publishedAt
            content
        }
        getAllNews(page: $page, itemsPerPage: $itemsPerPage) {
            imageUrl
            id
            title
        }
    }
`;

type DataType = {
    getNewsById: News;
    getAllNews: News[];
};

interface QueryResultType {
    data: DataType;
    loading: boolean;
    error?: ApolloError;
}

const Main = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, error, data }: QueryResultType = useQuery(GET_NEWS, {
        variables: {
            getNewsByIdId: id,
            page: 1,
            itemsPerPage: 5,
        },
    });

    if (error) {
        router.push(
            `/error?q=${encodeURIComponent("Error fetching news article.")}`
        );
    }

    return (
        <>
            <div id="appCapsule">
                {loading ? (
                    <>
                        <br />
                        <ComponentLoaderPrimary />
                    </>
                ) : (
                    <>
                        <div className="section mt-2">
                            <h1>{data.getNewsById.title}</h1>
                            <div className="blog-header-info mt-2 mb-2">
                                <div>
                                    <img
                                        src="/assets/img/icon/person-outline.svg"
                                        alt="img"
                                        className="imaged w24 rounded me-05"
                                    />
                                    by{" "}
                                    <a
                                        style={{
                                            cursor: "pointer",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {data.getNewsById.sourceName ??
                                            data.getNewsById.author}
                                    </a>
                                </div>
                                <div>
                                    {formatDate(data.getNewsById.publishedAt)}
                                </div>
                            </div>
                            <div className="lead">
                                {data.getNewsById.description}
                            </div>
                        </div>

                        <div className="section mt-2">
                            {/* <p>
                                Proin luctus viverra volutpat. Aenean hendrerit
                                nisi quis consequat pretium. Maecenas ut
                                vestibulum justo. Morbi eleifend ante eget arcu
                                sodales malesuada. Nunc interdum ac diam ut
                                bibendum. Proin gravida sit amet urna ac
                                scelerisque. Vivamus consectetur ex vel felis
                                bibendum fermentum.
                            </p>
                            <figure>
                                <img
                                    src="/assets/img/sample/photo/3.jpg"
                                    alt="image"
                                    className="imaged img-fluid"
                                />
                                </figure> 
                                <h3>Quisque id risus diam</h3>
                            */}
                            <figure>
                                <img
                                    src={data.getNewsById.imageUrl}
                                    alt="image"
                                    className="imaged img-fluid"
                                />
                            </figure>
                            <p>
                                {data?.getNewsById?.content?.replace(
                                    /\[\+\d+\s*chars\]$/g,
                                    "[Read more]"
                                ) ?? null}
                            </p>
                        </div>

                        <div className="section">
                            <a
                                style={{ cursor: "pointer" }}
                                className="btn btn-block btn-primary"
                                target="_blank"
                                rel="noreferrer"
                                href={data.getNewsById.url}
                            >
                                <LogOutOutline color={"white"} /> Visit the
                                source
                            </a>
                        </div>

                        <div className="section mt-3">
                            <h2>Other Posts</h2>
                            <div className="row mt-3">
                                {data.getAllNews.map((news) =>
                                    news.id == data.getNewsById.id ? null : (
                                        <div
                                            key={news.id}
                                            className="col-6 mb-2"
                                        >
                                            <Link
                                                href={`/news/${encodeURIComponent(
                                                    news.id
                                                )}`}
                                            >
                                                <div className="blog-card">
                                                    <img
                                                        src={news.imageUrl}
                                                        alt="image"
                                                        className="imaged w-100"
                                                    />
                                                    <div className="text">
                                                        <h4 className="title">
                                                            {news.title}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Main;
