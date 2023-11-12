import pyrebase

config = {
  "apiKey": "AIzaSyAQDU7-hbWtI3sa3s3woi4YfUJtiVRYhGg",
  "authDomain": "fbeye-bf2f1.firebaseapp.com",
  "databaseURL": "https://fbeye-bf2f1-default-rtdb.asia-southeast1.firebasedatabase.app",
  "projectId": "fbeye-bf2f1",
  "storageBucket": "fbeye-bf2f1.appspot.com",
  "messagingSenderId": "462631567055",
  "appId": "1:462631567055:web:bc8ee774e09e56e8fcc1ba",
  "measurementId": "G-83NWPL2V92",
  "databaseURL": "https://fbeye-bf2f1-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

firebase = pyrebase.initialize_app(config)
database = firebase.database()

data = {"EmployeeID": 1, "Name": "Test", "CheckinTime": "8:30:10", "CheckoutTime": "null"}

database.push(data)
#database.child("Employees").set(data)