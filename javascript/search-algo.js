const linearSearch = (arr, target) => {
  for(let i =0; i< arr.length; i++) {
    if(arr[i] === target) return i;
  }
  return -1;
}


const binarySearch = (arr, target) => {
  let max = arr.length - 1;
  let min = 0;
  let guess;
  while(max >= min) {
    guess = parseInt((max + min)/2);
    if(arr[guess] === target) {
      return guess;
    } else if(arr[guess] < target) {
      min = guess + 1;
    } else {
      max = guess -1;
    }
  }
  return -1;
}

// console.log(linearSearch([5, 34, 65, 12, 77, 35], 77));

console.log(binarySearch([13, 21, 54, 81, 90], 21));