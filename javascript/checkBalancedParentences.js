// Stack datastructure implementation]
function Stack(){
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


function checkBalancedParenthesis(expr){
  let pips = '';
  const getOpeningPair =(closePair) => {
    switch(closePair){
      case '(':
        return ')';
      case '{':
        return '}';
      case '[':
        return ']';
      case '|':
        return '|'
    }
  }
  for(let i = 0; i < expr.length; i++){
    if(expr[i] === '(' || expr[i] === '{' || expr[i] === '['){
      stack.push(expr[i])
    } else{
      if(expr[i] === '|'){
        pips += '|'
      }
      else if(stack.isEmpty() || getOpeningPair(stack.top()) !== expr[i]){
        return false
      } else {
        stack.pop()
      }
    }
  }
  return stack.isEmpty() && pips.length % 2 == 0 ? true : false;
}

checkBalancedParenthesis('()[()]||')

