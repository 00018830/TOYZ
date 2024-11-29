document.addEventListener('DOMContentLoaded', () => {
    

    document.querySelectorAll('.hover-video').forEach(video => {

      video.addEventListener('mouseenter', () => {
        video.muted = false;
        video.volume = 0.1; 
        if (video.paused) {
            video.play();
          }
      });
  
      video.addEventListener('mouseleave', () => {
        video.muted = true; // Mute the video again
      });
    });
  });


const container = document.querySelector('.product-container');
const btnLeft = document.querySelector('.btn_back');
const btnRight = document.querySelector('.btn_next');
const scrollAmount = 300;

btnLeft.addEventListener('click', () => {
  container.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth', // плавная прокрутка
  });
});

btnRight.addEventListener('click', () => {
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth', // плавная прокрутка
  });
});



