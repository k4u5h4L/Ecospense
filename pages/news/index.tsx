import SearchBar from "@/components/Blogs/SearchBar/SearchBar";
import InnerHeader from "@/components/InnerHeader/InnerHeader";
import Navbar from "@/components/Navbar/Navbar";
import { PRIMARY_COLOUR, TWELVE_HOURS_IN_S } from "@/constants/commonConstants";
import { NEWS_API_URL } from "@/constants/newsConstants";
import Main from "@/containers/Blogs/Main";
import { News, NewsApiResponse } from "@/types/NewsExtApi";
import prisma from "@/prisma/client";
import { useState } from "react";
import { SearchOutline } from "react-ionicons";

const Blogs = ({}) => {
    const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
    const Cta = () => {
        return (
            <>
                <a
                    style={{ cursor: "pointer" }}
                    className="headerButton toggle-searchbox"
                    onClick={() => {
                        setShowSearchBar(true);
                    }}
                >
                    <SearchOutline color={PRIMARY_COLOUR} />
                </a>
            </>
        );
    };

    return (
        <>
            <InnerHeader title="News" cta={Cta} />
            <SearchBar
                showSearchBar={showSearchBar}
                setShowSearchBar={setShowSearchBar}
            />
            <Main />
            <Navbar />
        </>
    );
};

export async function getStaticProps() {
    console.log("Refetched data");
    let dataToInsert = [];

    const totalPages = 4;
    if (process.env.NODE_ENV != "development") {
        try {
            for (let i = 1; i <= totalPages; i++) {
                const res = await fetch(NEWS_API_URL + `&page=${i}`);
                const data: NewsApiResponse = await res.json();

                data.articles.forEach((news: News) => {
                    dataToInsert.push({
                        sourceId: news.source.id,
                        sourceName: news.source.name,
                        author: news.author,
                        title: news.title,
                        description: news.description,
                        url: news.url,
                        imageUrl: news.urlToImage,
                        publishedAt: news.publishedAt,
                        content: news.content,
                    });
                });
            }

            await prisma.$transaction([
                prisma.news.deleteMany({}),
                prisma.news.createMany({
                    data: dataToInsert,
                }),
            ]);

            console.log(
                "Data refreshed successfully. Total documents: ",
                dataToInsert.length
            );
        } catch (err) {
            console.error(err);
        }
    }

    return {
        props: {},
        // re fetch all blogs after this time period
        revalidate: TWELVE_HOURS_IN_S, // 12 hours, in seconds
    };
}

export default Blogs;
