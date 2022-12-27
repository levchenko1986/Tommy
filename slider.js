new Swiper('.image-slider',{
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  },

  pagination: {
    el: 'swiper-pagination',
    clickable: true,
  },
  slidesPerView: 4,
});

new Swiper('.image-slider-auto_1',{
  navigation: {
    nextEl: '.swiper-button-next-auto_1',
    prevEl: '.swiper-button-prev-auto_1',
    
  },

  pagination: {
    el: 'swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
});