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
//     return this.head;
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


}




let list = new LinkedList();
list.insertAtBeginning(5);
list.insertAtBeginning(4);
list.insertAtPosition(2, 1)
list.removeAtPosition(2)
