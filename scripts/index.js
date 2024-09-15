// @todo: Темплейт карточки


const cardTemplate = document.querySelector('#card-template').content;


// @todo: DOM узлы
const listCard = document.querySelector('.places__list');
const buttonAddCard = document.querySelector('.profile__add-button');

  
// @todo: Функция создания карточки

function createCard(cardData, onDelete) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  cardTitle.textContent = cardData.name;

  cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
  onDelete(cardElement);
  });
  return cardElement;
};


// @todo: Функция удаления карточки

function onDelete(cardElement) {
  cardElement.remove();
};

function cardRender(container, cardData){
  container.append(cardData);
};


// @todo: Вывести карточки на страницу

initialCards.forEach(function(obj) {
  cardRender(listCard, createCard(obj, onDelete));
});
