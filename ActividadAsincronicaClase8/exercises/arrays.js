/* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log) */
var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array[4],array[10]);

/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort) */
var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array.sort());

/* Agregar un elemento al principio y al final del array (utilizar unshift y push) */
var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
array.unshift("Lunes");
array.push("Domingo");
console.log(array);

/* Quitar un elemento del principio y del final del array (utilizar shift y pop). */
var array=["Lunes","Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre","Domingo"];
array.shift();
array.pop();
console.log(array);

/* Invertir el orden del array (utilizar reverse). */
var array=["Lunes","Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre","Domingo"];
array.reverse();
console.log(array);

/* Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join) */
var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var text=array.join("-");
console.log(text);

/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice) */
var array=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var newarray=array.slice(4,11);
console.log(newarray);