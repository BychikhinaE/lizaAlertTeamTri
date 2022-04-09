// SIDEBAR
const buttonSidebar = document.querySelectorAll("#sidebar-button");
const iconSidebar = document.querySelector("#sidebar-ico-button");
const panelSidebar = document.querySelector("#sidebar-panel");

buttonSidebar.forEach((element) =>
  element.addEventListener("click", function () {
    const el = element.closest("li");
    const elIco = el.querySelector("#sidebar-ico-button");
    const elPanel = el.querySelector("#sidebar-panel");
    elIco.classList.toggle("sidebar__ico-button_rotated");
    elPanel.classList.toggle("sidebar__panel_opened");
  })
);
