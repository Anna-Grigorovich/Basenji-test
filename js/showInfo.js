const moreEl = document.querySelector('.more');
const detailsElements = document.querySelectorAll('.details');

moreEl.addEventListener('click', event => {
  detailsElements.forEach(detailsEl => {
    if (detailsEl.style.display === 'none' || detailsEl.style.display === '') {
      detailsEl.style.display = 'block';
    } else {
      detailsEl.style.display = 'none';
    }
  });

  moreEl.innerText = moreEl.innerText === 'more' ? 'less' : 'more';
});
