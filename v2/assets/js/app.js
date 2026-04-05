(function () {
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (!navToggle || !primaryNav) return;

  navToggle.addEventListener("click", function () {
    const isOpen = primaryNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", function (event) {
    const isClickInsideNav = primaryNav.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle && primaryNav.classList.contains("open")) {
      primaryNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
})();
