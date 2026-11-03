// Part 5: Mini project – Bouncing Ball
$(document).ready(function () {
  var $ball = $("#ball");
  var $court = $("#court");

  var running = false;
  var speed = 1;            // speed multiplier
  var wallBounces = 0;
  var floorBounces = 0;
  var colors = ["#f2b705", "#e4572e", "#29bf12", "#0769ad", "#a259ff"];
  var colorIndex = 0;

  // Limits for the ball inside the court
  function maxX() { return $court.width() - $ball.outerWidth(); }
  function maxY() { return $court.height() * 0.8 - $ball.outerHeight(); } // floor = sand line

  // Horizontal movement: right wall -> left wall -> repeat
  function moveX() {
    if (!running) return;
    var goingRight = $ball.position().left < maxX() / 2;
    var target = goingRight ? maxX() : 0;
    var distance = Math.abs(target - $ball.position().left);

    $ball.animate({ left: target }, {
      duration: (distance * 4) / speed,
      easing: "linear",
      queue: false,                 // run at the same time as the vertical bounce
      complete: function () {
        wallBounces++;
        $("#wallCount").text(wallBounces);
        moveX();
      }
    });
  }

  // Vertical movement: fall to the floor ("swing" easing looks like gravity) and bounce up
  function moveY() {
    if (!running) return;
    $ball.animate({ top: maxY() }, {
      duration: 600 / speed,
      easing: "swing",
      queue: false,
      complete: function () {
        floorBounces++;
        $("#floorCount").text(floorBounces);
        // small squash effect when hitting the floor
        $ball.css("transform", "scale(1.2, 0.8)");
        setTimeout(function () { $ball.css("transform", "none"); }, 80);

        $ball.animate({ top: 20 }, {
          duration: 600 / speed,
          easing: "swing",
          queue: false,
          complete: moveY
        });
      }
    });
  }

  function start() {
    if (running) return;
    running = true;
    moveX();
    moveY();
  }

  function stop() {
    running = false;
    $ball.stop(true);   // stops all running animations of the ball
  }

  // Changing speed: restart the animations with the new value
  function setSpeed(value) {
    speed = Math.min(4, Math.max(0.5, value));
    $("#speedLabel").text(speed + "x");
    if (running) { stop(); start(); }
  }

  $("#btnStart").click(start);
  $("#btnStop").click(stop);
  $("#btnFaster").click(function () { setSpeed(speed + 0.5); });
  $("#btnSlower").click(function () { setSpeed(speed - 0.5); });

  // Click on the ball – change color
  $ball.click(function () {
    colorIndex = (colorIndex + 1) % colors.length;
    $(this).css("background", colors[colorIndex]);
  });
});
