import * as express from 'express';
import * as admin from 'firebase-admin';

import {firebaseSdk} from "./creds";


const router = express.Router();

router.get('/', (request, response) => {
    response.send("reached api");
});

export = router;