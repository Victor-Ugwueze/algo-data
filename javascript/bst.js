function Node(data, left=null, right=null){
 this.data = data;
 this.left = left;
 this.right = right;
}

function BinarySearchTree(){
  this.root = null;

  this.insertNode = function(node, newNode){
    if(newNode.data > node.data) {
      if(node.right == null){
         node.right = newNode;
      } else {
        this.insertNode(node.right, newNode)
      }
    } else {
      if(node.left == null){
        node.left = newNode;
      } else {
         this.insertNode(node.left, newNode)
      }
    }
    
    /* Implementation using looping */
//     let temp = root;
//     let curr;
//     while(temp != null) {
//       if(node.data > temp.data) {
//         curr = temp;
//         temp = temp.right
//         if(temp == null){
//           curr.right = node
//         }
//       } else {
//        curr = temp;
//        temp = temp.left
//        if(temp == null){
//           curr.left = node;
//         }
//       }
//     }
  }

  this.insert = function(data){
    let node = new Node(data);
    if(this.root == null){
      this.root = node;
    } else {
      let tail = this.insertNode(this.root, node)
    }
  }
  
  this.search = function(root, value){
    if(root == null) return false;
    else if(root.data == value) return true
    else if (value <= root.data){
      return this.search(root.left, value)
    }
    else return this.search(root.right, value)
  }
  
  this.remove = function(data){
    const removeNode = (node, value) => {
      if(node == null) return null;
      else if(value < node.data){
        node.left = removeNode(node.left, value)
        return node;
      }
      else if(value > node.data){
        node.right = removeNode(node.right, value)
        return node;
      } else {
        if(node.left == null && node.right == null) {
          node = null;
          return node;
        }
        if(node.left == null) return node.right;
        if(node.right == null) return node.left;
        let currNode = node.right;
        while(currNode.left !== null){
          currNode = currNode.left;
        }
        node.data = currNode.data
        node.right = removeNode(node.right, currNode.data)
      }
      
    }
    this.root = removeNode(this.root, data)
    return this.root;
  }
  
  this.findMinNode = function(){
    const findMin = node => {
      if(node == null) throw Error("Tree is empty")
      if(node.left == null) return node;
      return findMin(node.left)
    }
    return findMin(this.root)
  }
}

let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(30)
bst.insert(20)
bst.insert(15)
bst.insert(100)
bst.remove(20)
console.log(bst.root)

