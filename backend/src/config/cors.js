module.exports = function(req, res, next){
	// response
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIOINS, PUT, PATH, DELETE')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept')
	next()
}