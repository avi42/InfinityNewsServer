export class NewsArticle{
    
    title: any;
    source: any;
    url: any;
    imageUrl: any;
    publishedAt: any;

    constructor(title: string, source: string, url: string, imageUrl: string, publishedAt: string){
        this.title = title;
        this.source = source;
        this.url = url;
        this.imageUrl = imageUrl;
        this.publishedAt = publishedAt;
    }

    getTitle(){return this.title;}
    getSource(){return this.source;}
    getUrl(){return this.url;}
    getImageUrl(){return this.imageUrl;}
    getPublishedAt(type: string = "string"){
        if(type === "date"){
            try{
                return new Date(this.publishedAt);
            } catch(error){
                return this.publishedAt;
            }
        }
        else{return this.publishedAt;}
    }

    getArticleJson(){
        const articleJson = {
            title: this.getTitle(),
            source: this.getSource(),
            url: this.getUrl(),
            imageUrl: this.getImageUrl(),
            publishedAt: this.getPublishedAt()
        };
        return articleJson;
    }

}