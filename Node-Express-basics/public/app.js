/**
 * 
 */

console.log('-app.js-');

let menuBtn = document.querySelector('.btn-primary');
let menuBox = document.querySelector('#menuBox');
menuBtn.addEventListener('click', function() {

	// AJAX call
	fetch('/menu', {
		method : 'GET'
	}).then((res) => {
		return res.json();
	}).then(menu => {
		menuBox.innerText = menu.join(',')
	});

});