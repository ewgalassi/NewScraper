var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var noteSchema = new Schema({
    articleId: {type: Schema.Types.ObjectId, ref: "Article" },
    body: String,
});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;