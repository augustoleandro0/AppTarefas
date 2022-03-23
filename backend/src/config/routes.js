

const express = require('express');

 module.exports = function(app){

    //Api router 
    const router = express.Router();
    app.use('/api', router)

    //Task Router 
    const taskService = require('../api/tasks/taskService')
    taskService.register(router,'/tasks')

}