window.onload = function() {
    window.app = {
        mapApp: {
            map: initGmap(),
            markers: []
        }
    };
    initFirebase();
};

function sendMessage() {
    var msgObject = {
        message: document.getElementById('inputMessage').value
    };

    firebase.database().ref('/companies').push().set(msgObject).then(function(snapshot) {
        console.log('Yay');
    }, function(error) {
        console.log('error' + error);
    });
}

function initFirebase() {
    var config = {
        apiKey: "AIzaSyDK_v_B2S3-gSApviBGKLzQrjw8lAICETk",
        authDomain: "job-processor.firebaseapp.com",
        databaseURL: "https://job-processor.firebaseio.com",
        projectId: "job-processor",
        storageBucket: "job-processor.appspot.com",
        messagingSenderId: "1002779833411"
    };
    firebase.initializeApp(config);
    firebase.database().ref('/position').on('value', snapshot => {
        app.mapApp.markers.forEach(element => {
            element.setMap(null);
        });

        app.mapApp.markers.push(new google.maps.Marker({
            position: snapshot.val(),
            map: app.mapApp.map
        }));
    });
}

function initGmap() {
    return new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: 55.7558, lng: 37.6173}
    });
}
