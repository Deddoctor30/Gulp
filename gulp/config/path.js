// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const builFolder = `./dist`;     // Можно менять название
const srcFolder = `./src`;

export const path = {
   build: {
      js: `${builFolder}/js/`,
      css: `${builFolder}/css/`,
      html: `${builFolder}/`,
      images: `${builFolder}/img/`,
      files: `${builFolder}/files/`,
   },
   src: {
      js: `${srcFolder}/js/app.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      scss: `${srcFolder}/scss/style.scss`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`, 
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: builFolder,
   builFolder: builFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: ``
}