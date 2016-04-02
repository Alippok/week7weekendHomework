var assert = require('chai').assert;
var LargeCollection = require('../public/large_collection.js')

var collection = new LargeCollection;

describe("Large Collection", function(){

 it("should have an empty object collection", function(){

  assert.deepEqual([], collection.objects)
 })



})