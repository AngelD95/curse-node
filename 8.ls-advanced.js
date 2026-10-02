const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors');

const folder = process.argv[2] ?? '.';

async function ls (folder) {
	let files;
	try {
		files = await fs.readdir(folder);
	} catch (err) {
		console.error(pc.red(`❌ No se pudo leer el directorio ${folder}`));
		process.exit(1)
	}

	const filePromises = files.map(async file => {
		const filePath = path.join(folder, file);
		let stats
		try {
			stats = await fs.stat(filePath); // status - información del archivo
		} catch (err) {
			console.error(pc.red(`❌ No se pudo leer el fichero ${filePath}`));
			process.exit(1)
		}

		isDirectory = stats.isDirectory();
		const fileType = isDirectory ? 'd' : 'f';
		const fileSize = stats.size;
		const fileModified = stats.mtime.toLocaleString();

		return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.toString().padStart(10))} ${pc.yellow(fileModified)}`;
	})

	const filesInfo = await Promise.all(filePromises);

	filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder)