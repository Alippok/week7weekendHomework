window.onload = function(){
  console.log("app started")


  var urlOne = "http://swapi.co/api/people/?page=1"
  var urlTwo = "http://swapi.co/api/people/?page=2"
  var urlThree = "http://swapi.co/api/people/?page=3"
  var urlFour = "http://swapi.co/api/people/?page=4"
  var urlFive = "http://swapi.co/api/people/?page=5"
  var urlSix = "http://swapi.co/api/people/?page=6"
  var urlSeven= "http://swapi.co/api/people/?page=7"
  var urlEight = "http://swapi.co/api/people/?page=8"
  var urlNine = "http://swapi.co/api/people/?page=9"

  // var urls = [urlOne, urlTwo, urlThree, urlFour, urlFive, urlSix, urlSeven, urlEight, urlNine]
  
 // console.log(starWarsPeopleData)
  var requestOne = new XMLHttpRequest();
  requestOne.open("GET", urlOne);
  requestOne.onload = function(){
    if (requestOne.status == 200){
      var people = requestOne.responseText;
      localStorage.setItem("starWarsPeoplePage1", people);
    }
  }
  var requestTwo = new XMLHttpRequest();
  requestTwo.open("GET", urlOne);
  requestTwo.onload = function(){
    if (requestTwo.status == 200){
      var people = requestTwo.responseText;
      localStorage.setItem("starWarsPeoplePage2", people);
    }
  }
  var requestThree = new XMLHttpRequest();
  requestThree.open("GET", urlOne);
  requestThree.onload = function(){
    if (requestThree.status == 200){
      var people = requestThree.responseText;
      localStorage.setItem("starWarsPeoplePage3", people);
    }
  }
  var requestFour = new XMLHttpRequest();
  requestFour.open("GET", urlOne);
  requestFour.onload = function(){
    if (requestFour.status == 200){
      var people = requestFour.responseText;
      localStorage.setItem("starWarsPeoplePage4", people);
    }
  }
  var requestFive = new XMLHttpRequest();
  requestFive.open("GET", urlOne);
  requestFive.onload = function(){
    if (requestFive.status == 200){
      var people = requestFive.responseText;
      localStorage.setItem("starWarsPeoplePage5", people);
    }
  }
  var requestSix = new XMLHttpRequest();
  requestSix.open("GET", urlOne);
  requestSix.onload = function(){
    if (requestSix.status == 200){
      var people = requestSix.responseText;
      localStorage.setItem("starWarsPeoplePage6", people);
    }
  }
  var requestSeven = new XMLHttpRequest();
  requestSeven.open("GET", urlOne);
  requestSeven.onload = function(){
    if (requestSeven.status == 200){
      var people = requestSeven.responseText;
      localStorage.setItem("starWarsPeoplePage7", people);
    }
  }
  var requestEight = new XMLHttpRequest();
  requestEight.open("GET", urlOne);
  requestEight.onload = function(){
    if (requestEight.status == 200){
      var people = requestEight.responseText;
      localStorage.setItem("starWarsPeoplePage8", people);
    }
  }
  var requestNine = new XMLHttpRequest();
  requestNine.open("GET", urlOne);
  requestNine.onload = function(){
    if (requestNine.status == 200){
      var people = requestNine.responseText;
      localStorage.setItem("starWarsPeoplePage9", people);
    }
  }
  requestOne.send(null);
  requestTwo.send(null);
  requestThree.send(null);
  requestFour.send(null);
  requestFive.send(null);
  requestSix.send(null);
  requestSeven.send(null);
  requestEight.send(null);
  requestNine.send(null);

  
  var starWarsPeople1 = new MiniCollection;
  starWarsPeople1.getFromLocalStorage("starWarsPeoplePage1");
  starWarsPeople1.storeObjects();
  var starWarsPeople2 = new MiniCollection;
  starWarsPeople2.getFromLocalStorage("starWarsPeoplePage2");
  starWarsPeople2.storeObjects();
  var starWarsPeople3 = new MiniCollection;
  starWarsPeople3.getFromLocalStorage("starWarsPeoplePage3");
  starWarsPeople3.storeObjects();
  // console.log(starWarsPeople1.objectCollection)
  
  

  // var urlTwo = "http://swapi.co/api/planets/"
  // var requestTwo = new XMLHttpRequest();
  // requestTwo.open("GET", urlTwo);
  // requestTwo.onload = function(){
  //   if (requestTwo.status == 200){
  //     var planets = requestTwo.responseText;
  //     localStorage.setItem("starWarsPlanets", planets);
  //   }
  // }

  // var urlThree = "http://swapi.co/api/species/"
  // var requestThree = new XMLHttpRequest();
  // requestThree.open("GET", urlThree);
  // requestThree.onload = function(){
  //   if (requestThree.status == 200){
  //     var species = requestThree.responseText;
  //     localStorage.setItem("starWarsSpecies", species);
  //   }
  // }

  // var urlFour = "http://swapi.co/api/starships/"
  // var requestFour = new XMLHttpRequest();
  // requestFour.open("GET", urlFour);
  // requestFour.onload = function(){
  //   if (requestFour.status == 200){
  //     var starships = requestFour.responseText;
  //     localStorage.setItem("starWarsStarships", starships);
  //   }
  // }

  // var urlFive = "http://swapi.co/api/vehicles/"
  // var requestFive = new XMLHttpRequest();
  // requestFive.open("GET", urlFive);
  // requestFive.onload = function(){
  //   if (requestFive.status == 200){
  //     var vehicles = requestFive.responseText;
  //     localStorage.setItem("starWarsVehicles", vehicles);
  //   }
  // }


  // requestOne.send(null);
  // requestTwo.send(null);
  // requestThree.send(null);
  // requestFour.send(null);
  // requestFive.send(null);

  // console.log(historyData)

}

var buildCollection = function(){
  objectCollection = []
  for (var i = 0; i < arguments.length; i++){
    objectCollection.push(arguments[i]);
  }
 return objectCollection;
}

// "films": "http://swapi.co/api/films/",
//     "people": "http://swapi.co/api/people/",
//     "planets": "http://swapi.co/api/planets/",
//     "species": "http://swapi.co/api/species/",
//     "starships": "http://swapi.co/api/starships/",
//     "vehicles": "http://swapi.co/api/vehicles/"