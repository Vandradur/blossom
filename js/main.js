/**** NAVIGATION ****/
$(".menu").on("click", function () {
  $(this).toggleClass("active");
  $(".nav-bar").toggleClass("menu-open");
});
$(".nav a").on("click", function () {
  $(".menu").removeClass("active");
  $(".nav-bar").removeClass("menu-open");
});

/*   */

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
  });
});

/*  */

$("#carousel").owlCarousel({
  items: 1,
  nav: false,
  dots: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 15000,
  responsive: {
    0: {
      items: 1,
    },
  },
  autoplay: true,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,
});

/**** END ****/

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
