var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    summary: {
        type: String
    },
    saved: Boolean,
    url: {
        type: String,
        unique: true
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;