function Node(data, next = null) {
  this.value = data;
  this.next = next;
}


function LinkedList(){
  this.head = null;
  this.tail = null; 
 
  this.insertAtBeginning = function(data){
    let node = new Node(data);
    node.next = this.head;
     if(!this.head){
        this.tail = node;
    }
    this.head = node;
    return this.head;
  }

  this.insertAtEnd = function(data){
    let node = new Node(data);
   if(!this.head){
     this.head = node;
   }

    let tail = this.head
    while(tail.next !== null){
      tail = tail.next;
    }
     tail.next = node;
  }

  this.getAt = function(index){
    let counter = 0;
    let node = this.head;
    while(node){
      if(counter === index){
        return node;
      }
      node = node.next;
      counter++
    }
    return null
  }

  this.insertAtPosition = function(data, index){
    if(!this.head){
      this.head = new Node(data);
      return;
    }

    if(index === 0){
      this.head = new Node(data, this.head)
      return
    }
    let previousNode = this.getAt(index - 1);
    let node = new Node(data);
    node.next = previousNode.next;
    previousNode.next = node;
    return this.head;
  }

  this.removeAtPosition = function(index){
    if(!this.head){
      return null;
    }
    
    if(index === 0){
      this.head = this.head.next;
      return;
    }
     let previousNode = this.getAt(index - 1);
      if(!previousNode || !previousNode.next) return;
      previousNode.next = previousNode.next.next
  }

  this.reverseList = function(node){
//     let prev = null;
//     while(current !== null){
//      let next = current.next;
//       current.next = prev
//       prev = current
//       current = next;
//     }
//     this.head = prev;
   
//     return this.head;
   
        if(!node.next) {
          this.head = node;
          return
        }
       this.reverseList(node.next);
//         let temp = node.next;
        node.next.next = node;
        node.next = null;
    return this.head
  }

  this.print = function(head){
    if(head === null) return
    console.log(head.value)
    this.print(head.next)
  }

  this.reversePrint = function(head){
    if(head === null) {
      return
    }
    this.reversePrint(head.next)
    console.log(head.value)
    return head;
  }

}

let list = new LinkedList();

list.insertAtBeginning(3);
list.insertAtBeginning(2);
list.insertAtBeginning(1)

list.reversePrint(list.head)