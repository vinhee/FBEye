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

firebase.initialize(firebaseConfig);

var sendForm = firebase.database().ref("Request");

document.getElementById('sendForm').addEventListener("submit", submitForm);

function submitForm(e){
    e.PreventDefault();

    var name = getElementById('name');
    var employeeID = getElementById('employeeid');
    var startDate = getElementById('startDate');
    var endDate = getElementById('endDate');
    var MCNo = getElementById('MCno');
    var place = getElementById('docPlace');

    newRequest(name, employeeID, startDate, endDate, MCNo, place);
}

const sendRequest = (name, employeeID, startDate, endDate, MCNo, place) => {
    var newRequest = sendForm.push();

    newRequest.set({
        name : name,
        EmployeeID : employeeID,
        StartDate : startDate,
        EndDate : endDate,
        MCNo : MCNo,
        Place : place,
    });
}

const getElementById = (id) => {
    return document.getElementById(id).value;

}