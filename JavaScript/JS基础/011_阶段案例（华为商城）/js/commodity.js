// console.log(resultList);
let serverURL = 'https://res.vmallres.com/pimages';
let productEL = document.querySelector('.products');

// 服务优惠的筛选
let discountElChildrens = document.querySelectorAll('.discount .item');
// 保存选中状态的服务优惠
let discountFilters = [];

// 初始化页面：动态展示商品列表
showResultList(filterResultList());

// 循环遍历服务优惠的li，注册点击事件
for (let i = 1; i < discountElChildrens.length; i++) {
	discountElChildrens[i].onclick = function () {
		// 选中状态的切换
		this.classList.toggle('active');
		// 数组清空
		discountFilters = [];
		// 将选中状态的服务优惠放入数组中
		for (let i = 0; i < discountElChildrens.length; i++) {
			if (discountElChildrens[i].classList.contains('active')) {
				discountFilters.push(discountElChildrens[i].textContent.trim());
			}
		}
		// 每次点击，筛选出符合条件的商品并展示
		showResultList(filterResultList());
	};
}

// 封装函数：过滤resultList中的数据
function filterResultList() {
	return resultList.filter(item => {
		// 保存本次循环的商品的服务优惠
		let currentServices = item.services;
		// 初始化isFlage为true
		let isFlage = true;
		/*
          将我们选中的服务优惠和本次循环的商品的服务优惠进行比较
            1.如果我们没有选择服务优惠，则length为0，就不会进入循环，每次isFlage都为true
            2.如果我们选择了服务优惠，则我们选中的服务优惠需要在本次循环的商品的服务优惠中都存在，才返回true，如果有一个不存在，则返回false
          */
		// console.log(currentServices);
		for (let i = 0; i < discountFilters.length; i++) {
			if (!currentServices.includes(discountFilters[i])) {
				isFlage = false;
				break;
			}
		}

		return isFlage;
	});
}

// 封装函数：根据数据动态展示商品列表
function showResultList(filterResultList) {
	// 每次展示前，先清空原有的
	productEL.innerHTML = '';
	// 根据数据循环创建元素
	for (let i = 0; i < filterResultList.length; i++) {
		let currentList = filterResultList[i];
		// 最外层的li元素
		let itemEl = document.createElement('li');
		itemEl.classList.add('item');

		// 对于不确定的services数组的长度，动态创建服务优惠的span
		let serviceString = '';
		for (let j = 0; j < currentList.promoLabels.length; j++) {
			serviceString += `<span class="tip">${currentList.promoLabels[j]}</span>`;
		}

		itemEl.innerHTML = `
        <a href="#">
          <img class="album" src="${serverURL}${currentList.photoPath}428_428_${currentList.photoName}" alt="" />
          <div class="name">${currentList.name}</div>
          <div class="discount">${currentList.promotionInfo}</div>
          <div class="price">￥${currentList.price}</div>
          <div class="service">
            ${serviceString}
          </div>
          <div class="comment">
            <span>${currentList.rateCount}人评论</span>
            <span>${currentList.goodRate}% 好评</span>
          </div>
        </a>
      `;

		productEL.append(itemEl);
	}
	// 添加空的item，解决flex布局最后一行不足4个item的时候，布局不理想的问题
	addProductsEmptyItem();
}
