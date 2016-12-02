
Кардинал
=========

На данный момент действующие репозитории Кардинала это:
server
client
database

Следующие репозитории потом можно удалить:
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
```



Запуск 
------

Запуск сервера для тестирования:

```
cd C:/@repositories/cardinalkeeper && npm run start  
```

Запуск клиентской части для тестирования:

```
cd C:/@repositories/cardinalkeeper/client/cardinal && sencha app watch
```

Внимание, клиентская часть сделана без эмуляции сервера, поэтому сервер тоже следует запускать.

Просмотр в браузере
-------------------

Просмотр сервера в режиме пре-продакшн:

http://kosmos:8080/

Просмотр клиентской части средствами Sencha Cmd (watch):

http://kosmos:1841/cardinal/