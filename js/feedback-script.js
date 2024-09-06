const setInitialStars = () => {
	const stars = document.querySelectorAll(".star-v");
	for (let i = 0; i < 6; i++) {
		stars[i].classList.add("clicked-v");
		stars[i].classList.add("hovered-v");
	}
};

window.onload = function() {
	setInitialStars();   
}

document.querySelectorAll(".star-v").forEach(star => {
	star.addEventListener("mouseenter", () => {
		let current = star;
		while (current) {
			current.classList.add("hovered-v");
			current = current.previousElementSibling;
		}
	});
	
	star.addEventListener("mouseleave", () => {
		document.querySelectorAll(".star-v").forEach(star => {
			if (!star.classList.contains("clicked-v")) {
				star.classList.remove("hovered-v");
			}
		});
	});
	
	star.addEventListener("click", () => {
		document.querySelectorAll(".star-v").forEach(star => {
			star.classList.remove("clicked-v");
			star.classList.remove("hovered-v");
		});
		
		let current = star;
		while (current) {
			current.classList.add("clicked-v");
			current.classList.add("hovered-v"); 
			current = current.previousElementSibling;
		}
	});
});

document.getElementById("review-form").addEventListener("submit", function(event) {
	event.preventDefault();
    const inputField = document.getElementById("input-form");
    inputField.value = "";
	document.getElementById("par").classList.remove("hidden");
	document.getElementById("input-form").style.marginBottom = "0.5rem";
})