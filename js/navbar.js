
//hamburger menu
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	});
}

navSlide();

//reactive buttons
function mOver1(obj){
	obj.src = "./img/sl-home.png";
}
function mOut1(obj){
	obj.src = "./img/home.png";
}

function mOver2(obj){
	obj.src = "./img/sl-update.png";
}
function mOut2(obj){
	obj.src = "./img/Update.png";
}

function mOver3(obj){
	obj.src = "./img/sl-about-us.png";
}
function mOut3(obj){
	obj.src = "./img/about-us.png";
}