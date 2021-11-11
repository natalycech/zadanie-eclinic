function scrolledMainMenu() {
  var scrolledClass = "main-menu-area-scrolled";
  var element = document.getElementById("main-menu-area");

  if (window.pageYOffset > 0) {
    element.classList.add(scrolledClass);
  } else {
    element.classList.remove(scrolledClass);
  }
}
