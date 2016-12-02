
const pkg = require("load-pkg").sync(__dirname);
const program = require("commander");

console.log(pkg.description, pkg.version);

// Command Line

program
	.version(pkg.version)
	.usage("[options]")
	.option("-c, --config [file]", "Путь к конфигурационному файлу")
	.parse(process.argv);

if (!program.config) program.help();


if (program.config) {
	
	const config = require(program.config);
	
	const app = require("./app")(config);
	
	const port = 8080;

	app.listen(port, function() {
		console.log(`Веб-сервер запущен на порту ${port}!`);
	});
	
}




