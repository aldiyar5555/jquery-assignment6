// Part 3: DOM Manipulation
$(document).ready(function () {
  // Task 5 – add & remove elements
  var counter = $("#itemList li").length;

  $("#btnAppend").click(function () {
    counter++;
    $("#itemList").append("<li>Item " + counter + "</li>");   // add to the end
  });

  $("#btnPrepend").click(function () {
    counter++;
    $("#itemList").prepend("<li>Item " + counter + " (prepended)</li>");   // add to the start
  });

  $("#btnRemove").click(function () {
    $("#itemList li").last().remove();   // remove the last item
  });

  // Task 6 – modifying attributes with .attr()
  var images = [
    { src: "https://picsum.photos/seed/forest/480/240", alt: "Picture 1" },
    { src: "https://picsum.photos/seed/ocean/480/240", alt: "Picture 2" },
    { src: "https://picsum.photos/seed/city/480/240", alt: "Picture 3" }
  ];
  var imgIndex = 0;

  $("#btnSrc").click(function () {
    imgIndex = (imgIndex + 1) % images.length;
    $("#swapImg").attr({ src: images[imgIndex].src, alt: images[imgIndex].alt });
  });

  var links = [
    { href: "https://api.jquery.com", text: "api.jquery.com" },
    { href: "https://www.w3schools.com/jquery/", text: "w3schools.com/jquery" }
  ];
  var linkIndex = 0;

  $("#btnHref").click(function () {
    linkIndex = (linkIndex + 1) % links.length;
    $("#dynLink").attr("href", links[linkIndex].href).text(links[linkIndex].text);
  });

  // Task 7 – live form preview with .val() and .text()
  $("#nameInput").on("input", function () {
    var name = $(this).val();
    $("#nameOut").text(name || "—");
  });

  $("#emailInput").on("input", function () {
    var email = $(this).val();
    $("#emailOut").text(email || "—");
  });
});
