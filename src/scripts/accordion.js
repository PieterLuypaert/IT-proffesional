
// accordion
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".accordion__trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const content = trigger.nextElementSibling;
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";
  
        document.querySelectorAll(".accordion__trigger").forEach((t) => {
          if (t !== trigger) {
            t.setAttribute("aria-expanded", "false");
            t.nextElementSibling.hidden = true;
            t.querySelector(".accordion__icon")?.classList.remove(
              "accordion__icon--rotated"
            );
          }
        });
  
        trigger.setAttribute("aria-expanded", !isExpanded);
        content.hidden = isExpanded;
        trigger
          .querySelector(".accordion__icon")
          ?.classList.toggle("accordion__icon--rotated");
      });
    });
  });
  
  
  
  