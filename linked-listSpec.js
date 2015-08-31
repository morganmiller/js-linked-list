//before, setup:
  //in terminal run:
      //npm init (for package.json)
      //npm install chai --save (for node_modules)

//import assertion syntax from chai
var expect = require('chai').expect;
//import LinkedList and methods
var LinkedList = require('./linked-list.js').LinkedList

describe('LinkedList', function () {

  it('should know the head', function() {
    var list = new LinkedList();
    list.append("Head")
    expect(list.head.data).to.equal("Head");
  });

  it('should append a new item to the list', function() {
    var list = new LinkedList();
    list.append("New Data")
    expect(list.head.data).to.equal("New Data");
  });

  it('should know its own length', function() {
    var list = new LinkedList();
    list.append("Some Data");
    list.append("Some Data");
    list.append("Some Data");

    expect(list.count()).to.equal(3)
  });

  it('should remove the last item on the list', function() {
    var list = new LinkedList();
    list.append("Some Data");
    list.append("Some Data");
    list.append("Last Data");

    expect(list.count()).to.equal(3);

    list.pop();

    expect(list.count()).to.equal(2);
  });

  it('should know its tail', function(){
    var list = new LinkedList();
    list.append("head");
    list.append("data");
    list.append("data");
    list.append("tail");

    expect(list.tail().data).to.equal("tail")
  });

  it('should prepend items to the beginning of list', function(){
    var list = new LinkedList();
    list.append("first head");
    list.prepend("new head");

    expect(list.head.data).to.equal("new head")
    expect(list.tail().data).to.equal("first head")
  });

  it('should find a node by index', function(){
    var list = new LinkedList();
    list.append("data 0");
    list.append("data 1");
    list.append("data 2");
    list.append("data 3");

    expect(list.findByIndex(0).data).to.equal("data 0")
    expect(list.findByIndex(1).data).to.equal("data 1")
    expect(list.findByIndex(2).data).to.equal("data 2")
    expect(list.findByIndex(3).data).to.equal("data 3")
  });

  it('should insert node at specified position', function(){
    var list = new LinkedList();
    list.append("data 0");
    list.append("data 1");
    list.append("data 2");
    list.insert("new data 2", 2);

    expect(list.findByIndex(2).data).to.equal("new data 2");
  });
});
