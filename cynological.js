const allButton = document.querySelectorAll('.section-card__button');
const section = document.querySelectorAll('.JS-lock');

function slide (element, title) {
  let elHeight = element.scrollHeight;
  if  (element.classList.contains('card-hidden')) {
    element.classList.remove('card-hidden');
    title.textContent = 'Свернуть';
    element.style.minHeight = elHeight + 'px';
  } else {
    element.classList.add('card-hidden');
    title.textContent = 'Развернуть';
    element.style.minHeight = 0;
  }
}

allButton.forEach(function(item, index){
  item.addEventListener('click', function(){
  slide(section[index], item)
  })
})

const faqButton = document.querySelectorAll('.questions__subheader');
const icon = document.querySelectorAll('.questions__hide-img');
const allAnswer = document.querySelectorAll('.questions__answer');

function slideIcon (icon, allAnswer) {
  if  (allAnswer.classList.contains('card-hidden')) {
    allAnswer.classList.remove('card-hidden');
    icon.alt = 'скрыть ответ';
    icon.style.animation = 'up .3s forwards'
  } else {
    allAnswer.classList.add('card-hidden');
    icon.alt = 'посмотреть ответ';
    icon.style.animation = 'down .3s forwards'
  }
}

faqButton.forEach(function(item, index){
  item.addEventListener('click', function(){
  slideIcon(icon[index], allAnswer[index])
  })
})
