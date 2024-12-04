/* Функция открытия попапов */

function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEscape);
}

/* Функция закрытия попапов c помощью Escape */

function closeByEscape(evt) {
  const openedPopup = document.querySelector(".popup_is-opened");
  if (evt.key === "Escape") closePopup(openedPopup);
}
/* Функция закрытия попапов */

function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEscape);
}

/* Функция закрытия попапов c помощью оверлея */

function closePopupByClick(evt) {
  if (evt.target.matches(".popup_is-opened, .popup__close")) {
    closePopup(evt.target.closest(".popup_is-opened"));
}
}


export { openPopup, closeByEscape, closePopup, closePopupByClick };
