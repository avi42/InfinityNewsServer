//Just a stack of imports
import * as defaultParams from "./res/defaultParams";
import * as apiUris from "./res/apiUri.json";
import * as qs from "qs";
import axios from 'axios';
import { NewsArticle } from "../newsArticle/NewsArticle";

//Export class to make a request to the NewsAPI and deliver the results
export class NewsApiRequest {

    //Constructor to create API parameters
    params: any;
    baseApiUri: string;
    constructor(params: object, uriType: string) {
        //Adds constructor parameters to default parameters
        this.params = Object.assign({}, defaultParams.defaultParams, params);

        //Sets base API URI
        if(uriType === "everything") this.baseApiUri = apiUris.everything;
        else if(uriType === "headlines") this.baseApiUri = apiUris.headlines;
        else{this.baseApiUri = apiUris.headlines;}
    }

    //Combines the base API Uri and the parameter string into the full API Uri
    private getApiUri() {
        const paramsStr = qs.stringify(this.params, { encode: false });
        return this.baseApiUri.concat(paramsStr);
    }

    //Export function to make the Api request and send the results as instances of the NewsArticle class
    private makeApiRequest(apiUri: string) {

        //Get Uri for API call
        console.log(apiUri);

        //Wraps the API request in a promise
        return new Promise(function (resolve, reject) {

            //Axios handles get request through async get function
            axios.get(apiUri)
                .then(response => {

                    //If the status property of the response body reads ok, the full body of the API response is sent back
                    if (response.data.status === "ok") {
                        resolve(response.data);
                    } else {
                        console.log("response is not ok");
                        reject(Error("API failed"))
                    }
                })
                .catch(err => {
                    console.log(err);
                    reject(Error("API failed"));
                })
        });
    }

    getArticles() {

        const makeApiRequest = this.makeApiRequest;
        const apiUri = this.getApiUri();

        return new Promise(function (resolve, reject) {
            makeApiRequest(apiUri)
            .then(function (apiResponse: any) {

                //Checks if the API response has the articles array
                if (apiResponse.hasOwnProperty("articles")) {

                    //Declares an array of NewsArticle objects to return
                    var articles = [];

                    //Populates the array with each article returned by the API
                    const articlesJson = apiResponse.articles;
                    for (var articleNum in articlesJson) {
                        const articleJson = articlesJson[articleNum.toString()];
                        const article = new NewsArticle(
                            articleJson.title,
                            articleJson.source.name,
                            articleJson.url, 
                            articleJson.urlToImage,
                            articleJson.publishedAt
                        );
                        articles.push(article);
                    }

                    //Returns the array of news articles
                    resolve(articles);
                
                //If there is no articles array in the response, error will be thrown
                } else {
                    reject(Error("Something failed"));
                }

            }).catch(err => {
                reject(Error("API failed"));
            });
        });
    }

}
