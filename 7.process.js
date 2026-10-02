// argumentos de entrada
// console.log(process.argv)

// controlar el proceso y su salida
// process.exit(1) // 0 = todo ok, 1 = error

// podemos controlar eventos del proceso
// process.on('exit', () => {
// 	// limpiar los recursos
// });

// current working directory
console.log(process.cwd())

// platform 
console.log(process.env.PEPITO) // variables de entorno
// tener en cuenta que en el bash de linux o macOs
// para declarar la varaible ene el terminar lo hace:
// PEPITO=hola node 7.process.js
// pero en windows es diferente:
// $env:PEPITO=hola node 7.process.js