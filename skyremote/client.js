const socket = io('http://localhost:3000')
let errMesage = document.getElementById('errmesageid')

function pressButton(remoteButton) {
    let ip = document.getElementById('ip').value
    var include = ip.includes('.');

    if (include == false) {
        let notIpText = document.createElement('p')
        connectUser.className += ""
        notIpText.innerText = `"${ip}" is not a ip for more info on how to get your sky box ip visit `
        errMesage.append(notIpText)
    }
    socket.emit('button-pressed', { remoteButton: remoteButton, ip: ip })
}

function notWork() {
    alert('the button you pressed doesn’t work on this, sorry.')
}