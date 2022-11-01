const firebaseConfig = {

    apiKey: "AIzaSyAfuMhD2IrjqSBtosiWZ5Nr_OiGlo67D8w",

    authDomain: "tuumde-9f946.firebaseapp.com",

    databaseURL: "https://tuumde-9f946-default-rtdb.firebaseio.com",

    projectId: "tuumde-9f946",

    storageBucket: "tuumde-9f946.appspot.com",

    messagingSenderId: "763556742958",

    appId: "1:763556742958:web:b185196e503ac0de5edcbf"

  };



  //Initialize firebase
  firebase.initializeApp(firebaseConfig);

  //Reference
  var tuumdeDB = firebase.database().ref("Tuumde");

  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  
  function submitForm(e)
  {
    e.preventDefault();

    var firstName = getElementVal('firstName');
    var lastName = getElementVal('lastName');
    var email = getElementVal('email');
    var phone = getElementVal('phone');
    var message = getElementVal('message');


    saveMessages(firstName, lastName, email, phone, message);

    // enable alert
    document.querySelector('.alert').style.display = "block";

    //remove the alert
    setTimeout(() => {
    document.querySelector('.alert').style.display = "none";
    }, 3000);

    //reset the form
    document.getElementById("contactForm").reset();

    console.log(firstName, lastName, email, phone, message);
  }
  
  const saveMessages=(firstName, lastName, email, phone, message) =>
  {
    var newTuumde = tuumdeDB.push();

    newTuumde.set({
        firstName : firstName,
        lastName : lastName,
        email : email,
        phone : phone,
        message : message,
    });
  }

  const getElementVal = (id) => 
  {
    return document.getElementById(id).value;
  };