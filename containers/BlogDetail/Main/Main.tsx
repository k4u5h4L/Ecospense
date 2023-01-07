import ComponentLoaderPrimary from "@/components/ComponentLoader/ComponentLoaderPrimary";
import { ApolloError, gql, useQuery } from "@apollo/client";
import { News } from "@prisma/client";
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

const Main = ({ id }: { id: string }) => {
    console.log("id", id);

    const { loading, error, data }: QueryResultType = useQuery(GET_NEWS, {
        variables: {
            getNewsByIdId: id,
            page: 1,
            itemsPerPage: 4,
        },
    });

    if (data) {
        console.log("data", data);
    }

    return (
        <>
            <div id="appCapsule">
                {loading ? (
                    <ComponentLoaderPrimary />
                ) : (
                    <>
                        <div className="section mt-2">
                            <h1>fdsfdsfsd</h1>
                            <div className="blog-header-info mt-2 mb-2">
                                <div>
                                    <img
                                        src="/assets/img/icon/person-outline.svg"
                                        alt="img"
                                        className="imaged w24 rounded me-05"
                                    />
                                    by{" "}
                                    <a style={{ cursor: "pointer" }}>fdffsd</a>
                                </div>
                                <div>24, September 2021</div>
                            </div>
                            <div className="lead">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam aliquam fringilla
                                euismod. Nulla viverra eu ante tincidunt
                                viverra. Sed dignissim maximus turpis et dictum.
                            </div>
                        </div>

                        <div className="section mt-2">
                            <p>
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
                            <p>
                                Nullam augue magna, dignissim sit amet libero
                                eu, ultrices tempus metus. Ut finibus ac justo
                                eu tempor. Quisque egestas lectus neque, quis
                                sodales lacus volutpat id.
                            </p>
                            <h3>Quisque id risus diam</h3>
                            <p>
                                Vivamus venenatis at purus at varius. Nam
                                pharetra, magna et interdum dignissim, purus
                                risus ullamcorper ipsum, et pharetra turpis ex
                                vel orci.
                            </p>
                            <figure>
                                <img
                                    src="/assets/img/sample/photo/1.jpg"
                                    alt="image"
                                    className="imaged img-fluid"
                                />
                            </figure>
                            <h3>Pellentesque dictum</h3>
                            <p>
                                Pellentesque condimentum ornare nibh, nec
                                iaculis purus faucibus ac. Etiam lacus ante,
                                eleifend et aliquam a, tristique vel urna.
                            </p>
                            <p>
                                Vivamus venenatis at purus at varius. Nam
                                pharetra, magna et interdum dignissim, purus
                                risus ullamcorper ipsum, et pharetra turpis ex
                                vel orci. Nulla tincidunt nibh ac elit semper
                                placerat. Fusce mattis, sapien vel vulputate
                                scelerisque, ligula erat mollis elit, vitae
                                condimentum ante leo quis quam. Vivamus sit amet
                                quam ut eros varius venenatis et et orci.
                                Pellentesque dictum egestas odio, sed auctor
                                nulla euismod quis. Donec elementum feugiat ex,
                                nec pharetra nulla sodales ac.
                            </p>
                        </div>

                        <div className="section">
                            <a
                                style={{ cursor: "pointer" }}
                                className="btn btn-block btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LogOutOutline color={"white"} /> Visit the
                                source
                            </a>
                        </div>

                        <div className="section mt-3">
                            <h2>Other Posts</h2>
                            <div className="row mt-3">
                                <div className="col-6 mb-2">
                                    <a href="app-blog-post.html">
                                        <div className="blog-card">
                                            <img
                                                src="/assets/img/sample/photo/1.jpg"
                                                alt="image"
                                                className="imaged w-100"
                                            />
                                            <div className="text">
                                                <h4 className="title">
                                                    What will be the value of
                                                    bitcoin in the next...
                                                </h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 mb-2">
                                    <a href="app-blog-post.html">
                                        <div className="blog-card">
                                            <img
                                                src="/assets/img/sample/photo/2.jpg"
                                                alt="image"
                                                className="imaged w-100"
                                            />
                                            <div className="text">
                                                <h4 className="title">
                                                    Rules you need to know in
                                                    business
                                                </h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 mb-2">
                                    <a href="app-blog-post.html">
                                        <div className="blog-card">
                                            <img
                                                src="/assets/img/sample/photo/3.jpg"
                                                alt="image"
                                                className="imaged w-100"
                                            />
                                            <div className="text">
                                                <h4 className="title">
                                                    10 easy ways to save your
                                                    money
                                                </h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-6 mb-2">
                                    <a href="app-blog-post.html">
                                        <div className="blog-card">
                                            <img
                                                src="/assets/img/sample/photo/4.jpg"
                                                alt="image"
                                                className="imaged w-100"
                                            />
                                            <div className="text">
                                                <h4 className="title">
                                                    Follow the financial agenda
                                                    with...
                                                </h4>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Main;
