import { getCurrentUrl } from "@/utils/commonUtils";
import { NextSeo } from "next-seo";
import { Router } from "next/router";

const Seo = ({ router }: { router: Router }) => {
    return (
        <>
            <NextSeo
                title="Ecospense"
                description="A plan old expense tracker without the fluff."
                canonical={`${getCurrentUrl()}${router.asPath}`}
                openGraph={{
                    url: getCurrentUrl(),
                    title: "Ecospense",
                    locale: "en_IE",
                    description:
                        "A plan old expense tracker without the fluff.",
                    images: [
                        {
                            url: `${getCurrentUrl()}/assets/img/logo-full.png`,
                            // width: 800,
                            // height: 600,
                            alt: "Ecospense logo",
                        },
                    ],
                    siteName: "Ecospense",
                    type: "website",
                }}
                // twitter={{
                //     handle: "@handle",
                //     site: "@site",
                //     cardType: "summary_large_image",
                // }}
            />
        </>
    );
};

export default Seo;
