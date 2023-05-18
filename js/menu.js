const burger = document.querySelector('.burger');
const closeMenu = document.querySelector('.close');
const mobileMenu = document.querySelector('.menu__container');
const link = mobileMenu.querySelectorAll('a');
const body = document.querySelector('body');


const handleMenu = (e) => {
	e.stopPropagation();
	burger.classList.toggle('active__icon');
	closeMenu.classList.toggle('active__icon');
	mobileMenu.classList.toggle('active__menu');
	body.classList.toggle('active__menu');
};

burger.addEventListener('click', handleMenu);
closeMenu.addEventListener('click', handleMenu);
mobileMenu.addEventListener('click', handleMenu);
link.forEach((link) => link.addEventListener('click', handleMenu));
