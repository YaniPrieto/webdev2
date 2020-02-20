var net = require('net') 
var port = process.argv[2]
 
var server = net.createServer(function (socket) {  
    socket.end(date() + '\n') 
})  
server.listen(port) 
 
function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}
     
 function date() {
     var date = new Date()
     return date.getFullYear() + '-' 
         + zeroFill(date.getMonth() + 1) + '-'
         + zeroFill(date.getDate()) + ' '
         + zeroFill(date.getHours()) + ':'
         + zeroFill(date.getMinutes())
 }