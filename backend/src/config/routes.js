const express = require('express')

module.exports = function(server){
	
	//API Routers
	const router = express.Router()
	server.use('/api', router)

	//TODO Routers
	const todoService = require('../api/todo/todoService')
	todoService.register(router, '/todos')

}