const concat = require('concat');

const files = [
  './dist/serviceware-rewards/runtime.js',
  './dist/serviceware-rewards/polyfills.js',
  './dist/serviceware-rewards/main.js'
];

concat(files, './dist/serviceware-rewards/serviceware-rewards-element.js');
console.info('Custom elements created successfully!');
