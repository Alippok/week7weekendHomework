

Collection = function(){
  this.collection;
}

Collection.prototype = {
  getFromLocalStorage: function(localStorageKey){
      this.collection = JSON.parse( localStorage.getItem( localStorageKey ) );
  }
}