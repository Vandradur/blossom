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

// floating button

$(".menu-off").click(function () {
  $(this).removeClass("menu-off");
  $(this).addClass("menu-on");
  $(".floating-button-menu-close").addClass("menu-on");
});
$(".floating-button-menu-close").click(function () {
  $(this).addClass("menu-off");
  $(this).removeClass("menu-on");
  $(".floating-button-menu").toggleClass("menu-on");
});

// slider

window.onload = function () {
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  prevBtn.addEventListener("click", function () {
    prevSlide();
  });
  nextBtn.addEventListener("click", function () {
    nextSlide();
  });
};
let slideNumber = 0;
const prevSlide = () => {
  const slides = document.getElementsByClassName("slides");
  const slider = document.getElementById("slider");
  const currentSlide = slider.getElementsByClassName("current");
  currentSlide[0].classList.remove("current");
  if (slideNumber == 0) {
    slideNumber = slides.length - 1;
  } else {
    slideNumber = slideNumber - 1;
  }
  slides[slideNumber].classList.add("current");
};
const nextSlide = () => {
  const slides = document.getElementsByClassName("slides");
  const slider = document.getElementById("slider");
  const currentSlide = slider.getElementsByClassName("current");
  currentSlide[0].classList.remove("current");
  if (slideNumber == slides.length - 1) {
    slideNumber = 0;
  } else {
    slideNumber = slideNumber + 1;
  }
  slides[slideNumber].classList.add("current");
};

// End Slider

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

/*--- parallax slide ---*/
$(function () {
  $("nav a").on("click", function (e) {
    console.log(this.hash);
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  });
  // $('.fade').addClass('active')
});
