window.onload = function(){
  console.log("app started")


  

  // var urls = [urlOne, urlTwo, urlThree, urlFour, urlFive, urlSix, urlSeven, urlEight, urlNine]
  
 // console.log(starWarsPeopleData)
 
  // requestOne.send(null);
  // requestTwo.send(null);
  // requestThree.send(null);
  // requestFour.send(null);
  // requestFive.send(null);
  // requestSix.send(null);
  // requestSeven.send(null);
  // requestEight.send(null);
  // requestNine.send(null);
  requests.forEach(function(request){
    request.send(null);
  });
  main()
  
}





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








var main = function(){
  var peopleDropDownMenu = createPeopleDropDownMenu();
  // console.log(peopleDropDownMenu)
  appendDropDownMenu( peopleDropDownMenu, "people" )
  var planets = createAllPlanetObjectsArray()
  // console.log(planets)
  var planetsDropDownMenu = createDropDownMenu(planets, "planets")
  appendDropDownMenu( planetsDropDownMenu, "planets_display")
  // console.log(planetsDropDownMenu)
  // var div1 = new Display;
  // var body = document.getElementsByTagName("body");
  
  // div1.display.id = "people"
  // div1.display.appendChild(peopleDropDownMenu.select);
  // body[0].appendChild(div1.display)
  
  peopleDropDownMenu.select.onchange = function(){
    // console.log(peopleDropDownMenu.select.value)
    var personQuery = peopleDropDownMenu.select.value;
    var starWarsPeople = createAllPeopleObjectsArray();
    var searchedPerson = starWarsPeople.search( personQuery );
    
    var displayList = new UnorderedList;
    displayList.addListItems(searchedPerson);
    // console.log(displayArea.display)
    var displayArea = document.getElementById("people")
    removeChildren(displayArea)
        // displayArea.removeChild(displayArea.childNodes[1])
    displayArea.appendChild(displayList.unorderedList);
    
  }
  
  planetsDropDownMenu.select.onchange = function(){
    var planetQuery = planetsDropDownMenu.select.value;
    var planets = createAllPlanetObjectsArray();
    var searchedPlanet = planets.search( planetQuery );
    
    var displayList = new UnorderedList;
    displayList.addListItems(searchedPlanet);

    var displayArea = document.getElementById("planets_display");
    removeChildren(displayArea);
    displayArea.appendChild(displayList.unorderedList);

  }
}

var appendDropDownMenu = function(menu, displayId){
  var div = new Display;
  var body = document.getElementsByTagName("body");
  
  div.display.id = displayId
  div.display.appendChild(menu.select);
  body[0].appendChild(div.display)
}

var removeChildren = function(element){
  if(element.childNodes[1] === undefined){
    return null;
   } else {
    element.removeChild(element.childNodes[1]);
   }
}

var createPeopleDropDownMenu = function(){
  var starWarsPeople = createAllPeopleObjectsArray();
  // console.log(starWarsPeople.objects)
  // var div1 = document.getElementsByTagName('div')
  // var form1 = new Form;
  // form1.element.id = "people"
  // div1[0].appendChild(form1.element)
 
  var peopleDropDown = new DropDown;
  peopleDropDown.addOptions(starWarsPeople.objects);
  // console.log(peopleDropDown.select)
  
  // div1[0].appendChild(peopleDropDown.select);
  // form1.addButton("Submit");
  return peopleDropDown
}
//a go at abstracting creating a dropdown menu
var createDropDownMenu = function(array, id){
  dropDown = new DropDown;
  dropDown.id = id;
  dropDown.addOptions( array.objects )
  return dropDown;
}

var createAllPeopleObjectsArray = function(){
  var starWarsPeople1 = new MiniCollection;
  starWarsPeople1.getFromLocalStorage("starWarsPeoplePage1");
  starWarsPeople1.storeObjects();

  var starWarsPeople2 = new MiniCollection;
  starWarsPeople2.getFromLocalStorage("starWarsPeoplePage2");
  starWarsPeople2.storeObjects();

  var starWarsPeople3 = new MiniCollection;
  starWarsPeople3.getFromLocalStorage("starWarsPeoplePage3");
  starWarsPeople3.storeObjects();

  var starWarsPeople4 = new MiniCollection;
  starWarsPeople4.getFromLocalStorage("starWarsPeoplePage4");
  starWarsPeople4.storeObjects();

  var starWarsPeople5 = new MiniCollection;
  starWarsPeople5.getFromLocalStorage("starWarsPeoplePage5");
  starWarsPeople5.storeObjects();

  var starWarsPeople6 = new MiniCollection;
  starWarsPeople6.getFromLocalStorage("starWarsPeoplePage6");
  starWarsPeople6.storeObjects();

  var starWarsPeople7 = new MiniCollection;
  starWarsPeople7.getFromLocalStorage("starWarsPeoplePage7");
  starWarsPeople7.storeObjects();

  var starWarsPeople8 = new MiniCollection;
  starWarsPeople8.getFromLocalStorage("starWarsPeoplePage8");
  starWarsPeople8.storeObjects();

  var starWarsPeople9 = new MiniCollection;
  starWarsPeople9.getFromLocalStorage("starWarsPeoplePage9");
  starWarsPeople9.storeObjects();

  var starWarsPeople = new LargeCollection;
  starWarsPeople.addObjects(starWarsPeople1.objectCollection, starWarsPeople2.objectCollection, starWarsPeople3.objectCollection, starWarsPeople4.objectCollection, starWarsPeople5.objectCollection, starWarsPeople6.objectCollection, starWarsPeople7.objectCollection, starWarsPeople8.objectCollection, starWarsPeople9.objectCollection)

  return starWarsPeople;

}

var createAllPlanetObjectsArray = function(){
  var planets1 = new MiniCollection;
  planets1.getFromLocalStorage("starWarsPlanetsPage1");
  planets1.storeObjects();

  var planets2 = new MiniCollection;
  planets2.getFromLocalStorage("starWarsPlanetsPage2");
  planets2.storeObjects();

  var planets3 = new MiniCollection;
  planets3.getFromLocalStorage("starWarsPlanetsPage3");
  planets3.storeObjects();

  var planets4 = new MiniCollection;
  planets4.getFromLocalStorage("starWarsPlanetsPage4");
  planets4.storeObjects();

  var planets5 = new MiniCollection;
  planets5.getFromLocalStorage("starWarsPlanetsPage5");
  planets5.storeObjects();

  var planets6 = new MiniCollection;
  planets6.getFromLocalStorage("starWarsPlanetsPage6");
  planets6.storeObjects();

  var planets7 = new MiniCollection;
  planets7.getFromLocalStorage("starWarsPlanetsPage7");
  planets7.storeObjects();

  var starWarsPlanets = new LargeCollection;
  starWarsPlanets.addObjects(planets1.objectCollection, planets2.objectCollection, planets3.objectCollection, planets4.objectCollection, planets5.objectCollection, planets6.objectCollection, planets7.objectCollection)
  return starWarsPlanets;
}




// var populatePeopleDisplayArea = function(name){

// }