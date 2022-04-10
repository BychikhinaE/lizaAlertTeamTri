// SIDEBAR
const buttonSidebar = document.querySelectorAll(".sidebar__button");


buttonSidebar.forEach((element) =>
  element.addEventListener("click", function () {
    const el = element.closest("li");
    const elIco = el.querySelector(".sidebar__ico-button");
    const elPanel = el.querySelector(".sidebar__panel");
    elIco.classList.toggle("sidebar__ico-button_rotated");
    elPanel.classList.toggle("sidebar__panel_opened");
  })
);

