document.addEventListener('scroll', function () {
  const header = document.getElementById('site-header');
  const scrollPosition = window.scrollY;

  // Проверяем, насколько прокручена страница
  if (scrollPosition > window.innerHeight / 4) {
    header.style.top = '0'; // Показываем хедер
  } else {
    header.style.top = '-100px'; // Прячем хедер
  }
});
