import { NEWS_API_URL } from "@/constants/newsConstants";
import { News, NewsApiResponse } from "@/types/NewsExtApi";
import prisma from "@/prisma/client";

export const refreshNews = async () => {
    console.log("Refetched data");
    let dataToInsert = [];

    const totalPages = 4;
    if (process.env.NODE_ENV != "development") {
        try {
            for (let i = 1; i <= totalPages; i++) {
                const newsEndpoint = NEWS_API_URL + `&page=${i}`;
                console.log("News endpoint: ", newsEndpoint);

                const res = await fetch(newsEndpoint);
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
    } else {
        console.log("Data refreshing not possible in development env.");
    }
};
