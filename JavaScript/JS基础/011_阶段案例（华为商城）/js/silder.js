let bannerServerUrl = 'https://res.vmallres.com';
let imagesEl = document.querySelector('.banner ul.images');

// 根据数据动态创建元素
// 动态创建轮播图图片元素
for (let i = 0; i < banners.length; i++) {
	// 本次遍历到的数据
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

// 克隆图片，做无限轮播效果
let firstImgEl = imagesEl.children[0];
let lastImgEL = imagesEl.children[imagesEl.children.length - 1];
imagesEl.append(firstImgEl.cloneNode(true));
imagesEl.prepend(lastImgEL.cloneNode(true));

// 记录当前图片的索引
let currentActiveImgIndex = 1;

// 小圆点指示器功能
let indicatorEl = document.querySelector('.banner .indicator ul.item');
for (let i = 1; i <= banners.length; i++) {
	let liEl = document.createElement('li');
	if (i == 1) liEl.classList.add('active');
	indicatorEl.append(liEl);

	// 点击小圆点切换图片与小圆点的active类名
	liEl.onclick = function () {
		currentActiveImgIndex = i;
		toggleActive();
	};
}

// 获取所有小圆点
let radius = document.querySelectorAll('.banner .indicator ul.item li');

// 点击按钮切换图片功能
let prevBtn = document.querySelector('.banner .control .prev');
let nextBtn = document.querySelector('.banner .control .next');
let imgs = document.querySelectorAll('.banner .images .item');

// 点击下一张
nextBtn.onclick = function () {
	currentActiveImgIndex++;
	toggleActive();
};

// 点击上一张
prevBtn.onclick = function () {
	currentActiveImgIndex--;
	toggleActive();
};

// 自动切换图片
let timer = null;
autoSwitch();

// 鼠标移入banner区域，停止自动切换
let bannerEl = document.querySelector('.banner');
bannerEl.onmouseenter = () => clearInterval(timer);
// 移出banner区域，继续自动切换
bannerEl.onmouseleave = autoSwitch;

// 当文档可见性发生变化时，决定是否自动切换
/*
visibilitychange事件：文档可见性发生变化时触发
document.visibilityState：文档可见性的状态
	hidden：文档不可见
	visible：文档可见
*/
document.addEventListener('visibilitychange', function () {
	console.log('文档当前状态', document.visibilityState);
	if (document.visibilityState == 'hidden') {
		clearInterval(timer);
	} else {
		autoSwitch();
	}
});

// 封装函数，自动切换图片
function autoSwitch() {
	// 防止开启多个定时器，先清除之前的定时器
	timer && clearInterval(timer);
	timer = setInterval(() => {
		nextBtn.click();
	}, 3000);
}

// 封装位移图片的函数
function toggleActive() {
	imagesEl.style.transition = 'all 0.5s';
	imagesEl.style.marginLeft = -currentActiveImgIndex * 100 + '%';

	// 先正常位移图片，监听过渡完成事件，如果是克隆的图片时，无动画切换到真正的图片
	imagesEl.addEventListener('transitionend', function () {
		// 是最后一张克隆的图片时
		if (currentActiveImgIndex == imgs.length - 1) {
			console.log('是最后一张克隆的图片时');
			currentActiveImgIndex = 1;
			imagesEl.style.transition = 'none';
			imagesEl.style.marginLeft = -currentActiveImgIndex * 100 + '%';
		}
		// 是第一张克隆的图片时
		if (currentActiveImgIndex == 0) {
			console.log('是第一张克隆的图片时');
			currentActiveImgIndex = imgs.length - 2;
			imagesEl.style.transition = 'none';
			imagesEl.style.marginLeft = -currentActiveImgIndex * 100 + '%';
		}
	});

	// 切换小圆点active类名
	toggleRadiusActive();
}
toggleActive();

// 封装切换小圆点active类名的函数
function toggleRadiusActive() {
	document.querySelector('.banner .indicator ul.item li.active').classList.remove('active');
	if (currentActiveImgIndex == imgs.length - 1) {
		radius[0].classList.add('active');
	} else if (currentActiveImgIndex == 0) {
		radius[radius.length - 1].classList.add('active');
	} else {
		radius[currentActiveImgIndex - 1].classList.add('active');
	}
}
