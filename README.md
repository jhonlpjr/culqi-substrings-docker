## Description

Se desarrolló una api con un endpoint requerido para poder devolver los índices iniciales de las subcadenas que se encuentran dentro de una cadena compuesta.
Las subcadenas están dentro de un arreglo y el total de ellas  tienen que estar en forma de permutación dentro de la palabra compuesta para poder ser válida.
No importa el orden.
El resultado será guardado en una tabla no relacional  en una base de datos mongodb.
El proyecto será desplegado gracias a docker, tendrá un contenedor node para el api y otro mongodb para la base de datos.

## Configuration

Se configurarán las credenciales de la base de datos en el archivo: src/app.module.ts, en la línea de código:
```bash
imports: [MongooseModule.forRoot('mongodb://192.168.0.14:8081/local'), SubstringModule],
```
ahí se cambiará por la ip la máquina host en la que se clonará el proyecto.

## Installation & Deploy

**Para instalar las dependencias del proyecto y desplegarlo, ubicarse en carpeta raíz de la solución y ejecutar el siguiente comando:**
```bash
$ docker-compose up
```

## Swagger

**Para acceder al Swagger (Api Documentation)**

*Debe acceder  a la dirección url generada al desplegar, ubicarse en el puerto 8080  y añadir la ruta : /api*

Ejemplo: (https://localhost:3000/docs)

*Ahí se podrá ver todos los endpoints, parámetros de uso y ejemplo de como se podrían usar.*

## Support

- Soporte - [Jonathan Reyna](jhonlpjr@gmail.com)

## About

- Autor - [Jonathan Reyna](https://github.com/jhonlpjr)

## License

Esta Api es de [Jonsnow](LICENSE).