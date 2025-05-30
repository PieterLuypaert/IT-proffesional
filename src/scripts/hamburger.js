document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.querySelector(".nav__list");
  
    toggle?.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", !isExpanded);
      menu?.setAttribute("data-visible", !isExpanded);
    });
  });