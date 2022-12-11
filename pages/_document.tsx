import Document, { Head, Html, Main, NextScript } from "next/document";
import Loader from "@/components/Loader/Loader";
import Navbar from "@/components/Navbar/Navbar";

export default class _Document extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="/assets/css/style.css" />
                </Head>

                <body>
                    <Loader />
                    <Main />
                    {/* <Navbar curRoute={this.props.__NEXT_DATA__.page} /> */}
                    <NextScript />

                    <script src="/assets/js/lib/bootstrap.bundle.min.js"></script>
                    {/* <script src="/assets/js/base.js"></script> */}
                    <script src="/assets/js/script.js"></script>
                </body>
            </Html>
        );
    }
}
