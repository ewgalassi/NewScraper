module.exports = function (mongoose) {
    var Schema = mongoose.Schema;

    var articleSchema = new Schema({
        id: String,
        headline: String,
        summary: String,
        saved: Boolean,
        url: String
    });

    var Article = mongoose.model("Article", articleSchema);
    return Article;
};