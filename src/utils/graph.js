export default function createGraphData(numberOfNodes, numberOfEdges) {
  return {
    nodes: createNodes(numberOfNodes),
    links: createEdges(numberOfNodes, numberOfEdges),
  };
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createNodes(numberOfNodes) {
  let nodes = [];
  for (let i = 1; i <= numberOfNodes; i++) {
    nodes.push({
      id: `${i}`,
      name: `NODE_${i}`,
    });
  }
  return nodes;
}

function createEdges(numberOfNodes, numberOfEdges) {
  let edges = [];
  for (let i = 1; i <= numberOfEdges; i++) {
    edges.push({
      source: `${randomInteger(1, numberOfNodes)}`,
      target: `${randomInteger(1, numberOfNodes)}`,
    });
  }
  return edges;
}
