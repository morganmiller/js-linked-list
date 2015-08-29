// sumSpec.js
// Import our sum function from sum.js
var expect = require('chai').expect;
var LinkedList = require('./linked-list.js').LinkedList

describe('LinkedList', function () {
  it('should append a new item to the list', function() {
    var list = new LinkedList();
    list.push("New Data")
    expect(list.head.data).to.equal("New Data");
  });

  it('should know its own length', function() {
    var list = new LinkedList();
    list.push("Some Data");
    list.push("Some Data");
    list.push("Some Data");

    expect(list.length()).to.equal(3)
  });

  it('should remove the last item on the list', function() {
    var list = new LinkedList();
    list.push("Some Data");
    list.push("Some Data");
    list.push("Last Data");

    expect(list.length()).to.equal(3);

    list.pop();

    expect(list.length()).to.equal(2);
  });
});
