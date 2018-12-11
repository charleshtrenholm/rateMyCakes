var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cake_werld');

const ratingSchema = new mongoose.Schema({
    value: {type: Number, required: true, default: 5},
    comment: {type: String, required: true, default: ""}
})

const cakeSchema = new mongoose.Schema({
    baker: {type: String, required: true, default:""},
    imageURL: {type: String, required: true, default: ""},
    ratings: {type: [ratingSchema]}
}, {timestamps:true});



mongoose.model("Cake", cakeSchema);
mongoose.model("Rating", ratingSchema);

module.exports = {
    Cake: mongoose.model("Cake"),
    Rating: mongoose.model("Rating")
}