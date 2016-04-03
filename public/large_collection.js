


var LargeCollection = function(){
  this.objects = [];
}

LargeCollection.prototype = {
  addObjects: function(){
    for (var i = 0; i < arguments.length; i++){
      for (object of arguments[i]){
        this.objects.push(object);
      }
    }
  }

}


module.exports = LargeCollection;