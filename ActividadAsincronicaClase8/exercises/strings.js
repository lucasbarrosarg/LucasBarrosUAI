/* Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */
var string1 = "Hello";
var string2 = "world";
var finalstring = string1 + " " + string2;
console.log(finalstring);

/* Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length). */
var string1 = "Hello";
var string2 = "world";
var finalstring = string1.length + string2.length;
console.log(finalstring);

/* Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase). */
var string1 = "Ejercicio de LPPA";
console.log(string1.toUpperCase());

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
var string1 = "Ejercicio de LPPA";
var string2 = string1.substring(0, 5)
console.log(string2);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */
var string1 = "Ejercicio de LPPA";
var string2 = string1.substring(string1.lenght - 3);
console.log(string2);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */
var string1 = "Ejercicio de LPPA";
var string2 = string1.substring(0, 1).toUpperCase() + string1.substring(1).toLowerCase();
console.log(string2);

/* Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */
var string1 = "Ejercicio de LPPA";
var blank = string1.indexOf(" ");
console.log(blank);

/* Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */
var string1="Ejercicio semanal";
var string2=string1.substring(0, 1).toUpperCase() + string1.substring(1, 9).toLowerCase() + " " + string1.substring(10, 11).v+ string1.substring(11, 18).toLowerCase();
console.log(string2);