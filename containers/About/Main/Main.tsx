const Main = () => {
    return (
        <>
            <div id="appCapsule">
                <div className="section full">
                    <img
                        src="/assets/img/logo-full.png"
                        alt="image"
                        className="imaged w-100 square"
                    />
                </div>

                <div className="section mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">About us</h2>
                            Hi there! I am Kaushal, and I am the solo creator of
                            this web app. I am a software engineer by profession
                            and I love to create exciting web apps. I had
                            created this app to help me manage my own expenses
                            and I thought it would be a good idea to share it
                            with the world. I hope you like it!
                        </div>
                    </div>
                </div>

                <div className="section mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">More About Ecospense</h2>
                            <p>
                                Ecospense is a web app that helps you manage
                                your expenses and make better financial
                                decisions. It is a free app and will always be
                                free. It is also open source, and hosted
                                publicly on GitHub. You can find it here:{" "}
                            </p>
                            <a
                                href="https://github.com/k4u5h4L/Ecospense"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ecospense GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="section full mt-3">
                    <div className="carousel-single splide">
                        <div className="splide__track">
                            <ul className="splide__list">
                                <li className="splide__slide">
                                    <img
                                        src="assets/img/sample/photo/wide1.jpg"
                                        alt="alt"
                                        className="imaged w-100"
                                    />
                                </li>

                                <li className="splide__slide">
                                    <img
                                        src="assets/img/sample/photo/wide2.jpg"
                                        alt="alt"
                                        className="imaged w-100"
                                    />
                                </li>

                                <li className="splide__slide">
                                    <img
                                        src="assets/img/sample/photo/wide3.jpg"
                                        alt="alt"
                                        className="imaged w-100"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                <div className="section mt-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Have a Question?</h2>
                            <p>
                                Feel free to raise an issue on GitHub if you
                                encounter any problem while using this app. I
                                may take a while to respond as I am the only
                                developer of this app and am usually busy with
                                my day to day work.
                            </p>
                            <a
                                href="https://github.com/k4u5h4L/Ecospense/issues"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Raise an issue on Ecospense GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
