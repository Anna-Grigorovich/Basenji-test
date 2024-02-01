function openModal(
  commentTitle,
  commentDate,
  commentStars,
  username,
  commentText,
  developerResponseTitle,
  developerResponseText,
) {
  const modalComment = document.getElementById('comment-modal');
  const modalText = document.getElementById('comment-modal-text');

  // HTML для комментария и ответа
  const modalContent = `
    <div class="comment-card">
      <div class="comment-card__backdrop" onclick="closeModalComment()"></div>
      <div class="comment-card__main">
        <span class="close-button" onclick="closeModalComment()">Back</span>
        <div class="review-item__main">
          <span class="review-item__title">${commentTitle}</span>
          <div class="review-item__date">${commentDate}</div>
        </div>
        <div class="review-item__info">
          <div class="review-item__rating">
            ${commentStars}
          </div>
          
        </div>
        <div class="review-item__text">${commentText}</div>
        ${
          developerResponseTitle && developerResponseText
            ? `
              <div class="review-item__answer">
                <div class="review-item__answer-main">
                  <span class="review-item__answer-title">${developerResponseTitle}</span>
                </div>
                <div class="review-item__answer-text">${developerResponseText}</div>
              </div>
            `
            : ''
        }
      </div>
    </div>
  `;

  modalText.innerHTML = modalContent;
  modalComment.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModalComment() {
  const modalComment = document.getElementById('comment-modal');
  modalComment.style.display = 'none';
}

// обработчик событий для родительского элемента
const reviewsWrapComment = document.getElementById('reviews-wrap');

reviewsWrapComment.addEventListener('click', function (event) {
  const target = event.target.closest('.app__review-item');

  if (target) {
    const commentTitle = target.querySelector('.review-item__title').innerText;
    const commentDate = target.querySelector('.review-item__date').innerText;
    const commentStars = target.querySelector('.review-item__rating').innerHTML;
    const username = target.querySelector('.review-item__username').innerText;
    const commentText = target.querySelector('.review-item__text').innerText;

    // Добавлено условие, чтобы проверить наличие элемента .review-item__answer-title и .review-item__answer-text
    const answerTitleElement = target.querySelector(
      '.review-item__answer-title',
    );
    const answerTextElement = target.querySelector('.review-item__response');

    const developerResponseTitle = answerTitleElement
      ? answerTitleElement.innerText
      : '';
    const developerResponseText = answerTextElement
      ? answerTextElement.innerText
      : '';

    openModal(
      commentTitle,
      commentDate,
      commentStars,
      username,
      commentText,
      developerResponseTitle,
      developerResponseText,
    );
  }
});
