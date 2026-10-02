// Esto solo en los módulos nativos
// que no tienen promesas nativas

// const { promitify } = require('node:util');
// const readFilePromise = promitify(fs.readFile);

import { readFile } from 'node:fs/promises'

Promise.all([
	readFile('./archivo.txt', 'utf-8'),
	readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2]) => {
	console.log('Primer text:', text);
	console.log('Segundo text:', text2);
});

// console.log('Leyendo el primer archivo');
// const text = await readFile('./archivo.txt', 'utf-8')
// console.log('Primer text:', text)

// console.log('Hacer cosas mientras lee el archivo...');

// console.log('Leyendo el segundo archivo');
// const text2 = await readFile('./archivo2.txt', 'utf-8')
// console.log('Segundo text:', text2)