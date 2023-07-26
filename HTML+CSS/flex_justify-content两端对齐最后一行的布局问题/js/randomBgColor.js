function randomNumber() {
	return Math.floor(Math.random() * 256);
}

function generateRgb() {
	return 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')';
}

function assignmentItem(el = '.container') {
	let items = document.querySelectorAll(`${el} .item`);
	for (const item of items) {
		item.style.backgroundColor = generateRgb();
	}
}

assignmentItem();
