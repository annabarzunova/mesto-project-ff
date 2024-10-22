import "./pages/index.css";

import { createCard, LikeClick, onDelete } from './components/card';

import { initialCards } from './components/cards';

import { openPopup, closeByEscape, closePopup, closeByOverlay} from './components/modal';
// @todo: Функция создания карточки

// @todo: Темплейт карточки


//const cardTemplate = document.querySelector('#card-template').content;


// @todo: DOM узлы
const listCard = document.querySelector('.places__list');
const buttonAddCard = document.querySelector('.profile__add-button');


const profile = document.querySelector(".profile");
const profileAvatarEditButton = profile.querySelector(".profile__image");
const profileEditButton = profile.querySelector(".profile__edit-button");
const profileTitle = profile.querySelector(".profile__title");
const profileDescription = profile.querySelector(".profile__description");
const profileAddButton = profile.querySelector(".profile__add-button");

const popups = document.querySelectorAll(".popup");
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupImageContainer = document.querySelector(".popup_type_image");
const popupImage = popupImageContainer.querySelector(".popup__image");
const popupCaption = popupImageContainer.querySelector(".popup__caption");

  // для edit-profile
const profileForm = document.querySelector('.popup__form[name="edit-profile"]');
const profileNameInput = profileForm.querySelector(".popup__input_type_name");
const profileAboutInput = profileForm.querySelector(".popup__input_type_description");
// для добавления новой карточки
const cardForm = document.querySelector('.popup__form[name="new-place"]');
const nameCardInput = cardForm.elements['place-name'];
const linkCardInput = cardForm.elements.link;
 
// для открытия изображения

  
// @todo: Функция создания карточки

/* function createCard(cardData, onDelete, LikeClick, OpenImage) {
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
};*/

function OpenImage(cardData) {
  const newCard = cardData.closest(".card"),
    cardImage = newCard.querySelector(".card__image"),
    cardTitle = newCard.querySelector(".card__title");

  popupImage.src = cardImage.src;
  popupImage.alt = cardTitle.alt;
  popupCaption.textContent = cardTitle.textContent;

  openPopup(popupImageContainer);
};

// @todo: Функция лайка

/* 
function LikeClick(evt) {
if (evt.target.classList.contains('card__like-button')) {
  console.log(evt);
  evt.target.classList.toggle('card__like-button_is-active'); }
  };*/
  
// @todo: Функция удаления карточки
/* 
function onDelete(cardElement) {
  cardElement.remove();
};*/

function cardRender(container, cardData){
  container.append(cardData);
};


// @todo: Вывести карточки на страницу

initialCards.forEach(function(obj) {
  cardRender(listCard, createCard(obj, onDelete, LikeClick, OpenImage));
});

/* Функция открытия попапов 

function openPopup(popup) {
  popup.classList.add("popup_is-opened"); 

  document.addEventListener("keydown", closeByEscape);
}

/* Функция закрытия попапов */



/* Функция закрытия попапов c помощью Escape 

function closeByEscape(evt) {
  const openedPopup = document.querySelector(".popup_is-opened");

  if (evt.key === "Escape") closePopup(openedPopup);
}
/* Функция закрытия попапов 


function closePopup(popup) {
  popup.classList.remove("popup_is-opened");

  document.removeEventListener("keydown", closeByEscape);
} 
/* Функция закрытия попапов c помощью оверлея 
function closeByOverlay(evt) {
  const openedPopup = document.querySelector(".popup_is-opened");

  if (evt.target.matches(".popup_is-opened, .popup__close"))
    closePopup(openedPopup);
}



 /* Обработчики событий (формы, попапы)*/
 function openEditProfilePopup() {
  profileNameInput.value = profileTitle.textContent;
  profileAboutInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
}


//profileAvatarEditButton.addEventListener("click", () => openEditAvatarPopup());
profileEditButton.addEventListener("click", () => openEditProfilePopup());
profileAddButton.addEventListener("click", () => openPopup(popupNewCard));

popups.forEach((popup) => popup.addEventListener("mousedown", closeByOverlay));



/* const profileForm = document.querySelector('.popup__form[name="edit-profile"]');
// Находим поля формы в DOM
const profileNameInput = profileForm.querySelector(".popup__input_type_name");
const profileAboutInput = profileForm.querySelector(  ".popup__input_type_description");*/


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); 
    profileTitle.textContent = profileNameInput.value;
    profileDescription.textContent = profileAboutInput.value;

    const openedPopup = document.querySelector(".popup_is-opened");
    closePopup(openedPopup);
    // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    
    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', handleFormSubmit); 

// добавление новой карточки

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const newCardData = {
    name: nameCardInput.value,
    link: linkCardInput.value,
  }
  const newCard = createCard(newCardData, onDelete, LikeClick);


  listCard.prepend(newCard);
  closePopup(popupNewCard);
  cardForm.reset();
}

cardForm.addEventListener("submit", handleCardFormSubmit);

