window.onload = function(){
  console.log("app started")
  var urlOne = "http://swapi.co/api/people/"
  var requestOne = new XMLHttpRequest();
  requestOne.open("GET", urlOne);
  requestOne.onload = function(){
    if (requestOne.status == 200){
      var people = requestOne.responseText;
      localStorage.setItem("starWarsPeople", people);
    }
  }

  var urlTwo = "http://swapi.co/api/planets/"
  var requestTwo = new XMLHttpRequest();
  requestTwo.open("GET", urlTwo);
  requestTwo.onload = function(){
    if (requestTwo.status == 200){
      var planets = requestTwo.responseText;
      localStorage.setItem("starWarsPlanets", planets);
    }
  }

  var urlThree = "http://swapi.co/api/species/"
  var requestThree = new XMLHttpRequest();
  requestThree.open("GET", urlThree);
  requestThree.onload = function(){
    if (requestThree.status == 200){
      var species = requestThree.responseText;
      localStorage.setItem("starWarsSpecies", species);
    }
  }

  var urlFour = "http://swapi.co/api/starships/"
  var requestFour = new XMLHttpRequest();
  requestFour.open("GET", urlFour);
  requestFour.onload = function(){
    if (requestFour.status == 200){
      var starships = requestFour.responseText;
      localStorage.setItem("starWarsStarships", starships);
    }
  }

  var urlFive = "http://swapi.co/api/vehicles/"
  var requestFive = new XMLHttpRequest();
  requestFive.open("GET", urlFive);
  requestFive.onload = function(){
    if (requestFive.status == 200){
      var vehicles = requestFive.responseText;
      localStorage.setItem("starWarsVehicles", vehicles);
    }
  }


  requestOne.send(null);
  requestTwo.send(null);
  requestThree.send(null);
  requestFour.send(null);
  requestFive.send(null);

  // console.log(historyData)

}



// "films": "http://swapi.co/api/films/",
//     "people": "http://swapi.co/api/people/",
//     "planets": "http://swapi.co/api/planets/",
//     "species": "http://swapi.co/api/species/",
//     "starships": "http://swapi.co/api/starships/",
//     "vehicles": "http://swapi.co/api/vehicles/"