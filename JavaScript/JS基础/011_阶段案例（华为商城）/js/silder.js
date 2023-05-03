let bannerServerUrl = 'https://res.vmallres.com';
let imagesEl = document.querySelector('.banner ul.images');
// 动态添加轮播图图片数据
for (let i = 0; i < banners.length; i++) {
	// 本地遍历到的数据
	let banner = banners[i];

	// 创建li元素
	let itemEl = document.createElement('li');
	itemEl.classList.add('item');
	if (i == 0) {
		itemEl.classList.add('active');
	}
	// 创建img元素
	let imgEl = document.createElement('img');
	imgEl.src = `${bannerServerUrl}${banner.imgUrl}`;
	itemEl.append(imgEl);
	imagesEl.append(itemEl);
}

// 点击按钮切换图片
let prevBtn = document.querySelector('.banner .control .prev');
let nextBtn = document.querySelector('.banner .control .next');
let imgs = document.querySelectorAll('.banner .images .item');
console.log(imgs);
let currentActiveImgIndex = 0;
nextBtn.onclick = function () {
	++currentActiveImgIndex >= imgs.length ? (currentActiveImgIndex = 0) : currentActiveImgIndex;
	toggleActive();
	toggleRadiusActive();
};

prevBtn.onclick = function () {
	--currentActiveImgIndex < 0 ? (currentActiveImgIndex = imgs.length - 1) : currentActiveImgIndex;
	toggleActive();
	toggleRadiusActive();
};

// 封装切换图片active类名的函数
function toggleActive() {
	document.querySelector('.banner .images .item.active').classList.remove('active');
	imgs[currentActiveImgIndex].classList.add('active');
}

// 自动切换图片
let timer = null;
autoSwitch();

// 鼠标移入banner区域，停止自动切换
let bannerEl = document.querySelector('.banner');
bannerEl.onmouseenter = () => clearInterval(timer);
// 移出banner区域，继续自动切换
bannerEl.onmouseleave = autoSwitch;

// 封装函数，自动切换图片
function autoSwitch() {
	timer = setInterval(() => {
		nextBtn.click();
	}, 3000);
}

// 小圆点
let indicatorEl = document.querySelector('.banner .indicator ul.item');
for (let i = 0; i < banners.length; i++) {
	let liEl = document.createElement('li');
	if (i == 0) liEl.classList.add('active');
	indicatorEl.append(liEl);

	// 点击小圆点切换图片与小圆点的active类名
	liEl.onclick = function () {
		currentActiveImgIndex = i;
		toggleActive();
		toggleRadiusActive();
	};
}

let radius = document.querySelectorAll('.banner .indicator ul.item li');
// 封装切换小圆点active类名的函数
function toggleRadiusActive() {
	document.querySelector('.banner .indicator ul.item li.active').classList.remove('active');
	radius[currentActiveImgIndex].classList.add('active');
}
