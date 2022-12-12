import { objectType } from "nexus";

export const News = objectType({
    name: "News",
    definition(t) {
        t.string("id");
        t.string("sourceName");
        t.string("author");
        t.string("title");
        t.string("description");
        t.string("url");
        t.string("imageUrl");
        t.string("publishedAt");
        t.string("content");
    },
});
