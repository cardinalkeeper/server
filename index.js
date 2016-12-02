
const config = null;

const app = require("./app")(config);

app.listen(8080, function() {
	console.log("Приложение запущено на порту 8080!");
});