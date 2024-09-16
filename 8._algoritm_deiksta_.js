const graph = {};

graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
	const costs = {};
	const processed = [];
	let neignbors = {};
	Object.keys(graph).forEach((node) => {
		if (node != start) {
			let value = graph[start][node];
			costs[node] = value || 1000000000;
		}
	});
	let node = findNodeLowesCost(costs, processed);
	while (node) {
		const cost = costs[node];
		neignbors = graph[node];
		Object.keys(neignbors).forEach((neignbor) => {
			let newCost = cost + neignbors[neignbor];
			if (newCost < costs[neignbor]) {
				costs[neignbor] = newCost;
			}
		});
		processed.push(node);
		node = findNodeLowesCost(costs, processed);
	}
	return costs;
}

function findNodeLowesCost(costs, processed) {
	let lowestCost = 1000000000;
	let lowestNode;
	Object.keys(costs).forEach((node) => {
		let cost = costs[node];
		if (cost < lowestCost && !processed.includes(node)) {
			lowestCost = cost;
			lowestNode = node;
		}
	});
	return lowestNode;
}

console.log(shortPath(graph, "a", "g"));
