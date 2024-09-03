document.querySelectorAll('.star-v').forEach(star => {
	star.addEventListener('mouseenter', () => {
		let current = star;
		while (current) {
			current.classList.add('hovered-v');
			current = current.previousElementSibling;
		}
	});

	star.addEventListener('mouseleave', () => {
		document.querySelectorAll('.star-v').forEach(star => {
			if (!star.classList.contains('clicked-v')) {
				star.classList.remove('hovered-v');
			}
		});
	});

	star.addEventListener('click', () => {
		document.querySelectorAll('.star-v').forEach(star => {
			star.classList.remove('clicked-v');
			star.classList.remove('hovered-v');
		});
	
		let current = star;
		while (current) {
			current.classList.add('clicked-v');
			current.classList.add('hovered-v'); 
			current = current.previousElementSibling;
		}
	});
});
