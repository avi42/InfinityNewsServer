import {getLastWeekDateStr} from "./helper/lastWeekDateStr";
import {newsKey} from "../../res/creds/creds"

export const defaultParams = {
    language: "en",
    sortBy: "relevancy",
    from: getLastWeekDateStr(),
    sources: "abc-news,associated-press,axios,bbc-news,bloomberg,politico,the-hill,the-wall-street-journal,reuters,fortune",
    pageSize: 20,
    apiKey: newsKey
};