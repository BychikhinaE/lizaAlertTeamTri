const buttonDescrip = document.querySelector('.section-card__button-description');
const cardDescrip = document.querySelector('.description-card');

const buttonBenefits = document.querySelector('.section-card__button-benefits');
const cardBenefits = document.querySelector('.benefits__blok');

const buttonQuestions = document.querySelector('.section-card__button-questions');
const cardQuestions = document.querySelector('.questions__blok');

let clickOpen = false;
//общая функция
function slide (element, title) {
  if  (clickOpen) {
    element.classList.remove('card_hidden');
    title.textContent = 'Свернуть';
  } else {
    element.classList.add('card_hidden');
    title.textContent = 'Развернуть';
  }
  clickOpen = !clickOpen;
}

buttonDescrip.addEventListener('click', function () {
  slide(cardDescrip, buttonDescrip);
});

buttonBenefits.addEventListener('click', function () {
  slide(cardBenefits, buttonBenefits);
});

buttonQuestions.addEventListener('click', function () {
  slide(cardQuestions, buttonQuestions);
});
