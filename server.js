var SkyRemote = require('sky-remote');
const io = require('socket.io')(3000)

console.log('running || more help / info at http://github.com/404invalid-user/')

io.on('connection', socket => {
    socket.on('button-pressed', function(data) {
        var ip = data.ip
        var remoteButton = data.remoteButton
        let newRemote = new SkyRemote(ip)
        newRemote.press(remoteButton)
        console.log(`button: ${remoteButton} | box ip: ${ip}`)
    })
})