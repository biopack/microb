
const Gulp = require("gulp")
const GulpTypescript = require("gulp-typescript")
const Merge = require("merge2")

let TsProject = GulpTypescript.createProject("tsconfig.json")

Gulp.task("compile", () => {
    let res = TsProject.src()
        .pipe(TsProject());
    return Merge([
        res.js.pipe(Gulp.dest("lib")),
        res.dts.pipe(Gulp.dest("types"))
    ])
})

Gulp.task("watch", () => {
    return Gulp.watch("src/**/*", ["compile"])
})

Gulp.task("default", ["compile"])
