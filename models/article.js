module.exports = function (mongoose) {
    var Schema = mongoose.Schema;

    var articleSchema = new Schema({
        id: String,
        headline: String,
        summary: String,
        url: String
    });

    var Article = mongoose.model("Article", articleSchema);
    var SavedArticle = mongoose.model("SavedArticle", articleSchema);
};