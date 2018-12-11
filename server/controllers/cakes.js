const Cake = require('../models/cake').Cake
const Rating = require('../models/cake').Rating

module.exports = {
    create: function(req, res){
        console.log("REQUEST BODY::::::::>", req.body);
        let cake = new Cake
        cake.baker = req.body.baker;
        cake.imageURL = req.body.imageURL;
        cake.save(function(err){
            if(err) console.log("ERRRRRROR:::", err);
        })
        res.json({message: "SuCcEsS"});
    },
    index: function(req, res){
        Cake.find({}, function(err, data){
            if(err){
                console.log(err);
            } else {
                res.json(data);
            }
        })
    },
    edit: function(req, res){
        console.log("REQUEST BODY FOR COMMENTS>>>", req.body)
        console.log("REQ.PARAMS.ID", req.params.id);
        var rating = new Rating({value: Number(req.body.rating), comment: req.body.comment})
        rating.save(function(err){
            console.log(rating)
            if(err) console.log(err);
            Cake.updateOne({_id: req.params.id}, {$push: {ratings: rating}}, function(err){
            if(err) {console.log(err);
            res.json(err)
            }
        })
    })
        res.json({message: "Successfully added rating"});
    }
}