var assert = require('chai').assert;
var LargeCollection = require('../public/large_collection.js')

var collection = new LargeCollection;

describe("Large Collection", function(){

  it("should have an empty object holder", function(){

  assert.deepEqual([], collection.objects);
 });

  it("should take in multiple arguments and add them to its objects holder", function(){
    collection.addObjects("Obi-Wan Kenobi", "Luke Skywalker", "Darth Vader")
    assert.deepEqual(["Obi-Wan Kenobi", "Luke Skywalker", "Darth Vader"], collection.objects)
  })


})