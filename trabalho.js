const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function updateCarousel(index) {
  track.style.transform = 'translateX(-' + (index * 100) + '%)';
  currentIndex = index;
}

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    updateCarousel(currentIndex + 1);
  } else {
    updateCarousel(0); // volta ao início
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    updateCarousel(currentIndex - 1);
  } else {
    updateCarousel(slides.length - 1); // vai para o último
  }
});
