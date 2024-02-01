var modal = document.getElementById('modal');
var modalBackdrop = document.querySelector('.modal-backdrop');
var modalImage = document.getElementById('modal-image');
var imageContainer = document.getElementById('image-container');

imageContainer.addEventListener('click', function (event) {
  var targetImage = event.target.closest('.content-image');
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
