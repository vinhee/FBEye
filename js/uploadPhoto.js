const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

//uploading image for show
selectImage.addEventListener('click', function () {
  inputFile.click();
})

inputFile.addEventListener('change', function () {
  const image = this.files[0]
  if(image.size < 2000000) {
    const reader = new FileReader();
    reader.onload = ()=> {
      const allImg = imgArea.querySelectorAll('img');
      allImg.forEach(item=> item.remove());
      const imgUrl = reader.result;
      const img = document.createElement('img');
      img.src = imgUrl;
      imgArea.appendChild(img);
      imgArea.classList.add('active');
      imgArea.dataset.img = image.name;
    }
    reader.readAsDataURL(image);
  } else {
    alert("Image size more than 2MB");
  }
})

//configure firebase
const firebaseConfig = {
    apiKey: "AIzaSyAQDU7-hbWtI3sa3s3woi4YfUJtiVRYhGg",
    authDomain: "fbeye-bf2f1.firebaseapp.com",
    databaseURL: "https://fbeye-bf2f1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fbeye-bf2f1",
    storageBucket: "fbeye-bf2f1.appspot.com",
    messagingSenderId: "462631567055",
    appId: "1:462631567055:web:bc8ee774e09e56e8fcc1ba",
  };

  const app = firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const getImageData = (e) => {
    file = e.target.files[0];
    fileName = Math.round(Math.random() * 9999) + file.name;
    if (fileName) {
      fileData.style.display = "block";
    }
    fileData.innerHTML = fileName;
    console.log(file, fileName);
  };

  const uploadImage = () => {
    loading.style.display = "block";
    const storageRef = storage.ref().child("myimages");
    const folderRef = storageRef.child(fileName);
    const uploadtask = folderRef.put(file);
    uploadtask.on(
      "state_changed",
      (snapshot) => {
        console.log("Snapshot", snapshot.ref.name);
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        progress = Math.round(progress);
        progressbar.style.width = progress + "%";
        progressbar.innerHTML = progress + "%";
        uploadedFileName = snapshot.ref.name;
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("myimages")
          .child(uploadedFileName)
          .getDownloadURL()
          .then((url) => {
            console.log("URL", url);
            if (!url) {
              img.style.display = "none";
            } else {
              img.style.display = "block";
              loading.style.display = "none";
            }
            img.setAttribute("src", url);
          });
        console.log("File Uploaded Successfully");
      }
    );
  };