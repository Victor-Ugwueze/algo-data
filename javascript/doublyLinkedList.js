function Node(data, next = null) {
  this.value = data;
  this.next = next;
  this.prev = null;
}


function DoublyLinkedList(){
  this.head = null;
  this.tail = null;
}

let dlL = new DoublyLinkedList();

let node = new Node(1);

function insertAtBegining(node){
  if(dlL.head == null){
    dlL.head = node
      return dlL;
  }
  node.next = dlL.head;
  dlL.head = node
  dlL.head.prev = node;
  node.prev  = null
  return dlL;
}

insertAtBegining(node);
insertAtBegining(new Node(2)).head
