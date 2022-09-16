const slides = document.querySelectorAll('.slide');
const clearAcriveClasses = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
};
for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearAcriveClasses();
    slide.classList.add('active');
  });
}
