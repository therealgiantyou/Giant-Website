document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-icon");
    const phoneNav = document.querySelector(".phone-nav");

    menuButton.addEventListener("click", () => {
      phoneNav.classList.toggle("active");
    });
  });