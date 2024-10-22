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

export { createCard, LikeClick, onDelete };