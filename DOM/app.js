document.addEventListener('DOMContentLoaded', function () {
	// number 1
	let button1 = document.createElement('button');
	button1.innerText = 'button 1';

	document.body.appendChild(button1);

	button1.addEventListener('click', function () {
		alert('Hi you!');
	});

	// number 2

	let num2TxtArea = document.querySelector('textarea');
	let num2btn = document.querySelectorAll('button')[0];

	num2btn.addEventListener('click', function () {
		alert(num2TxtArea.value);
	});

	// number 3

	let num3Div = document.querySelector('div');
	num3Div.addEventListener('mouseenter', function () {
		num3Div.style.backgroundColor = 'red';
	});
	num3Div.addEventListener('mouseleave', function () {
		num3Div.style.backgroundColor = 'initial';
	});

	// number 4

	let num4Paragraph = document.querySelector('p');
	num4Paragraph.addEventListener('click', function () {
		num4Paragraph.style.color = getRandomColor();
	});

	// number 5
	let num5Btn = document.querySelectorAll('button')[1];
	let num5Div = document.querySelectorAll('div')[1];

	num5Btn.addEventListener('click', function () {
		let span = document.createElement('span');
		span.innerText = 'Issac';
		num5Div.appendChild(span);
	});

	// number 6
	let num6Btn = document.getElementById('num6Btn');
	let num6Ul = document.querySelector('ul');
	let friendsArr = ['Amy', 'Josh', 'Ben', 'Jack', 'Kelly', 'Endo', 'Baily'];
	let friendIndex = 0;
	num6Btn.addEventListener('click', function () {
		if (friendsArr[friendIndex]) {
			let newLi = document.createElement('li');
			newLi.innerText = friendsArr[friendIndex];
			num6Ul.appendChild(newLi);
			friendIndex++;
		} else {
			alert('no more friends!');
		}
	});
});

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
