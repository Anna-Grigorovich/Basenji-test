const elGet = document.querySelectorAll('.get');
const elGetLinkStore = document.querySelector('.getLink');

elGet.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

elGetLinkStore.addEventListener('click', handleButtonClick);

function handleButtonClick(e) {
  e.preventDefault();
  if (e.target.classList.contains('get')) {
    alert('Кнопка Get была нажата');
  } else if (e.target === elGetLinkStore) {
    alert('Линк был нажат');
  }
}
