const arr = [
	0, 3, 4, 12, 3, 4, 6, 3, 77, 1, 34, 7, 28, 3, 18, 9, -2, -1, 56, -34, 0, 3,
];
let count = 0;

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let pivotIndex = Math.floor(arr.length / 2);
	let pivot = arr[pivotIndex];
	let less = [];
	let greater = [];
	for (let i = 0; i < arr.length; i++) {
		count += 1;
		if (i === pivotIndex) {
			continue;
		}
		if (arr[i] < pivot) {
			less.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
	}
	return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));
console.log(count);
// O (logn2)