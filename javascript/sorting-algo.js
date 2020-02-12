
const bubbleSort = arr => { 
  for(let i = 0; i < arr.length; i++) {
    let flag = false;
    for(let j = i; j < arr.length; j++) {
      let temp = arr[j];
      if(temp > arr[j + 1]){
        flag = true;
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if(!flag) {
      console.log('breaking out...')
      break;
    }
  }

  return arr;
}


const insertionSort = arr => {
  for(let i = 1; i < arr.length; i++ ){
    let j = i;
    let value = arr[i]
    while(j >0 && arr[j- 1] > arr[j]) {
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = value;
  }
  return arr;
}


const selectionSort = arr => {
  for(let i = 0; i < arr.length; i++ ){
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j ++) {
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

const swap = (arr, index, nextIndex) => {
  let temp = arr[index];
  arr[index] = arr[nextIndex];
  arr[nextIndex] = temp;
}

const partition = (arr, left, right) => {
  let p = arr[right];
  let i = left - 1;
  let j = right;
  for(;;){
    while(arr[++i] < p) {
      if(i >= right) break;
    }
    while(arr[--j] > p) {
      if(j <= left) break;
    }
    if(i >= j) {
      break;
    }
    else {
      swap(arr, i, j)
    }
  }
  swap(arr, i, right)
  return i;
}


const quickSort = (arr, low, high) => {
  if(low < high)
    {
      let q = partition(arr, low, high);
      quickSort(arr, low, q - 1);
      quickSort(arr, q + 1, high);
    }
  return arr;
}

const merge = (leftArr, rightArr, arr) => {
  let i =0;
  let k =0;
  let j =0;

  while(i < leftArr.length && j < rightArr.length){
    if(leftArr[i] < rightArr[j]){
      arr[k] = leftArr[i];
      i++;
      k++;
    }else {
      arr[k] = rightArr[j];
      j++;
      k++; 
    }
  }
  while(i < leftArr.length) {
      arr[k] = leftArr[i];
      i++;
      k++;
  }
   while(j < rightArr.length) {
      arr[k] = rightArr[j];
      j++;
      k++;
  }
}

const mergeSort = (arr) => {
 let n = arr.length;
 if(n < 2) return;
  let mid = Math.round(n/2);

  let leftArr = [];
  let rightArr = [];

  for(let i = 0; i < mid; i ++){
    leftArr[i] = arr[i]
  }

    for(let i = mid; i < n; i ++){
    rightArr[i - mid] = arr[i]
  }
  mergeSort(leftArr)
  mergeSort(rightArr)
  merge(leftArr, rightArr, arr);
  return arr;
}

