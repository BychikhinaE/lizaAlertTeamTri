const allButton = document.querySelectorAll('.section-card__button');
const section = document.querySelectorAll('.JS-lock');

function slide (element, title) {
  if  (element.classList.contains('card_hidden')) {
    element.classList.remove('card_hidden');
    title.textContent = 'Свернуть';
  } else {
    element.classList.add('card_hidden');
    title.textContent = 'Развернуть';
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
  if  (allAnswer.classList.contains('card_hidden')) {
    allAnswer.classList.remove('card_hidden');
    icon.alt = 'скрыть ответ';
    icon.style.animation = 'up .3s forwards'
  } else {
    allAnswer.classList.add('card_hidden');
    icon.alt = 'посмотреть ответ';
    icon.style.animation = 'down .3s forwards'
  }
}

faqButton.forEach(function(item, index){
  item.addEventListener('click', function(){
  slideIcon(icon[index], allAnswer[index])
  })
})
