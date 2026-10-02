// .js --> por defecto utiliza CommonJS
// .mjs --> para utilizar ES Modules
// .cjs --> para uttilizar CommonJS

import { sum, sub, mult } from './sum.mjs';

console.log(sum(5, 10));
console.log(sub(10, 5));
console.log(mult(5, 10));