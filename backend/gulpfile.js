const { src, dest, series } = require("gulp");
const del = require("del");
const ts = require("gulp-typescript");

const tsproject = ts.createProject("tsconfig.json");

const paths = {
    src: ["./src/**/*.{ts,tsx}"],
    staticFiles: ["./src/**/*.{html,ejs,css}"],
    build: "build"
}

function removeBuildFolder() {
    return del([paths.build])
}

function copyFiles() {
    return src(paths.staticFiles).pipe(dest(paths.build))
}

function buildProject() {
    return src(paths.src).pipe(tsproject()).pipe(dest(paths.build));
}


exports.default = series(removeBuildFolder, copyFiles, buildProject)