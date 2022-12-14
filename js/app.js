window.addEventListener('load', () => {
	const preload = document.querySelector('.preload');
	preload.classList.add("preload-finish");
});

let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener("mousemove", cursor);

function cursor(e){
	mouseCursor.classList.add("cursor-move");
	mouseCursor.style.top = e.pageY + 'px';
	mouseCursor.style.left = e.pageX + 'px';
}
