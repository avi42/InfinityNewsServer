/* 
* Remember that the reason you are setting up your own server
* is to cache the content. There will not be a login portal atm for this app.
*/

import * as express from 'express';
// import * as admin from 'firebase-admin';

// import {firebaseSdk} from "./res/creds";
import { collectApiResponse } from './sendApiResponse/collectApiResponse';


const router = express.Router();

router.get('/', (request, response) => {
    
    response.set('Cache-Control', 'public, max-age=3600, s-maxage=18000');

    collectApiResponse({}, "headlines").then(articleJson => {
        response.send(articleJson);
    }).catch(err => {
        response.status(404).send();
    });
});

router.get('/topics', (request, response) => {

    response.set('Cache-Control', 'public, max-age=3600, s-maxage=18000');

    try {
        
        const topics : Array<String> = request.query.q.split(",");
        const qstring = topics.join(" OR ");
        
        collectApiResponse({q:qstring}, "everything").then(articleJson => {
            response.send(articleJson);
        }).catch(err => {
            response.status(404).send;
        })

    } catch (error) {
        response.status(404).send();
    } 
});


export = router;