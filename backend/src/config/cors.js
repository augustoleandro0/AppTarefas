module.exports = function(req,res, next) {
    res.header('Acess-Control-Alow-Origin', '*')
    res.header('Acess-Control-Alow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE')
    res.header('Acess-Control-Alow-Header','Origin, X-Requested-With, Content-Type, Accept')
    next()
}