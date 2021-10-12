let closeX = document.getElementById("closeX");
let collapse_done = document.getElementById("toggle-collapse");
let overlay_view = document.getElementById("overlay-get");
let show_collapse = document.querySelector(".collapse");

// close slide bar
closeX.addEventListener("click", function () {
  show_collapse.classList.remove("show");
  overlay_view.style.display = "none";
});
// ovelay slide bar appear
collapse_done.addEventListener("click", function () {
  overlay_view.style.display = "block";
});

// image slider
$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  center: true,
  autoWidth: true,
  items: 1,
  // autoplay: true,
  // autoplayTimeout: 6000,
  // autoplayHoverPause: true,
  autoHeight: true,
  autoHeightClass: ".header-start",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
// logo slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  slidesPerGroup: 5,
  loop: true,
  // autoplay: true,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  mousewheel: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
