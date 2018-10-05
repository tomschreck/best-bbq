'use strict';
'use latest';

import express from 'express';
import { fromExpress } from 'webtask-tools';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/styles'));

require('./routes/index')(app);

module.exports = fromExpress(app);
