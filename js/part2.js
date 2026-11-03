// Part 2: Effects
$(document).ready(function () {
  // Task 2 – visibility
  $("#btnHide").click(function () {
    $("#hideMe").hide(400);
  });
  $("#btnShow").click(function () {
    $("#hideMe").show(400);
  });
  $("#btnToggle").click(function () {
    $("#hideMe").toggle(400);
  });

  // Task 3 – fade
  $("#btnFadeOut").click(function () {
    $("#fadeImg").fadeOut(800);
  });
  $("#btnFadeIn").click(function () {
    $("#fadeImg").fadeIn(800);
  });
  $("#btnFadeToggle").click(function () {
    $("#fadeImg").fadeToggle("slow");
  });

  // Task 4 – slide (clicking the panel header also toggles it)
  $("#btnSlideUp").click(function () {
    $("#panel").slideUp();
  });
  $("#btnSlideDown").click(function () {
    $("#panel").slideDown();
  });
  $("#btnSlideToggle, .panel-head").click(function () {
    $("#panel").slideToggle();
  });
});
