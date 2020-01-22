function Node(data) {
  this.val = data;
  this.next = null;
}


function LinkedList() {
  this.head = null;
}

function createList(a, b, c) {
  let l1 = new Node(a);

  const second = new Node(b);

  const third = new Node(c);

  l1.next = second;

  second.next = third;
  return l1;
}




const addTwoLinkedList = function(l1, l2) {
  let dummyHead =  new Node(null)
  let p = l1;
  let q = l2;
  let carry = 0;
  let curr;

  while(p || q) {
    let x = p ? p.val : 0;
    let y = q ? q.val : 0;
    let sum = x + y + carry;
    carry = Number.parseInt(sum / 10);
    if(dummyHead.val === null) {
      dummyHead = new Node(sum % 10);
      curr = dummyHead
    } else {
      curr.next = new Node(sum % 10);
      curr = curr.next;
    }
    p = p ? p.next : null;
    q = q ? q.next : null;
  }

  if (carry > 0) {
    curr.next = new Node(carry);
  }
  return dummyHead;
};


// const a = addTwoLinkedList(l1, l2);

// console.log((a))

var number=function(array){
  if(!array.length) return array;
  
  return array.map((text, index) => {
    console.log('sasss')
    return `${index + 1}: ${text}`;
  })
}

console.log(number(["bss", "sgs"]))