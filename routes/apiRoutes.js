var db = require("../models");
var request = require("request");

module.exports = function (app) {

    app.get("/", function (req, res) {
        request("https://www.theonion.com", function (error, response, html) {
            var $ = cheerio.load(html);
            var results = [];
            $("article").each(function (i, element) {

                var headline = $(element).children().children("h1").text();
                var summary = $(element).children("p").text();
                var url = $(element).children().children("h1").attr("href");

                results.push({
                    headline: headline,
                    summary: summary,
                    saved: false,
                    url: url
                });
            });
        });
        db.Article.insert({ results }).then(function (dbArticle) {
            res.json(dbArticle);
        });
    });

    app.get("/saved", function (req, res) {
        db.SavedArticle.find({ saved: true }).then(function (dbArticle) {
            res.json(dbArticle);
        });
    });
}