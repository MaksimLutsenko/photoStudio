const more = document.querySelectorAll('.more-btn').forEach(item => {
	item.addEventListener(('click'), () =>{
		const perentsItem = item.parentNode;
		perentsItem.classList.toggle('content--more')
	})
});