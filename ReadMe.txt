// В новый проект закинуть только файлы:
      gulp,
      src,
      gulpfile,
      package.json
      ReadMe.txt

   Далее в терминале пишем:
      npm i
      npm i gulp-cli -g                - установка gulp глобально (если его еще не устанавливали ранее)
      также должен быть установлен node.js и git

   После этого запускаем сборку в одном из режимов:

      // Запустить режим разработчика (без некоторых функций оптимизации кода и webp):
          npm run dev

      // Запустить режим продакшена (все функции оптимизации кода и webp):
          npm run build


   Также возможны функции:

      // Скомпелировать архив проекта:
          npm run zip

      // Отправить готовый вариант на FTP сервер:
           npm run deploy
         данные для отгрузки на FTP сервер заполнить в файле: gulp > config > ftp.js

      // Запустить svgSprive:
           npm run svgSprive




// В файле package.json все файлы в актуальной сборке на 08.02.2022, чтобы работали на последней версии, в devDependencies все версии нужно заменить на "latest",
   но в таком случае, если изменится функционал, что-то может перестать работать



// Что мы умеем:

   - Копирование файлов из папки с исходниками src в папку с проектом dist.
   - Изменение файлов проект в режиме реального времени.
   - Для удаления файлов в папке с проектом необходимо перезапускать gulp.
   - Объединение нескольких .html конструкций в один index.html и сборка в единое целое в итоговой папке с проектом.
   - Создавать WebP изображения автоматически и загружать их на страницу.
   - Автоматическое добавление ко всем файлам ключ с датой сборки, чтобы избежать проблем с кешированием данных.
   - Загрузку картинок необходимо осуществлять через ключ: @img/_имя_картинки это связато с тем, что разные файлы находятся в разных местах проекта и у них разные пути к картинкам,
      кроме того, необходимо установить плагин Path Autocomplete => F1 => Open settings (json) добавить запись:

            "path-autocomplete.pathMappings": {
               "@img": "${folder}/src/img",
               "@scss": "${folder}/src/scss",
               "@js": "${folder}/src/js",
            }
      также, теперь нужно использовать ключи на подключение scss и js файлов.
   - Обработчик ошибок с выводом ошибки и в терминал и в уведомление windows.
   - Запуск локального сервера и открытие страницы index.html с изменениеми в режиме раельного времени.
   - Компиляция scss файлов в css.
   - Продакшен вариант сжатого css - style.min.css (в режиме продакшен).
   - Автоматическое добавление вендорных префиксов для кросбраузерности.
   - Автоматическая группировка медиа запросов.
   - WebPack. Поддержка подключения модулей.
   - Проверка, поддерживает ли браузер картинки webp и добавление для тега html класс webp если нет, то no-webp. В дальнейшем в случае поддержки webp
       картинки будут загружаться в webp если нет, то в формате исходника.
   - Автоматически перевод картинок в формат Webp.
   - Автоматическая конвертация шрифтов, и запись их подключения в scss файл.
   - Создание svg спрайтов и файл html с примером их подключения в папке dist > img > stack (через live server картинки не отображаются).
   - Два режима: режим разработчика и режим продакшена.
   - Создание ZIP архива по команде zip.
   - Отправка результата по команде deploy.

