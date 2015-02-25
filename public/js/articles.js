$("#show-form").on("click", function(event) {
  event.preventDefault();

  $("#new-article-form").show();
  $("#show-form").hide();
});

$("#new-article-form").on("submit", function(event) {
  var title = $("#title").val();
  var url = $("#url").val();
  var foundError = false;

  if (title.length === 0) {
    $("#new-article-form").append("<p class='errors'>Title can't be blank.</p>");
    foundError = true;
  }

  if (url.length === 0) {
    $("#new-article-form").append("<p class='errors'>URL can't be blank.</p>");
    foundError = true;
  } else if (url.indexOf("http") !== 0) {
    $("#new-article-form").append("<p class='errors'>URL must start with http.</p>");
    foundError = true;
  }

  if (foundError) {
    return false;
  } else {
    return true;
  }
});
