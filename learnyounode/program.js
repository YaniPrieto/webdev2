var module = require('./module')

var dir = process.argv[2]
var ext = process.argv[3]

module(dir, ext, function(err, dirContents) {
	if (err) return callback(err)

	dirContents.forEach(function(file) {
		console.log(file)
	})
}) 