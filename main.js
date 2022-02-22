const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {
	burger.classList.toggle('show-x');
	ul.classList.toggle('show');
});
ul.addEventListener('click', () => {
	burger.classList.toggle('show-x');
	ul.classList.toggle('show');
});