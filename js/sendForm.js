/* var sendForm = firebase.database().ref("Request");

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

} */