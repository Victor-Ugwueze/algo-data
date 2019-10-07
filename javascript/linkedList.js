function Node(data) {
  this.data = data;
  this.next = null;
}


function LinkedList() {
  this.head = null;
}

const linkedList = new LinkedList();

linkedList.head = new Node(1);

const second = new Node(2);

const third = new Node(3);

linkedList.head.next = second;

second.next = third;

while(linkedList.head) {
  console.log(linkedList.head.data);
  linkedList.head = linkedList.head.next;
}