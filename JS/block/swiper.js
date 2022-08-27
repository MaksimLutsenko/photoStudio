const sliderWorks = new Swiper('.swiper-works', {
	slidesPerView: 3,
	loop: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  // spaceBetween: 15,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0.3,
    modifier: 200,
    slideShadows : true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    700: {
      slidesPerView: 2.5,
    },
    1000: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
	pagination: {
		el: '.slider-dots',
		clickable: true,
	},
});

const sliderLocation = new Swiper('.slider-location', {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  spaceBetween: 15,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.next-location',
    prevEl: '.prev-location',
  },
});

const sliderReviews = new Swiper('.reviews-slider',{
  slidesPerView: 3,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 15,
  loop: true,
  
  navigation: {
    nextEl: '.next-review',
    prevEl: '.prev-review',
  },
});