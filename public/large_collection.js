


var LargeCollection = function(){
  this.objects = [];
};

LargeCollection.prototype = {
  addObjects: function(){
    for (var i = 0; i < arguments.length; i++){
      for (object of arguments[i]){
        this.objects.push(object);
      }
    }
  },
  search: function(query){
    var result 
    this.objects.forEach(function(object){
      if(object.name === query){
        result = object;
      }
    })
    return result;
  },
  searchByURL: function(url){
    var result
    this.objects.forEach(function(object){
      if(object.url === url){
        result = object.name
      }
    })
    return result;
  }
};


module.exports = LargeCollection;