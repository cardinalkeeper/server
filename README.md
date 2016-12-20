
Кардинал
=========


Не работает опция --ignore для nodemon

Отслеживать проблему с sencha app watch
https://www.sencha.com/forum/showthread.php?332716-After-creating-my-package-WRN-theme-background-image-Theme-image-not-found&p=1166898#post1166898


Ссылки на пред. версию кардинала для альтернативы
https://ide.c9.io/khusamov/alternativa_online_server
http://alternativa-online-server-khusamov.c9.io/public/#/alternativa/contractor
https://ide.c9.io/khusamov/cardinalkeeper-database
https://github.com/cardinalkeeper/database







На данный момент действующие репозитории Кардинала это:
server (потом переименовать в core)
database

Следующие репозитории потом можно удалить:
client
https://github.com/cardinalkeeper/core
https://github.com/cardinalkeeper/contractor

Инсталяция для разработчика
--------------------

Требуется установить:

- Sencha Cmd версии 6.2.1.
- Node.js версии 6.2.0.

В папке `client` нужно создать ссылку `ext` на дистрибутив Sencha Ext JS 6.2.0.


Сборка
------

Сборка билда клиентской части:

```
cd C:/@repositories/cardinalkeeper/client/cardinal && sencha app build
или
cd C:/@repositories/cardinalkeeper && gulp build:client
```



Запуск 
------

Варианты запуска сервера для тестирования:

```
title Cardinal Server && cd C:/@repositories/cardinalkeeper && cls && npm run start -- --config ./temp/config.json
title Cardinal Server && cd C:/@repositories/cardinalkeeper && cls && nodemon --debug index.js -- --config ./temp/config.json
title Cardinal Server && cd C:/@repositories/cardinalkeeper && cls && node index.js -c ./temp/config.json
```

Варианты запуска клиентской части для тестирования:

```
title Cardinal Client Watch && cd C:/@repositories/cardinalkeeper && cls && gulp watch:client
title Cardinal Client Watch && cd C:/@repositories/cardinalkeeper/client/cardinal && cls && sencha app watch
```

Внимание, клиентская часть сделана без эмуляции сервера, поэтому сервер тоже следует запускать.

Просмотр в браузере
-------------------

Просмотр сервера в режиме пре-продакшн:

http://kosmos:8080/

Просмотр клиентской части средствами Sencha Cmd (watch):

http://kosmos:1841/cardinal/

Процесс разработки
-------------------

Автоматическая сборка файла TODO.md

```
gulp todo
```