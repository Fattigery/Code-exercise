// yyyy/MM/dd hh:mm:ss
// yyyy*MM*dd hh:mm:ss
// 只替换字母部分

/**
 *
 * @param {Number} timestamp 时间戳
 * @param {String} fmtString  格式化字符串
 * @returns {String}
 */
function formatTime(timestamp, fmtString) {
	// 1.将时间戳转换为日期对象
	const date = new Date(timestamp);

	// 2.正则和值匹配起来
	const dateObj = {
		'y+': date.getFullYear(),
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};

	// 3.for循环进行替换
	for (const key in dateObj) {
		const keyReg = new RegExp(key);
		// 检测fmtString中是否有key字符(比如/y+/),如果有,才替换
		if (keyReg.test(fmtString)) {
			// 获取到对应的值,不满足两位数的,前面补0
			const value = (dateObj[key] + '').padStart(2, '0');
			// 将正则匹配到的字符替换为对应的值
			fmtString = fmtString.replace(keyReg, value);
		}
	}

	// 4.返回结果
	return fmtString;
}

console.log(formatTime(1654050000000, 'yyyy*MM*dd hh:mm:ss'));
