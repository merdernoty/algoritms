const arr = [
  0, 3, 4, 12, 3, 4, 6, 3, 77, 1, 34, 7, 28, 3, 18, 9, -2, -1, 56, -34, 0, 3,
];
let count = 0;

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  return arr;
}

console.log(selectionSort(arr));
console.log(count);
//// O (n2)
