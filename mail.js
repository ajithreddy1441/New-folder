
const firebaseConfig = {
    apiKey: "AIzaSyD6KsqKA6ORO73KgpQiPEmPDKk1CDpdaeE",
    authDomain: "form-e78b6.firebaseapp.com",
    databaseURL: "https://form-e78b6-default-rtdb.firebaseio.com",
    projectId: "form-e78b6",
    storageBucket: "form-e78b6.appspot.com",
    messagingSenderId: "414462490288",
    appId: "1:414462490288:web:b4a7191b16b79895946d75"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var registrationFormDB = firebase.database().ref("registrationForm");
  
  document.getElementById("registrationForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var username = getElementVal("username");
    var email = getElementVal("email");
    var password = getElementVal("password");
  
    saveMessages(username, email, password);
  
  
    //   reset the form
    document.getElementById("registrationForm").reset();
  }
  
  const saveMessages = (username, email, password) => {
    var newregistrationForm = registrationFormDB.push();
  
    newregistrationForm.set({
      username: username,
      email: email,
      password: password,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };