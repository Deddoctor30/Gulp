// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const builFolder = `./dist`;     // Можно менять название
const srcFolder = `./src`;

export const path = {
   build: {
      css: `${builFolder}/css/`,
      html: `${builFolder}/`,
      files: `${builFolder}/files/`,
   },
   src: {
      scss: `${srcFolder}/scss/style.scss`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
   },
   watch: {
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: builFolder,
   builFolder: builFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: ``
}