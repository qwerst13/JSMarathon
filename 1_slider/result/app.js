let activeSlide = document.querySelector('.slide.active');

document.querySelector('.container').addEventListener('click', (evt) => {
	const selectedSlide = evt.target.closest('.slide');
	if (!selectedSlide) return;
  
  activeSlide.classList.remove('active');
  activeSlide = selectedSlide;
	activeSlide.classList.add('active');
});
