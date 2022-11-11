const News = () => {
    return (
        <>
            <div className="section full mt-4 mb-3">
                <div className="section-heading padding">
                    <h2 className="title">Lastest News</h2>
                    <a href="app-blog.html" className="link">
                        View All
                    </a>
                </div>

                <div className="carousel-multiple splide">
                    <div className="splide__track">
                        <ul className="splide__list">
                            <li className="splide__slide">
                                <a href="app-blog-post.html">
                                    <div className="blog-card">
                                        <img
                                            src="assets/img/sample/photo/1.jpg"
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
                            </li>

                            <li className="splide__slide">
                                <a href="app-blog-post.html">
                                    <div className="blog-card">
                                        <img
                                            src="assets/img/sample/photo/2.jpg"
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
                            </li>

                            <li className="splide__slide">
                                <a href="app-blog-post.html">
                                    <div className="blog-card">
                                        <img
                                            src="assets/img/sample/photo/3.jpg"
                                            alt="image"
                                            className="imaged w-100"
                                        />
                                        <div className="text">
                                            <h4 className="title">
                                                10 easy ways to save your money
                                            </h4>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li className="splide__slide">
                                <a href="app-blog-post.html">
                                    <div className="blog-card">
                                        <img
                                            src="assets/img/sample/photo/4.jpg"
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
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
