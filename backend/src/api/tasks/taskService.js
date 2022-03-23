const Task = require('./tasks')

Task.methods(['get','post','put','delete'])
Task.updateOptions({new: true, runValidate: true})

module.exports =  Task