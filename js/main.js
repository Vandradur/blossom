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

/****   ****/
