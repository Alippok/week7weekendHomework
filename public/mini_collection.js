

MiniCollection = function(){
  this.collection;
  this.objectCollection = [];
}

MiniCollection.prototype = {
  getFromLocalStorage: function(localStorageKey){
      this.collection = JSON.parse( localStorage.getItem( localStorageKey ) );
  },
  storeObjects: function(){
    this.collection.results.forEach(function(object){
      this.objectCollection.push(object);
    }.bind(this));
  }



}