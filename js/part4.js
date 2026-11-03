// Part 4: Animations
$(document).ready(function () {
  var start = { left: "10px", top: "10px", width: "60px", height: "60px", opacity: 1 };

  // Task 8 – basic animation: bigger size + new position
  $("#btnAnim8").click(function () {
    $("#box8").animate({
      left: "200px",
      top: "60px",
      width: "120px",
      height: "120px"
    }, 1000);
  });
  $("#btnReset8").click(function () {
    $("#box8").stop(true).animate(start, 500);
  });

  // Task 9 – sequential animations (jQuery puts them in a queue and runs one after another)
  $("#btnAnim9").click(function () {
    var $box = $("#box9");
    var $btn = $(this).prop("disabled", true);

    $box
      .animate({ left: "300px" }, 800)                    // 1. move right
      .animate({ top: "170px" }, 800)                     // 2. move down
      .animate({ width: "30px", height: "30px" }, 600)    // 3. shrink
      .animate(start, 1000, function () {                 // 4. return to original
        $btn.prop("disabled", false);
      });
  });

  // Task 10 – combined animation: opacity + size + movement in ONE call
  $("#btnAnim10").click(function () {
    $("#box10").animate({
      left: "250px",
      top: "100px",
      width: "130px",
      height: "130px",
      opacity: 0.3
    }, 1500);
  });
  $("#btnReset10").click(function () {
    $("#box10").stop(true).animate(start, 500);
  });
});
