const graph = {};

graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

function breadthSearch(graph, start, end) {
	let queue = [];
	queue.push(start);
	while (queue.length > 0) {
		const currrent = queue.shift();
		if (!graph[currrent]) {
			graph[currrent] = [];
		}
		if (graph[currrent].includes(end)) {
			return true;
		} else {
			queue = [...queue, ...graph[currrent]];
		}
	}
	return false;
}

console.log(breadthSearch(graph, "a", "e"));
