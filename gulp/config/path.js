// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const builFolder = `./dist`;     // Можно менять название
const srcFolder = `./src`;

export const path = {
   build: {
      html: `${builFolder}/`,
      files: `${builFolder}/files/`,
   },
   src: {
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
   },
   watch: {
      html: `${srcFolder}/**/*.html`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: builFolder,
   builFolder: builFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: ``
}