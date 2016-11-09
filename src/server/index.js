// loading environment variables
require('dotenv').config();

// getting dependencies
import express from 'express';
import {createServer} from 'http';
import bodyParser from 'body-parser';
var app 		= express();

createServer(app);
// preparing dependencies
app.use(bodyParser.json());

// serving static
app.use(express.static('src/frontend'));

// getting server routes for public
require('./routes/publicRoutes')(app);

app.listen(process.env.PORT);
	console.log('Application started on '+process.env.PORT);