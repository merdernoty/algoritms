const arr = [1, 2, 3, 4, 1, 2, 5, 8, 3, 3, 6];
let count = 0;
function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(arr, 6));
console.log("count = ", count);

// O (n)
