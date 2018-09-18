var db = require("../models");

module.exports = function (app) {
    app.get("/", function(req, res) {
        db.Article.find({}).then(function(dbArticle){
            res.render("/index", {
                id: dbArticle.id,
                headline: dbArticle.headline,
                summary: dbArticle.summary,
                saved: dbArticle.saved,
                url: dbArticle.url
            });
        });
    });
}