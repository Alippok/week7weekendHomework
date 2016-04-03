


var DropDown = function(){
  this.select = document.createElement("select")
}


DropDown.prototype = {
  addOptions: function(array){
    array.forEach(function(object){
      var option = document.createElement("option")
      option.innerText = object.name;
      option.value = object.name;
      this.select.appendChild(option);
    }.bind(this));
  }
}