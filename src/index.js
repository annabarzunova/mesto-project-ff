import "./pages/index.css";
import { createCard, handleLikeClick, handleDelete } from "./components/card";
import { initialCards } from "./components/cards";
import {
  openPopup,
  closeByEscape,
  closePopup,
  closePopupByClick,
} from "./components/modal";

// @todo: DOM узлы
const listCard = document.querySelector(".places__list");
const buttonAddCard = document.querySelector(".profile__add-button");
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
const profileAboutInput = profileForm.querySelector(
  ".popup__input_type_description"
);
// для добавления новой карточки
const cardForm = document.querySelector('.popup__form[name="new-place"]');
const nameCardInput = cardForm.elements["place-name"];
const linkCardInput = cardForm.elements.link;

// для открытия изображения

function onImageClick(cardData) {
  const newCard = cardData.closest(".card"),
    cardImage = newCard.querySelector(".card__image"),
    cardTitle = newCard.querySelector(".card__title");

  popupImage.src = cardImage.src;
  popupImage.alt = cardTitle.alt;
  popupCaption.textContent = cardTitle.textContent;

  openPopup(popupImageContainer);
}

function cardRender(container, cardData) {
  container.append(cardData);
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function (obj) {
  cardRender(listCard, createCard(obj, handleDelete, handleLikeClick, onImageClick));
});

/* Обработчики событий (формы, попапы)*/
function openEditProfilePopup() {
  profileNameInput.value = profileTitle.textContent;
  profileAboutInput.value = profileDescription.textContent;
  openPopup(popupEditProfile);
}

//profileAvatarEditButton.addEventListener("click", () => openEditAvatarPopup());
profileEditButton.addEventListener("click", () => openEditProfilePopup());
profileAddButton.addEventListener("click", () => openPopup(popupNewCard));

popups.forEach((popup) => popup.addEventListener("mousedown", closePopupByClick));

// Обработчик «отправки» формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileAboutInput.value;
  const openedPopup = document.querySelector(".popup_is-opened");
  closePopup(openedPopup);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener("submit", handleFormSubmit);

// добавление новой карточки

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCardData = {
    name: nameCardInput.value,
    link: linkCardInput.value,
  };
  const newCard = createCard(newCardData, handleDelete, handleLikeClick, onImageClick);

  listCard.prepend(newCard);
  closePopup(popupNewCard);
  cardForm.reset();
}

cardForm.addEventListener("submit", handleCardFormSubmit);
