const STORAGE_KEY = 'studentName-vuejs'

//JSON.stringify 值转换为 JSON 字符串。
//JSON.parse 将一个 JSON 字符串转换为对象。
export default {
	fetch: function () {
		return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)
			|| '[]')
	},
	save: function (items) {
		window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items))
	},
	clear: function (items) {
		window.sessionStorage.clear()

	}
}
