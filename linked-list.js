/*
  √ append an element to the end of the list
  √ prepend an element at the beginning of the list
insert an element at an arbitrary position in the list
includes? gives back true or false whether the supplied value is in the list
  √ pop an element from the end of the list
  √ count the number of elements in the list
  √ return the head value at the beginning of the list
  √ return the tail value at the end of the list
find_by_index find the value at a numeric position
find_by_value finds the position of the first occurrence of a value
remove_by_index removes the value at the specified index
remove_by_value removes the first occurrence of the specified value
*/


function Node(nodeData){
  this.data = nodeData;
  this.next = null;
}


function LinkedList(){
  this.head = null;
};

LinkedList.prototype.tail = function() {
  if(this.head == null){
    return null;
  } else {
    var currentNode = this.head
    while(currentNode.next !== null) {
      currentNode = currentNode.next
    };
    return currentNode;
  };
};

LinkedList.prototype.setHead = function(nodeData) {
  this.head = new Node(nodeData);
};

LinkedList.prototype.append = function(nodeData) {
  if(this.head == null) {
    this.setHead(nodeData);
  } else {
    this.tail().next = new Node(nodeData);
  };
};

LinkedList.prototype.prepend = function(nodeData) {
  if(this.head == null) {
    this.setHead(nodeData);
  } else {
    formerHead = this.head
    this.setHead(nodeData);
    this.head.next = formerHead;
  };
};

LinkedList.prototype.pop = function() {
  if(this.head == null) {
    return null;
  } else {
    var currentNode = this.head;
    while(currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  };
};

LinkedList.prototype.count = function() {
  if(this.head == null) {
    return 0
  } else {
    var currentNode = this.head;
    count = 0
    while(currentNode !== null) {
      count += 1;
      currentNode = currentNode.next;
    }
    return count;
  };
};

LinkedList.prototype.print = function() {
  var currentNode = this.head;
  while(currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next
  };
};

LinkedList.prototype.findByIndex = function(index) {
  var currentNode = this.head
  for(var i = 0; i < index; i++){
    currentNode = currentNode.next;
  };
  return currentNode;
};

LinkedList.prototype.insert = function(nodeData, index) {
  
}


//for testing:
exports.LinkedList = LinkedList;
