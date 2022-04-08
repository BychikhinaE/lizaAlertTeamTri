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
