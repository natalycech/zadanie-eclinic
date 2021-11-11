function toggleHamburger() {
  console.log("ahoj");

  var activeClass = "main-menu-area-active";
  var element = document.getElementById("main-menu-area");

  if (element.classList.contains(activeClass)) {
    element.classList.remove(activeClass);
  } else {
    element.classList.add(activeClass);
  }
}
