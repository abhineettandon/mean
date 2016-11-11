// loading environment variables
require('dotenv').config();

// getting dependencies
import express from 'express';
import {createServer} from 'http';
import bodyParser from 'body-parser';
var app 	= express();
var admin 	= express();

createServer(app);
createServer(admin);

// preparing dependencies
app.use(bodyParser.json());
admin.use(bodyParser.json());

// serving static
app.use(express.static('src/frontend'));
admin.use(express.static('src/frontend'));

// getting server routes for public
require('./routes/publicRoutes')(app);
require('./routes/adminRoutes')(admin);

app.listen(process.env.PORT);
	console.log('Application started on '+process.env.PORT);

admin.listen(process.env.ADMIN_PORT);
	console.log('Admin Started at '+process.env.ADMIN_PORT);