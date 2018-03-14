function sendMessage() {
    var msgObject = {
        message: document.getElementById('inputMessage').value
    };

    firebase.database().ref('site-messages').push().set(msgObject).then(function(snapshot) {
        console.log('Yay');
    }, function(error) {
        console.log('error' + error);
    });
}
