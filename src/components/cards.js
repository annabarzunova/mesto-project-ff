// @todo: Функция создания карточки
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  }
];

function createCard(cardData, onDelete, LikeClick, OpenImage) {
    const cardTemplate = document.querySelector('#card-template').content;

    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
    
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const cardLikeButton = cardElement.querySelector('.card__like-button');
  
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
  
    cardTitle.textContent = cardData.name;
  
    cardImage.addEventListener("click",  () => OpenImage(cardElement));
    cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
    onDelete(cardElement);
    });
    cardLikeButton.addEventListener("click", LikeClick);
    
    return cardElement;
  };

  // @todo: Функция лайка

function LikeClick(evt) { 
    if (evt.target.classList.contains('card__like-button')) {
      console.log(evt);
      evt.target.classList.toggle('card__like-button_is-active'); }
      };

function onDelete(cardElement) {
        cardElement.remove();
      };

export { initialCards, createCard, LikeClick, onDelete };