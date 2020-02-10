// Stack datastructure implementation]
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



// Reverse a linkedList using stack implementation
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

// Convert infix to Postfix expression

function infixToPostfix(expr){
   let operators = "()/*+-";
  
  function hasHigherPrecedence(target, operator){
     const hash = {}
    for(let i = 0; i < operators.length; i++){
      hash[operators[i]] = i;
    }
    return hash[operator] > hash[target]
  }
  
  let stack = new Stack();
  let newExpr = "";
  for(let i =0; i < expr.length; i++){
    if(operators.indexOf(expr[i]) === -1) {
      newExpr += expr[i]
    } else if(expr[i] === ')'){
      while(!stack.isEmpty() && stack.top() !== '('){
         newExpr += stack.top();
         stack.pop()
      }
    }
    else {
      while(!stack.isEmpty()
            && hasHigherPrecedence(stack.top(), expr[i])) {
        if(stack.top() !== '('){
          newExpr += stack.top()
        }
        stack.pop()
      }
      stack.push(expr[i])
    }
  }
  while(!stack.isEmpty()){
    newExpr += stack.top();
    stack.pop()
  }
  return newExpr;
}

function postFixCalculator(expr){
  let stack = new Stack();
  let res = 0;
  let oprs = "()/*+-";
  const calculate = (lhs, rhs, opr) => {
    switch(opr){
      case '+':
        return lhs + rhs;
      case '*':
        return lhs * rhs;
      case '/':
        return lhs / rhs;
      case '-':
        return lhs - rhs;
      default:
        return 0
    }
  }
  
  console.log(typeof(calculate))
  
  for( let i = 0; i < expr.length; i++){
    if(oprs.indexOf(expr[i]) === -1){
      stack.push(Number.parseInt(expr[i]))
    } else{
      let rhs = stack.top();
      stack.pop();
      let lhs = stack.top();
      stack.pop();
      res = calculate(lhs, rhs, expr[i]);
      stack.push(res)
    }
  }
  return stack.top()
}

let result = infixToPostfix('1-(2*3)-(4*5)')
console.log(result)
postFixCalculator(result)

let a = 10
typeof a

