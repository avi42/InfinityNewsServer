import { NewsArticle } from "../newsArticle/NewsArticle";
import { NewsApiRequest } from "../newsApi/NewsApiRequest";

export function collectApiResponse(params: Object, uriType: string) {
    const newsApiRequest = new NewsApiRequest(params, uriType);
    return new Promise(function (resolve, reject) {
        newsApiRequest.getArticles()
            .then((articles: any) => {

                if (articles instanceof Array) {

                    var responseArr: Array<Object> = [];

                    articles.forEach(article => {
                        if (article instanceof NewsArticle) {
                            responseArr.push(article.getArticleJson());
                        }
                    });

                    resolve(responseArr);
                }

                else reject("Someting failed");

            }).catch((err: any) => {
                console.log(err);
                reject("Something failed");
            });
    });
}