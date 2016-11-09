// use ES6 expresstions
import * as User from '../models/userModel';

module.exports = (app) => {

	// register api
	app.post('/api/register', (req, res) => User.register(req.body, (result) => res.send(result) ) );

	// default route to send with all get request
	app.get('*', (req, res) => res.sendFile('index.html', {root:'./src/frontend/public'}))

}