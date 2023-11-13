import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQDU7-hbWtI3sa3s3woi4YfUJtiVRYhGg",
  authDomain: "fbeye-bf2f1.firebaseapp.com",
  databaseURL: "https://fbeye-bf2f1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fbeye-bf2f1",
  storageBucket: "fbeye-bf2f1.appspot.com",
  messagingSenderId: "462631567055",
  appId: "1:462631567055:web:bc8ee774e09e56e8fcc1ba",
  measurementId: "G-83NWPL2V92"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");

window.login = function(e) {
    e.preventDefault();
    var obj = {
        email:email.value,
        password:password.value

    };
    signInWithEmailAndPassword(auth, obj.email, obj.password).then(function(success) {
        console.log(user.uid);
        alert("Login successful");

    })
    .catch(function(error) {
        window.console.replace("index.html")
        alert("Login failed" + error);

    })

    console.log(obj);
}



