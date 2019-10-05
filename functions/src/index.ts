import * as functions from 'firebase-functions';
import * as express from 'express';

const app = express();

import api = require("./api");
app.use("/api", api);

app.get('*', (request, response) => {
    response.send("Infinity News is coming soon");
});

exports.app = functions.https.onRequest(app);