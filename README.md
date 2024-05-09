# proyectonodejs-curso2024
Nombre: Paulina Pico Mantilla

Proyecto Final Node.js
Proyecto Final Node.js
Para el desarrollo del proyecto final, será necesario la aplicación de los conceptos visto en clases y videos sobre:

•	Instalación de módulos NPM
•	Endpoints (Modelos, controladores, router)
•	Uso de colecciones de mongo


Requerimientos:
1.	Crear CRUD de usuario el cual debe tener (nombre, edad, email, pass)
2.	Desarrollar la lógica de login la cual debe de contar de 2 endpoints uno de /login permitirá realizar login recibiendo email y contraseña las cuales deben estar almacenadas en base de datos para su consultas
3.	/logout permitirá cerrar la sesión de un usuario
Usar para la lógica de login JWT que les permite crear tokens de usuario y enviarlo en sus header de peticiones.

4.	Crear un middleware capaz de validar si un usuario está logueado o no y si el token es válido en base de datos.

5.	Proteger los endpoints hechos en clase con un middleware de validación (Creado en el punto 4)
6.	Encriptar sus password en base de datos con uso de algún módulo como bcrypt y comparar en login
7.	Opcional crear un endpoint con respuesta con cache en redes
8.	Opcional crear un proceso en un enpoint que haga uso de las colas con Bull js
 
Rúbrica de Evaluación - Proyecto Final Node.js
Arranque inicial (10%)
MongoDB (20%)
Controladores (20%)
Token (20%)
CRUD (30%)
Extra (Encriptado) (10%)


1.	Arranque inicial (10%)
-	0 puntos: No se realizó un arranque inicial adecuado del proyecto.
-	5 puntos: Se realizó un arranque inicial, pero con errores o incompleto.
-	10 puntos: Se realizó un arranque inicial correcto y completo del proyecto.


2.	MongoDB (20%)
-	0 puntos: No se utilizó MongoDB en el proyecto.
-	10 puntos: Se utilizó MongoDB, pero con errores en la implementación.
-	20 puntos: Se utilizó MongoDB correctamente en el proyecto.


3.	Controladores (20%)
-	0 puntos: Los controladores no se implementaron correctamente o no se utilizaron en absoluto.
-	10 puntos: Se implementaron controladores, pero con errores o de manera incompleta.
-	20 puntos: Los controladores se implementaron correctamente y
 
se utilizaron adecuadamente en el proyecto.


4.	Token (20%)
-	0 puntos: No se implementó la lógica de tokens JWT en el proyecto.
-	10 puntos: Se implementó la lógica de tokens JWT, pero con errores o de manera incompleta.
-	20 puntos: Se implementó correctamente la lógica de tokens JWT en el proyecto.


5. CRUD (30%)
-	0 puntos: No se implementó el CRUD o se implementó de manera incorrecta.
-	15 puntos: Se implementó parcialmente el CRUD con algunos errores en la lógica.
-	30 puntos: Se implementó correctamente el CRUD con todas las operaciones (crear, leer, actualizar, borrar) funcionando correctamente.


6.	Extra (Encriptado) (10%)
-	0 puntos: No se implementó el encriptado de contraseñas.
-	5 puntos: Se intentó implementar el encriptado de contraseñas, pero con errores o de manera incompleta.
-	10 puntos: Se implementó correctamente el encriptado de contraseñas en el proyecto.
