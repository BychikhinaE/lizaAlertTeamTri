// SIDEBAR
const buttonSidebar = document.querySelector('#sidebar-button');
const iconSidebar = buttonSidebar.querySelector('#sidebar-ico-button');
const panelSidebar = document.querySelector('#sidebar-panel');

let opened = false;


buttonSidebar.onclick = function () {
  if (opened) {
    iconSidebar.classList.remove('sidebar__ico-button_rotated');
    panelSidebar.classList.remove('sidebar__panel_opened');
  } else {
    iconSidebar.classList.add('sidebar__ico-button_rotated');
    panelSidebar.classList.add('sidebar__panel_opened');
  }
  opened = !opened;
};
