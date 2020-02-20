var http = require('http')
var bl = require('bl')
var result = []
var count = 0

function results() {
    for(i = 0; i < 3; i++) {
        console.log(result[i])
    }
}

function content(e) {
    http.get(process.argv[2 + e], function(response) {
      
        response.pipe(bl(function (err, data) {
          
            if (err) return callback(err)

            result[e] = data.toString()
            count++

            if(count == 3) {
              results()
            }
        
        }))
    })
}
    
for(i = 0; i < 3; i++) {
    content(i)
}