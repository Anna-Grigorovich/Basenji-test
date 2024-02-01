const elGet = document.querySelector('.app-head-button-appstore');
const elGetLinkStore = document.querySelector('.getLink');

elGet.addEventListener('click', handleButtonClick);
elGetLinkStore.addEventListener('click', handleButtonClick);

function handleButtonClick(e) {
  e.preventDefault();
  if (e.target === elGet) {
    alert('Кнопка Get была нажата');
  } else if (e.target === elGetLinkStore) {
    alert('Линк был нажат');
  }
}
