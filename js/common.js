// Shared code for every page: Task 0 check + highlight the current navbar link
$(document).ready(function () {
  console.log("jQuery is ready!");

  // Find the current file name (e.g. "effects.html") and mark that link as active
  var page = window.location.pathname.split("/").pop() || "index.html";
  $(".navbar a.link[href='" + page + "']").addClass("active");
});
