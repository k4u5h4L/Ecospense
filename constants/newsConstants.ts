export const NEWS_API_URL =
    "https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=" +
    encodeURIComponent(process.env.NEWS_API_KEY);

export enum NewsCategory {
    BUSINESS = "business",
    ENTERTAINMENT = "entertainment",
    HEALTH = "health",
    SCIENCE = "science",
    SPORTS = "sports",
    TECHNOLOGY = "technology",
}
