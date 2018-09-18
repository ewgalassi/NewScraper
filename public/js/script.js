$(document).ready(function() {

    $(document).on("click", ".saveArticle", function() {
        $.ajax({
            url: "api/index/" + id,
            method: "PUT"
        }).then(function() {
            location.reload();
        });
    });

    $(document).on("click", ".unsaveArticle", function() {
        $.ajax({
            url: "api/saved/" + id,
            method: "PUT"
        }).then(function() {
            location.reload();
        });
    });

})