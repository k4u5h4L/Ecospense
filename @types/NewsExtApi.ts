export interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: News[];
}

export interface News {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

export interface Source {
    id: string;
    name: string;
}
