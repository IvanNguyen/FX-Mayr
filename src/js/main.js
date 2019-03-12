// load assets
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('assets/', true));
requireAll(require.context('html/', true));

console.log('Hello World!');
