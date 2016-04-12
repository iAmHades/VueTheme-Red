export default {
	parsePubDate: function(time) {
		let year = time.getFullYear()
		let month = time.getMonth() + 1
		let day = time.getDate()
		return '发布于:'+year + '-' + month + '-' + day
	}
}