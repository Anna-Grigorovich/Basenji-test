const modalImage = document.getElementById('modal-image');
const modal = document.getElementById('modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const imageContainer = document.getElementById('image-container');

imageContainer.addEventListener('click', function (event) {
  const targetImage = event.target.closest('.content-image');
  if (targetImage) {
    openImageModal(targetImage.src);
  }
});

function openImageModal(imageUrl) {
  modalImage.src = imageUrl;
  modal.classList.add('active');
}

function closeImageModal() {
  modal.classList.remove('active');
}

modalBackdrop.addEventListener('click', closeImageModal);
modalImage.addEventListener('click', closeImageModal);

// Код для комментариев
// const modalComment = document.getElementById('comment-modal');
// const modalText = document.getElementById('comment-modal-text');
// const reviewsWrapComment = document.getElementById('reviews-wrap');

// reviewsWrapComment.addEventListener('click', function (event) {
//   const moreButton = event.target.closest(
//     '.sm-landing-appstore-app-1-section-text__more',
//   );

//   if (moreButton) {
//     const target = moreButton.closest('.app__review-item');

//     if (target) {
//       const commentTitle = target.querySelector(
//         '.review-item__title',
//       ).innerText;
//       const commentDate = target.querySelector('.review-item__date').innerText;
//       const commentStars = target.querySelector(
//         '.review-item__rating',
//       ).innerHTML;
//       const username = target.querySelector('.review-item__username').innerText;
//       const commentText = target.querySelector('.review-item__text').innerText;

//       //  условие, чтобы проверить наличие элемента .review-item__answer-title и .review-item__answer-text
//       const answerTitleElement = target.querySelector(
//         '.review-item__answer-title',
//       );
//       const answerTextElement = target.querySelector('.review-item__response');

//       const developerResponseTitle = answerTitleElement
//         ? answerTitleElement.innerText
//         : '';
//       const developerResponseText = answerTextElement
//         ? answerTextElement.innerText
//         : '';

//       openCommentModal(
//         commentTitle,
//         commentDate,
//         commentStars,
//         username,
//         commentText,
//         developerResponseTitle,
//         developerResponseText,
//       );
//     }
//   }
// });

// function openCommentModal(
//   commentTitle,
//   commentDate,
//   commentStars,
//   username,
//   commentText,
//   developerResponseTitle,
//   developerResponseText,
// ) {
//   const modalContent = `
//     <div class="comment-card">
//       <div class="comment-card__backdrop" onclick="closeCommentModal()"></div>
//       <div class="comment-card__main">
//         <span class="close-button" onclick="closeCommentModal()">Back</span>
//         <div class="review-item__main">
//           <span class="review-item__title">${commentTitle}</span>
//           <div class="review-item__date">${commentDate}</div>
//         </div>
//         <div class="review-item__info">
//           <div class="review-item__rating">
//             ${commentStars}
//           </div>
//           <div class="review-item__username">${username}</div>
//         </div>
//         <div class="review-item__text">${commentText}</div>
//         ${
//           developerResponseTitle && developerResponseText
//             ? `
//               <div class="review-item__answer">
//                 <div class="review-item__answer-main">
//                   <span class="review-item__answer-title">${developerResponseTitle}</span>
//                 </div>
//                 <div class="review-item__answer-text">${developerResponseText}</div>
//               </div>
//             `
//             : ''
//         }
//       </div>
//     </div>
//   `;

//   modalText.innerHTML = modalContent;
//   modalComment.style.display = 'block';
// }

// function closeCommentModal() {
//   const modalComment = document.getElementById('comment-modal');
//   modalComment.style.display = 'none';
// }
const modalComment = document.getElementById('comment-modal');
const modalText = document.getElementById('comment-modal-text');
const reviewsWrapComment = document.getElementById('reviews-wrap');

reviewsWrapComment.addEventListener('click', function (event) {
  const moreButton = event.target.closest(
    '.sm-landing-appstore-app-1-section-text__more',
  );

  if (moreButton) {
    const target = moreButton.closest('.app__review-item');

    if (target) {
      const commentTitle = target.querySelector(
        '.review-item__title',
      ).innerText;
      const commentDate = target.querySelector('.review-item__date').innerText;
      const commentStars = target.querySelector(
        '.review-item__rating',
      ).innerHTML;
      const username = target.querySelector('.review-item__username').innerText;
      const commentText = target.querySelector('.review-item__text').innerHTML;

      //  условие, чтобы проверить наличие элемента .review-item__answer-title и .review-item__answer-text
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

      openCommentModal(
        commentTitle,
        commentDate,
        commentStars,
        username,
        commentText,
        developerResponseTitle,
        developerResponseText,
      );
    }
  }
});

// function openCommentModal(
//   commentTitle,
//   commentDate,
//   commentStars,
//   username,
//   commentText,
//   developerResponseTitle,
//   developerResponseText,
// ) {
//   const modalContent = `
//     <div class="comment-card">
//       <div class="comment-card__backdrop" onclick="closeCommentModal()"></div>
//       <div class="comment-card__main">
//         <span class="close-button" onclick="closeCommentModal()">Back</span>
//         <div class="review-item__main">
//           <span class="review-item__title">${commentTitle}</span>
//           <div class="review-item__date">${commentDate}</div>
//         </div>
//         <div class="review-item__info">
//           <div class="review-item__rating">
//             ${commentStars}
//           </div>
//           <div class="review-item__username">${username}</div>
//         </div>
//         <div class="review-item-modal__text">${commentText}</div>
//         ${
//           developerResponseTitle && developerResponseText
//             ? `
//               <div class="review-item__answer">
//                 <div class="review-item__answer-main">
//                   <span class="review-item__answer-title">${developerResponseTitle}</span>
//                 </div>
//                 <div class="review-item__answer-text">${developerResponseText}</div>
//               </div>
//             `
//             : ''
//         }
//       </div>
//     </div>
//   `;

//   modalText.innerHTML = modalContent;
//   modalComment.style.display = 'block';
// }
function openCommentModal(
  commentTitle,
  commentDate,
  commentStars,
  username,
  commentText,
  developerResponseTitle,
  developerResponseText,
) {
  const modalContent = `
    <div class="comment-card">
      <div class="comment-card__backdrop" onclick="closeCommentModal()"></div>
      <div class="comment-card__main">
        <span class="close-button" onclick="closeCommentModal()">Back</span>
        <div class="review-item__main">
          <span class="review-item__title">${commentTitle}</span>
          <div class="review-item__date">${commentDate}</div>
        </div>
        <div class="review-item__info">
          <div class="review-item__rating">
            ${commentStars}
          </div>
          <div class="review-item__username">${username}</div>
        </div>
        <div class="review-item-modal__text">${commentText}</div>
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

  // Удаляем элементы "more" из модального окна
  const moreElements = modalText.querySelectorAll(
    '.sm-landing-appstore-app-1-section-text__more',
  );
  moreElements.forEach(element => {
    element.parentNode.removeChild(element);
  });
}

function closeCommentModal() {
  const modalComment = document.getElementById('comment-modal');
  modalComment.style.display = 'none';
}
