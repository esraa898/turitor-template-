let closeX = document.getElementById("closeX");
let collapse_done = document.getElementById("toggle-collapse");
let overlay_view = document.getElementById("overlay-get");
let show_collapse = document.querySelector(".collapse");

closeX.addEventListener("click", function () {
  show_collapse.classList.remove("show");
  overlay_view.style.display = "none";
});

collapse_done.addEventListener("click", function () {
  overlay_view.style.display = "block";
});
