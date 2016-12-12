
const gulp = require("gulp");
const todo = require("gulp-todo");
const notify = require("gulp-notify");
const shell = require("gulp-shell");

gulp.task("todo", function() {
	gulp.src(["index.js", "bin/**/*.js", "client/**/*.js", "app/**/*.js", "modules/**/*.js"], { base: "./" })
		.pipe(notify("Сборка файла TODO.md"))
		.pipe(todo({
			transformComment: (file, line, text, kind, ref) => {
				if (ref) text = '@' + ref + ' ' + text;
				return [`${text}  \n${file} (${line})\n`];
			},
			transformHeader: (kind) => {
				return [`\n${kind}`, '============\n'];
			}
		}))
		.pipe(gulp.dest("./"));
});

gulp.task("build:client", shell.task([
	"cd ./client/cardinal && sencha app build"
]));

gulp.task("watch:client", shell.task([
	"cd ./client/cardinal && sencha app watch"
]));