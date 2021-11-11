function toggleMenuAbout() {
  event.stopPropagation();
  document.getElementById("dropdown").classList.toggle("active");
}

window.onclick = function () {
  document.getElementById("dropdown").classList.remove("active");
};