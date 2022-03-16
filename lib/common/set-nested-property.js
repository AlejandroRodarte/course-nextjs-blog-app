const setNestedProperty = (object, nodes, value) => {
  const lastNode = nodes[nodes.length - 1];
  let root = object;
  for (const node of nodes) {
    if (node !== lastNode) root = root[node];
  }
  root[lastNode] = value;
};

export default setNestedProperty;
