var cakes = require('../controllers/cakes');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.get('/cakes', function(req, res){
        cakes.index(req, res);
    });
    app.get('/cakes/:id', function(req, res){
        cakes.getOne(req, res);
    });
    app.post('/cakes/', function(req, res){
        console.log("REQUEST BODY:", req.body);
        cakes.create(req, res);
    });
    app.put("/cakes/:id",function(req, res){
        cakes.edit(req, res);
    });
    app.delete("/cakes/:id", function(req, res){
        cakes.delete(req, res);
    })
}