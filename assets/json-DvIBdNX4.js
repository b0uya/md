import"./graph-Befc20MM.js";import{aA as i,ah as d}from"./index-_Q_8DiZH.js";import{m as t}from"./min-Cuwvn62N.js";function v(e){var r={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:u(e),edges:s(e)};return i(e.graph())||(r.value=d(e.graph())),r}function u(e){return t(e.nodes(),function(r){var a=e.node(r),n=e.parent(r),o={v:r};return i(a)||(o.value=a),i(n)||(o.parent=n),o})}function s(e){return t(e.edges(),function(r){var a=e.edge(r),n={v:r.v,w:r.w};return i(r.name)||(n.name=r.name),i(a)||(n.value=a),n})}export{v as w};