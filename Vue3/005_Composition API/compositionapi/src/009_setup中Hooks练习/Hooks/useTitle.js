// 修改页面title的Hook
import { ref, watch } from 'vue';

export default function (titleValue) {
	// 定义一个ref
	const title = ref(titleValue);

	// 监听title的变化
	watch(
		title,
		newValue => {
			document.title = newValue;
		},
		{
			immediate: true
		}
	);

	// 返回ref（用于外面对这个ref进行修改）
	return title;
}
