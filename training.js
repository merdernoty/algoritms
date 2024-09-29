//1, 1, 2, 3, 5
// f(n) = f(n- 1) + f(n-2)
function fibonachi(n) {
	if (n < 0) {
		return 0;
	}
	if (n <= 2) {
		return 1;
	}
	return fibonachi(n - 1) + fibonachi(n - 2);
}

//console.log(fibonachi(5));

function forFibonachi(n) {
	if (n <= 0) {
		return 0;
	}
	if (n <= 2) {
		return 1;
	}
	let prev = 1;
	let result = 1;

	for (let i = 0; i < n - 2; i++) {
		let tmp = result;
		result += prev;
		prev = tmp;
	}
	return result;
}

//console.log(forFibonachi(5));

function palindrom(word) {
	word = word.toLowerCase();
	let newWord = word.split("").reverse().join("");
	return newWord === word;
}

//console.log(palindrom("шалаш"));

function one(callback) {
	return callback ? callback(1) : 1;
}
function two(callback) {
	return callback ? callback(2) : 2;
}
function three(callback) {
	return callback ? callback(3) : 3;
}
function four(callback) {
	return callback ? callback(4) : 4;
}
function five(callback) {
	return callback ? callback(5) : 5;
}

function plus(a) {
	return (b) => a + b;
}
function multi(a) {
	return (b) => a * b;
}

//console.log(one(plus(three())));

const concerts = {
	Antalya: new Date("2021-04-01"),
	Istambul: new Date("2023-04-01"),
	Ankara: new Date("2024-10-01"),
	Adana: new Date("2029-04-01"),
	Mersin: new Date("2026-04-01"),
};

function concertsToArr(concerts) {
	// O(n*log2n)
	return Object.keys(concerts)
		.filter((city) => concerts[city] > new Date())
		.sort((a, b) => concerts[a] - concerts[b]);
}

//console.log(concertsToArr(concerts));

const matrix = ["XOOXO", "XOOXO", "OOOXO", "XXOXO", "OXOOO"];

function perimiter(matrix) {
	// O(n2)
	let p = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === "X") {
				p += j === 0 || matrix[i][j - 1] === "O";
				p += i === 0 || matrix[i - 1][j] === "O";
				p += i === matrix.length - 1 || matrix[i + 1][j] === "O";
				p += j === matrix[i].length - 1 || matrix[i][j - 1] === "O";
			}
		}
	}
	return p;
}

//console.log(perimiter(matrix));

// [1,1,2,2,3,4,5,5] => [3,4]

const arrWith = ["apple", "apple", "banana", "plum"];
function withoutreapit(arr) {
	// O(n)
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		let count = 0;
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				count++;
			}
		}
		if (count === 1) {
			result.push(arr[i]);
		}
	}
	return result;
}
//console.log(withoutreapit(arrWith));

function withoutreapit2(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		let count = 0;
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				count++;
			}
		}
		if (count === 1) {
			result.push(arr[i]);
		}
	}
	return result;
}

//console.log(withoutreapit2(arrWith));

function withoutreapit3(arr) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		let count = 0;
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				count++;
			}
		}
		if (count === 1) {
			result.push(arr[i]);
		}
	}
	return result;
}

//console.log(withoutreapit3(arrWith));

function withoutreapit4(arr) {
	//O(n2)
	result = [];
	for (let i = 0; i < arr.length; i++) {
		let count = 0;
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				count++;
			}
		}
		if (count === 1) {
			result.push(arr[i]);
		}
	}
	return result;
}

//console.log(withoutreapit4(arrWith));

function linearWithoutReapit(arr) {
	// O(n)
	const result = [];
	const dictionary = {};
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		dictionary[item] = dictionary[item] ? dictionary[item] + 1 : 1;
	}
	console.log(dictionary);
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		if (dictionary[item] === 1) {
			result.push(item);
		}
	}
	return result;
}

//console.log(linearWithoutReapit(arrWith));

const tree = [
	{
		v: 5,
		c: [{ v: 5 }, { v: 4 }, { v: 8 }, { v: 20 }, { v: 3 }],
	},
];

function treeSum(tree) {
	if (!tree.length) {
		return 0;
	}
	let sum = 0;
	let stack = [];

	tree.forEach((node) => stack.push(node));
	while (stack.length) {
		let node = stack.pop();
		sum += node.v;
		if (node.c) {
			node.c.forEach((n) => stack.push(n));
		}
	}
	return sum;
}

//console.log(treeSum(tree));
