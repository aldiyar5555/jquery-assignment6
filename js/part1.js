// Part 1: Setup & Selectors
$(document).ready(function () {
  // Task 0 – show on the page that jQuery works
  $("#readyStatus").text("jQuery is ready! (version " + $.fn.jquery + ")").css("color", "green");

  // Save original content so Reset can restore it
  var original = {
    id: $("#byId").html(),
    cls: $(".byClass").first().html(),
    tag: $("h3").html()
  };

  // .text() – sets plain text (HTML tags are NOT parsed)
  $("#btnText").click(function () {
    $("#byId").text("Changed by ID with .text() — <b>tags are shown as text</b>");
    $(".byClass").text("Changed by class with .text()");
    $("h3").text("Changed by tag with .text()");
  });

  // .html() – sets HTML content (tags ARE parsed)
  $("#btnHtml").click(function () {
    $("#byId").html("Changed by ID with <b>.html()</b> — <i>tags work</i>");
    $(".byClass").html("Changed by class with <mark>.html()</mark>");
    $("h3").html("Changed by tag with <u>.html()</u>");
  });

  // .css() – one property or an object with several properties
  $("#btnCss").click(function () {
    $("#byId").css("background-color", "#fff3c4");
    $(".byClass").css({
      color: "#0769ad",
      "font-weight": "bold",
      "border-color": "#0769ad"
    });
    $("h3").css({ "font-style": "italic", "letter-spacing": "1px" });
  });

  // Reset content and remove inline styles
  $("#btnReset").click(function () {
    $("#byId").html(original.id).removeAttr("style");
    $(".byClass").html(original.cls).removeAttr("style");
    $("h3").html(original.tag).removeAttr("style");
  });
});
