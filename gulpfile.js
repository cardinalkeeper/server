
const gulp = require("gulp");
const todo = require("gulp-todo");

gulp.task("todo", function() {
	gulp.src(["index.js", "bin/**/*.js", "client/**/*.js", "app/**/*.js", "modules/**/*.js"], { base: "./" })
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