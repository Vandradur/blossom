/**** NAVIGATION ****/
$(".menu").on("click", function () {
  $(this).toggleClass("active");
  $(".nav-bar").toggleClass("menu-open");
});
$(".nav a").on("click", function () {
  $(".menu").removeClass("active");
  $(".nav-bar").removeClass("menu-open");
});

/**** HERO IMAGE ANIMATION ****/

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() < 1000) {
      $(".hero").css(
        "background-size",
        130 + parseInt($(window).scrollTop() / 5) + "%"
      );
      $(".herotext").css("top", 50 + $(window).scrollTop() * 0.1 + "%");
      $(".herotext").css("opacity", 1 - $(window).scrollTop() * 0.003);
    }
  });
});

/**** sec-06  ****/

$(document).ready(function () {
  $("ul").click(function () {
    $("ul").toggleClass("active");
  });
});

/*** video Gallery ***/

var init = function () {
  $(".panel").on("mouseover", onPanelMouseIn);
  $(".panel").on("mouseout", onPanelMouseOut);
};

var onPanelMouseIn = function (evt) {
  var $target = $(evt.currentTarget);
  var isPlaying = $target.hasClass("active");
  if (isPlaying) return;
  var video = $target.find("video")[0];
  video.play();
  $target.addClass("active");
};

var onPanelMouseOut = function (evt) {
  var $target = $(evt.currentTarget);
  var isPlaying = $target.hasClass("active");
  if (!isPlaying) return;
  var video = $target.find("video")[0];
  video.pause();
  $target.removeClass("active");
};

$(window).ready(init);

/*--- slideshow ---*/

$("#slideshow > div:gt(0)").hide();

setInterval(function () {
  $("#slideshow > div:first")
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo("#slideshow");
}, 3000);
$("#slideshow-2 > div:gt(0)").hide();

setInterval(function () {
  $("#slideshow-2 > div:first")
    .fadeOut(800)
    .next()
    .fadeIn(800)
    .end()
    .appendTo("#slideshow-2");
}, 4000);
$("#slideshow-3 > div:gt(0)").hide();
setInterval(function () {
  $("#slideshow-3 > div:first")
    .fadeOut(900)
    .next()
    .fadeIn(900)
    .end()
    .appendTo("#slideshow-3");
}, 2000);
$("#slideshow-4 > div:gt(0)").hide();
setInterval(function () {
  $("#slideshow-4 > div:first")
    .fadeOut(1800)
    .next()
    .fadeIn(1800)
    .end()
    .appendTo("#slideshow-4");
}, 3000);
