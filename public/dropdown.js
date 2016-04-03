


var DropDown = function(){
  this.dropDown = document.createElement("select")
}


DropDown.prototype = {
  addOptions: function(array){
    array.forEach(function(object){
      var option = document.createElement("option")
      option.innerText = object.name;
      option.value = object.name;
      this.dropDown.appendChild(option);
    }.bind(this));
  }
}