


var LargeCollection = function(){
  this.objects = [];
}

LargeCollection.prototype = {
  addObjects: function(){
    for (var i = 0; i < arguments.length; i++){
      this.objects.push(arguments[i]);
    }
  }
  
}


module.exports = LargeCollection;