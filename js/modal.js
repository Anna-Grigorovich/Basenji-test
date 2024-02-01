const modal = document.getElementById('modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalImage = document.getElementById('modal-image');
const imageContainer = document.getElementById('image-container');

imageContainer.addEventListener('click', function (event) {
  const targetImage = event.target.closest('.content-image');
  if (targetImage) {
    openModal(targetImage.src);
  }
});

function openModal(imageUrl) {
  modalImage.src = imageUrl;
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

modalBackdrop.addEventListener('click', closeModal);
modalImage.addEventListener('click', closeModal);
