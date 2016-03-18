# nodeJs

## Desarrolo del servidor "nodepop"

 * Pasos para la instalacion:
```	
express nodepop --ejs
npm i mongoose
```

## PAra empezar con el proyecto:

 1 Iniciamos la Base de Datos.
```
	startMongo
```

  2 Realizar los comandos dentro del proyecto nodepop/nodepop
```
	cd nodepop
```

  3 Creacion de las dependencias.
```
	npm install
```

  4 Inicializar algunos usuarios.
```
	npm run usuarios
```

   5 Inicializar algunos anuncios.
```
npm run anuncios
```



como añadir usuarios...
como se ejecuta...

## Instrucciones de uso:

	### Añadir usuarios o anuncion.

 * Usuario.
 ```
 PUT http://localhost:3000/usuario
 ```
 Formato de un usuario: 

	nombre: String
	email: String
	clave: String


 * Anuncios.
 ```
 PUT http://localhost:3000/anuncios
 ```
 Formato de un anuncio

	nombre: String
	venta: Boolean
	precio: Number
	foto: String
	tags: [String]



	### Ejemplo de filtrado de anuncios.

 * Autentificacion de un usuario y devuelve la lista de anuncios.
 ```
 GET http://localhost:3000/anuncios
 ```

  * Devuelve la lista de anuncios con un precio exacto.
 ```
 GET http://localhost:3000/anuncios?precio:10
 ```

   * Devuelve la lista de anuncios con un precio menor al insertado
 ```
 GET http://localhost:3000/anuncios?precio:-10
 ```

    * Devuelve la lista de anuncios con un precio mayor al insertado
 ```
 GET http://localhost:3000/anuncios?precio:10-
 ```

    * Devuelve la lista de anuncios con un precio entre un rango
 ```
 GET http://localhost:3000/anuncios?precio:0-10
 ```