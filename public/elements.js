
Form = function(tag){
  this.element = document.createElement("form")
};

Form.prototype = {
  addButton:function(text){
    var button = document.createElement("button");
    button.innerText = text;
    this.element.appendChild(button);
  }
};




var DropDown = function(){
  this.select = document.createElement("select")
};


DropDown.prototype = {
  addOptions: function(array){
    array.forEach(function(object){
      var option = document.createElement("option")
      option.innerText = object.name;
      option.value = object.name;
      this.select.appendChild(option);
    }.bind(this));
  }
};


var Display = function(){
  this.display = document.createElement("div")
}

var UnorderedList = function(){
  this.unorderedList = document.createElement("ul")
}

UnorderedList.prototype = { 
  addListItems: function(array){
    array.forEach(function(objectData){
      var listItem = document.createElement("li");
      listItem.InnerText = objectData + ": " + objectData;
      this.unorderedList.appendChild(listItem);
    }.bind(this))
  }



 }
