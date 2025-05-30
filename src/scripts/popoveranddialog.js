document.addEventListener("DOMContentLoaded", function () {
    const markers = document.querySelectorAll(".timeline__marker");
  
    markers.forEach((marker) => {
      const popover = marker.querySelector(".timeline__popover");
  
      marker.addEventListener("mouseover", () => {
        popover.style.display = "block";
        popover.style.left = "20px";
        popover.style.top = "0";
      });
  
      marker.addEventListener("mouseout", () => {
        popover.style.display = "none";
      });
  
      marker.addEventListener("click", () => {
        const dialogId = marker.getAttribute("data-dialog-id");
        const dialog = document.getElementById(dialogId);
        if (dialog) {
          dialog.style.display = "flex";
        }
      });
    });
  
    const closeButtons = document.querySelectorAll(".dialog__close");
    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const dialog = button.closest(".dialog");
        dialog.style.display = "none";
      });
    });
  
    const dialogs = document.querySelectorAll(".dialog");
    dialogs.forEach((dialog) => {
      dialog.addEventListener("click", (e) => {
        if (e.target === dialog) {
          dialog.style.display = "none";
        }
      });
    });
  });
  