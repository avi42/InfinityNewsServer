import creds from "./creds.json";

const newsKey = creds.newsapi.key;
const firebaseSdk = creds.firebase.adminsdk;

export {newsKey, firebaseSdk}