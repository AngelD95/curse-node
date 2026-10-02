// Esto solo en los módulos nativos
// que no tienen promesas nativas

// const { promitify } = require('node:util');
// const readFilePromise = promitify(fs.readFile);

const { readFile } = require('node:fs/promises');

async function init() {
	console.log('Leyendo el primer archivo');
	const text = await readFile('./archivo.txt', 'utf-8');
	console.log('Primer text:', text);

	console.log('Hacer cosas mientras lee el archivo...');

	console.log('Leyendo el segundo archivo');
	const text2 = await readFile('./archivo2.txt', 'utf-8');
	console.log('Segundo text:', text2);
}

init();

// IIFE - Immediately Invoked Function Expression
// (
// 	async() => {
// 		console.log('Leyendo el primer archivo');
// 		const text = await readFile('./archivo.txt', 'utf-8');
// 		console.log('Primer text:', text);

// 		console.log('Hacer cosas mientras lee el archivo...');

// 		console.log('Leyendo el segundo archivo');
// 		const text2 = await readFile('./archivo2.txt', 'utf-8');
// 		console.log('Segundo text:', text2);
// 	}
// )()