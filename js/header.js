// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   var header = document.getElementById('myHeader');

//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     header.style.position = 'fixed';
//     header.style.top = '0';
//     header.style.width = '100%';
//     header.style.backgroundColor = '#333';
//   } else {
//     header.style.position = 'relative';
//     header.style.backgroundColor = '#333';
//   }
// }
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
