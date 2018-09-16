module.exports = function (mongoose) {
    var Schema = mongoose.Schema;

    var noteSchema = new Schema({
        articleId: String,
        body: String,
    });

    var Note = mongoose.model("Note", noteSchema);
};