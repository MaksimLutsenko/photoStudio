new Swiper('.swiper', {
	slidesPerView: 3,
	preloadImages: true,

	loop: true,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 15,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0.3,
        modifier: 200,
        slideShadows : true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});