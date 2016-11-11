module.exports = (admin) => {


   // default route to send with all get request
	admin.get('*', (req, res) => res.sendFile('index.html', {root:'./src/frontend/admin'}))

}