//import * as config from 'config';
// import './types';
//
// let server:any;
//
// const port = config.get('express.port');
//
// const debugPort = config.get('express.debug');

import * as express from 'express';
import {Application} from "express";
const app: Application = express();

app.route('/api/test').get( (req, res) => {

    res.status(200).json({"message": 'hello'});
});

app.listen(8090, () => {
    console.log('server is running' );
});

