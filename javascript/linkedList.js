function Node(data) {
  this.data = data;
  this.next = null;
}


function LinkedList() {
  this.head = null;
}

function createList(c, b, a) {
  const l1 = new LinkedList();

  l1.head = new Node(a);

  const second = new Node(b);

  const third = new Node(c);

  l1.head.next = second;

  second.next = third;
  return l1;
}

const addTwoLinkedList = function(l1, l2) {
  let dummyHead = new LinkedList();
  let p = l1;
  let q = l2;
  let carry = 0;
  let curr = dummyHead;

  while(p.head || q.head) {
    let x = p.head ? p.head.data : 0;
    let y = q.head ? q.head.data : 0;
    let sum = x + y + carry;
    carry = Number.parseInt(sum / 10);
    if(!dummyHead.head) {
      curr.head = new Node(sum % 10);
      curr = curr.head;
    } else {
      curr.next = new Node(sum % 10);
      curr = curr.next;
    }
    p.head = p.head ? p.head.next : null;
    q.head = q.head ? q.head.next : null;
  }
  if (carry > 0) {
    curr.next = new Node(carry);
  }
  console.log(JSON.stringify(dummyHead))
  return dummyHead;
};

const l1 = createList(4,6,5);
const l2 = createList(3,4,2);


addTwoLinkedList(l1, l2);
