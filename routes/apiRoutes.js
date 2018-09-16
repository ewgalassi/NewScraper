var db = require("../models");

module.exports = function (app) {
    app.get("/api/articles", function (req, res) {
        db.Article.find().then(function (dbArticle) {
            res.json(dbArticle);
        });
    });

    app.get("/api/saved", function (req, res) {
        db.SavedArticle.find().then(function (dbArticle) {
            res.json(dbArticle);
        });
    });
}