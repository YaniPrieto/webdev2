var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, callback) {

	fs.readdir(dir, function(err, dirContents) {
		if (err) return callback(err)

		dirContents = dirContents.filter(function(file) {
			return path.extname(file) === '.' + ext
		})

		callback(null, dirContents)
	})

}