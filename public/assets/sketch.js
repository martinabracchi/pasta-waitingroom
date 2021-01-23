var fruitInput;
var totalInput;
var database;
var listItems=[];

function setup() {
var canvas = createCanvas(windowWidth, windowHeight);

var firebaseConfig = {
  apiKey: "AIzaSyCBZvUTMElzEA3nEJ564A0kg-fJFzOy4Kk",
  authDomain: "basta-289b4.firebaseapp.com",
  projectId: "basta-289b4",
  storageBucket: "basta-289b4.appspot.com",
  messagingSenderId: "349570201556",
  appId: "1:349570201556:web:fbab610489efeb46b3c841",
  measurementId: "G-8P1R87R9Y2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


  fruitInput = select('#fruit');
totalInput = select('#total');

// Submit button
var submit = select('#submit');
submit.mousePressed(sendToFirebase);

// Start loading the data
loadFirebase();
}

function loadFirebase() {
var ref = database.ref("fruits");
ref.on("value", gotData, errData);
}

function errData(error) {
console.log("Something went wrong.");
console.log(error);
}

// The data comes back as an object
function gotData(data) {
var fruits = data.val();
// Grab all the keys to iterate over the object
var keys = Object.keys(fruits);

// clear previous HTML list
clearList();

// Make an HTML list
var list = createElement('ol');
list.parent('data');

// Loop through array
for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  var fruit = fruits[key];
  var li = createElement('li', fruit.fruit + ': ' + fruit.total + ", key: " + key);
  li.parent(list);
  listItems.push(li);
}
}

// Clear everything
function clearList() {
for (var i = 0; i < listItems.length; i++) {
  listItems[i].remove();
}
}

// This is a function for sending data
function sendToFirebase() {
var fruits = database.ref('fruits');

// Make an object with data in it
var data = {
  fruit: fruitInput.value(),
  total: totalInput.value()
}

var fruit = fruits.push(data, finished);
console.log("Firebase generated key: " + fruit.key);

// Reload the data for the page
function finished(err) {
  if (err) {
    console.log("ooops, something went wrong.");
    console.log(err);
  } else {
    console.log('Data saved successfully');
  }
}
}
