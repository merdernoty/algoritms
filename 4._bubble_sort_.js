const arr = [
  0, 3, 4, 12, 3, 4, 6, 3, 77, 1, 34, 7, 28, 3, 18, 9, -2, -1, 56, -34, 0, 3,
];
let count = 0;

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return arr;
}

console.log(bubbleSort(arr));
console.log(count);

// 0 (n2)

function bubbleSort1 (arr) {
  for(let i = 0;i < arr.length;i++ ){
    for(let j = 0; j < arr.length; j++){
      if(arr[j + 1] === arr[j]) {
       let tmp = arr[j]
       arr[j] = arr[j + 1]
       arr[j + 1] = tmp
      }
    }
  }
  return arr
}

console.log(bubbleSort1(arr));
