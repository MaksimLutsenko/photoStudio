const moreBtn = document.querySelectorAll('.more-btn');

moreBtn.forEach(item => {
	item.addEventListener(('click'), () =>{
		const perentsItem = item.parentNode;
		perentsItem.classList.toggle('content--more')
	})
});