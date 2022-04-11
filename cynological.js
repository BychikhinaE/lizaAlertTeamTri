const allButton = document.querySelectorAll('.section-card__button');
const section = document.querySelectorAll('.JS-lock');

function slide (element, title) {
  if  (element.classList.contains('card-hidden')) {
    element.classList.remove('card-hidden');
    title.textContent = 'Свернуть';
  } else {
    element.classList.add('card-hidden');
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
  if  (allAnswer.classList.contains('card-hidden')) {
    allAnswer.classList.remove('card-hidden');
    icon.alt = 'скрыть ответ';
    icon.style.transform = 'scaleY(-1)'
  } else {
    allAnswer.classList.add('card-hidden');
    icon.alt = 'посмотреть ответ';
    icon.style.transform = 'scaleY(1)'
  }
}

faqButton.forEach(function(item, index){
  item.addEventListener('click', function(){
  slideIcon(icon[index], allAnswer[index])
  })
})
