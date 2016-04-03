//people requests
var requestOne = new XMLHttpRequest();
requestOne.open("GET", urlOne);
requestOne.onload = function(){
  if (requestOne.status == 200){
    var people = requestOne.responseText;
    localStorage.setItem("starWarsPeoplePage1", people);
  }
}
var requestTwo = new XMLHttpRequest();
requestTwo.open("GET", urlTwo);
requestTwo.onload = function(){
  if (requestTwo.status == 200){
    var people = requestTwo.responseText;
    localStorage.setItem("starWarsPeoplePage2", people);
  }
}
var requestThree = new XMLHttpRequest();
requestThree.open("GET", urlThree);
requestThree.onload = function(){
  if (requestThree.status == 200){
    var people = requestThree.responseText;
    localStorage.setItem("starWarsPeoplePage3", people);
  }
}
var requestFour = new XMLHttpRequest();
requestFour.open("GET", urlFour);
requestFour.onload = function(){
  if (requestFour.status == 200){
    var people = requestFour.responseText;
    localStorage.setItem("starWarsPeoplePage4", people);
  }
}
var requestFive = new XMLHttpRequest();
requestFive.open("GET", urlFive);
requestFive.onload = function(){
  if (requestFive.status == 200){
    var people = requestFive.responseText;
    localStorage.setItem("starWarsPeoplePage5", people);
  }
}
var requestSix = new XMLHttpRequest();
requestSix.open("GET", urlSix);
requestSix.onload = function(){
  if (requestSix.status == 200){
    var people = requestSix.responseText;
    localStorage.setItem("starWarsPeoplePage6", people);
  }
}
var requestSeven = new XMLHttpRequest();
requestSeven.open("GET", urlSeven);
requestSeven.onload = function(){
  if (requestSeven.status == 200){
    var people = requestSeven.responseText;
    localStorage.setItem("starWarsPeoplePage7", people);
  }
}
var requestEight = new XMLHttpRequest();
requestEight.open("GET", urlEight);
requestEight.onload = function(){
  if (requestEight.status == 200){
    var people = requestEight.responseText;
    localStorage.setItem("starWarsPeoplePage8", people);
  }
}
var requestNine = new XMLHttpRequest();
requestNine.open("GET", urlNine);
requestNine.onload = function(){
  if (requestNine.status == 200){
    var people = requestNine.responseText;
    localStorage.setItem("starWarsPeoplePage9", people);
  }
}

//


