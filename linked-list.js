function Node(nodeData){
  this.data = nodeData;
  this.next = null;
}


function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(nodeData) {
  if(this.head == null) {
    this.head = new Node(nodeData);
  } else {
    var currentNode = this.head
    while(currentNode.next !== null) {
      currentNode = currentNode.next
    };
    currentNode.next = new Node(nodeData);
  };
};

LinkedList.prototype.pop = function() {
  if(this.head == null) {
    return null;
  } else {
    currentNode = this.head;
    while(currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }
};

LinkedList.prototype.length = function() {
  if(this.head == null) {
    return 0
  } else {
    currentNode = this.head;
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

//for testing:
exports.LinkedList = LinkedList;
