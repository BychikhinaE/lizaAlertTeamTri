// SIDEBAR
const buttonSidebar = document.querySelectorAll(".sidebar__button"); // Все кнопки для слайдера

buttonSidebar.forEach((element) => {
  const el = element.closest("li");
  const elIco = el.querySelector(".sidebar__ico-button"); // иконка
  const elPanel = el.querySelector(".sidebar__panel"); //панель
  let heihtEl = elPanel.scrollHeight + "px"; // определяем высоту контента в слайдере
  // проверяем если панель открыта то назначаем высоту контента
  if (
    el
      .querySelector(".sidebar__panel")
      .classList.contains("sidebar__panel_opened")
  ) {
    el.querySelector(".sidebar__panel_opened").style.height = heihtEl;
  }
// вешаем слушатели на все кнопки
  element.addEventListener("click", function () {
    elIco.classList.toggle("sidebar__ico-button_rotated"); // меняем иконку при клике
// проверяем если панель
//если  открыта меняем высоту контента на 0 и закрываем его
//если закрыта открываем панель и задаем высоту контента

    if (
      el
        .querySelector(".sidebar__panel")
        .classList.contains("sidebar__panel_opened")
    ) {
      el.querySelector(".sidebar__panel_opened").style.height = "0";
      elPanel.classList.remove("sidebar__panel_opened");
    } else {
      elPanel.classList.add("sidebar__panel_opened");
      el.querySelector(".sidebar__panel_opened").style.height = heihtEl;
    }
  });
});
