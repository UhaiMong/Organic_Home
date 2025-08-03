document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const navForMobile = document.getElementById("navForMobile");
  const navItems = navForMobile.querySelectorAll("a");
  const mainContent = document.getElementById("mainContent");

  function openMobileNav() {
    navForMobile.classList.add("active");
    mainContent.classList.add("mobile-nav-active");
    document.body.style.overflow = "hidden";
  }
  function closeMobileNav() {
    navForMobile.classList.remove("active");
    mainContent.classList.remove("mobile-nav-active");
    document.body.style.overflow = "auto";
  }

  menuButton.addEventListener("click", function (e) {
    e.stopPropagation();
    if (navForMobile.classList.contains("active")) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      closeMobileNav();
    });
  });
  // Delete clicking outside
  document.addEventListener("click", function (e) {
    if (!navForMobile.contains(e.target) && !menuButton.contains(e.target)) {
      closeMobileNav();
    }
  });
});
