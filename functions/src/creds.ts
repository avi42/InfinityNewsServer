import creds from "./res/creds.json";

const mongoUri = creds.mongodb.uri;
const newsKey = creds.newsapi.key;
const firebaseSdk = creds.firebase.adminsdk;

export {mongoUri, newsKey, firebaseSdk}