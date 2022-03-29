const firebaseConfig = {
    apiKey: "AIzaSyCujhRMX1QANTpEIq_I36qmZzmIZcfvKL8",
    authDomain: "let-s-chat-46f24.firebaseapp.com",
    databaseURL: "https://let-s-chat-46f24-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-46f24",
    storageBucket: "let-s-chat-46f24.appspot.com",
    messagingSenderId: "550576748149",
    appId: "1:550576748149:web:9e11b8ef317df4849c2a3c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});