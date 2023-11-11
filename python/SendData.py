import pyrebase

config ={
    # to put apikey of firebase    
}

firebase = pyrebase.initialize_app(config)
database = firebase.database()

data = {"EmployeeID": 1, "Name": "Test", "CheckinTime": "8:30:10", "CheckoutTime": null}

database.child("Employees").set(data)