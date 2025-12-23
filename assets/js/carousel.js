document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('avatarCarousel');
  if (!carousel) return;

  const slidesContainer = carousel.querySelector('.slides');
  const slides = Array.from(slidesContainer.children);
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  let index = 0;
  let timer = null;

  function show(i) {
    index = (i + slides.length) % slides.length;
    slidesContainer.style.transform = `translateX(${ -index * 100 }%)`;
  }

  prevBtn.addEventListener('click', () => { show(index - 1); resetTimer(); });
  nextBtn.addEventListener('click', () => { show(index + 1); resetTimer(); });

  function startTimer() {
    timer = setInterval(() => { show(index + 1); }, 5000);
  }
  function resetTimer() {
    if (timer) clearInterval(timer);
    startTimer();
  }

  carousel.addEventListener('mouseover', () => { if (timer) clearInterval(timer); });
  carousel.addEventListener('mouseout', () => { startTimer(); });

  // initialize layout and autoplay
  show(0);
  startTimer();
});
