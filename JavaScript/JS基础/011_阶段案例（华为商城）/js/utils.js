// 商品展示，flex布局最后一行不足4个item的时候，需要占位
function addProductsEmptyItem() {
	for (let i = 0; i < 3; i++) {
		let itemEl = document.createElement('li');
		itemEl.classList.add('item');
		itemEl.classList.add('empty');
		productEL.append(itemEl);
	}
}
