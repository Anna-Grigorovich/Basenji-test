const reviewsWrap = document.getElementById('reviews-wrap');

let isGrabbing = false;
let startX = 0;

reviewsWrap.addEventListener('mousedown', e => {
  isGrabbing = true;
  startX = e.clientX;
});

window.addEventListener('mouseup', () => {
  isGrabbing = false;
});

window.addEventListener('mousemove', e => {
  if (isGrabbing) {
    const deltaX = startX - e.clientX;
    if (deltaX > 50) {
      reviewsWrap.scrollBy({ left: -300, behavior: 'smooth' });
      startX = e.clientX;
    } else if (deltaX < -50) {
      reviewsWrap.scrollBy({ left: 300, behavior: 'smooth' });
      startX = e.clientX;
    }
  }
});
