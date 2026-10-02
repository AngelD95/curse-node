const path = require('node:path');

// barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath)

// obtener el nombre del fichero con path.basename
const base = path.basename('/tmp/midu-secret-files/password.txt');
console.log(base)

// obtener el nombre del fichero sin extension
const fileName = path.basename('/tmp/midu-secret-files/password.txt', '.txt');
console.log(fileName)

// obtener la extension del fichero con path.extname
const ext = path.extname('image.jpg');
console.log(ext)