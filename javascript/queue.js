function Queue(){
  this.size = 10;
  this.items = Array(this.size);
  this.rear = -1
  this.front = -1;
  this.enQueue = function(value){
    if(this.rear + 1 == this.size){
      throw Error("Queue is filled up")
    } else if(this.isEmpty()){
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear += 1;
    }
    this.items[this.rear] = value;
  }
  
  this.deQueue = function(){
    if(this.isEmpty()){
      return;
    }
    else if(this.front == this.rear){
      this.front = -1;
      this.rear = -1;
    }
    else {
      this.front += 1;
    }
  }
  
  this.isEmpty = function(){
    return this.rear == -1 && this.front == -1 ? true: false
  }
  
  this.peek = function(){
    return this.items[this.front]
  }
}


function PriorityQue(){
  
}

const q = new Queue();

q.enQueue(1)
q.enQueue(2)
q.enQueue(3)
q.enQueue(4)

q.enQueue(5)
q.enQueue(6)
q.enQueue(7)
q.enQueue(8)
q.enQueue(9)
q.enQueue(10)

q.deQueue()
q.deQueue()
q.deQueue()
q.deQueue()
q.deQueue()
q.deQueue()
q.deQueue()
q.deQueue()
q.deQueue()
q.deQueue()

q.enQueue(3)

let me = {
  name: "My name",
  last: "Gozman"
}

function isEven(obj){
//   if(num === 0) return true;
//   if(num === 1 || num < 0) return false;
//   let ls = isEven(num - 2);
//   return ls
console.log(obj)
}

isEven(me);

