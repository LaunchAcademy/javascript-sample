$("#show-form").on("click", function(event) {
  event.preventDefault();

  $("#new-article-form").show();
  $("#show-form").hide();
});

$("#new-article-form").on("submit", function(event) {
  var errors = validateArticle($("#title").val(), $("#url").val());

  $(".errors").empty();
  errors.forEach(function(error) {
    $("#new-article-form").append("<p class='errors'>" + error + "</p>");
  });

  return errors.length === 0;
});

function validateArticle(title, url) {
  var errors = [];

  if (title.length === 0) {
    errors.push("Title can't be blank.")
  }

  if (url.length === 0) {
    errors.push("URL can't be blank.")
  } else if (url.indexOf("http") !== 0) {
    errors.push("URL must start with http.")
  }

  return errors;
}
