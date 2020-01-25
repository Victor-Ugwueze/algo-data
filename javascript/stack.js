function Stack(size){
  this.items = []
  
  this.push = function(item){
    this.items.push(item)
  }
  
  this.pop = function(){
    if(this.items.length === 0) {
        return "Nothing to pop";
    }
    this.items.pop();
  }
  
  this.top = function(){
    return this.items[this.items.length - 1];
  }
  this.isEmpty = function(){
    return this.items.length === 0;
  }
  
  this.printStack = function(){
    let str = "";
    for(let i = 0; i< this.items.length; i++){
      str += this.items[i] + ""
    }
    return str;
  }
}

let stack = new Stack();


// Stack and applications
function revserLinkedList(head){
  while(head != null){
  stack.push(head)
  head = head.next
}

let temp = stack.top();
list.head = temp;
stack.pop();

while(!stack.isEmpty()){
  temp.next = stack.top();
  stack.pop();
  temp = temp.next
 }
  temp.next = null;
}
