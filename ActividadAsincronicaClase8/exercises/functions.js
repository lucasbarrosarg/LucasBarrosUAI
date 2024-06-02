/* Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */
var1=5
var2=9
function funcionSuma(numero1, numero2) {
    return var1 + var2;
}
console.log(funcionSuma(var1,var2))

/* A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */
var1=5
var2=9
function funcionSuma(numero1, numero2) {
    if (typeof(numero1)!="number" || typeof(numero2)!="number"){
    window.alert("Uno de los valores ingresados no es numero");
    var resultado="NaN";
    return resultado;
    }
    return var1 + var2;
}
console.log(funcionSuma(var1,var2))

/* Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero. */
var1=4.3;
console.log(Number.isInteger(var1));

/* A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado). */
var1=5
var2=9
function funcionSuma(numero1, numero2) {
    if (typeof(numero1)!="number" || typeof(numero2)!="number"){
        window.alert("Uno de los valores ingresados no es numero");
        var resultado="NaN";
        return resultado;
    }
    if (Number.isInteger(numero1)==false || Number.isInteger(numero2)==false){
        window.alert("Hay numeros que no son enteros, redondeando..");
        var redondeado=Math.round(numero1)
        var redondeado2=Math.round(numero2)
        return redondeado+redondeado2   
    }
    return var1 + var2;
}
console.log(funcionSuma(var1,var2))

/* Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual. */
var1 = "a"
var2 = 9
function funcionSuma(numero1, numero2) {
    if (typeof (numero1) != "number" || typeof (numero2) != "number") {
        console.log("Uno de los valores ingresados no es numero");
        var resultado = "NaN";
        return resultado;
    }
    else {
        return ValidateInteger(numero1, numero2);
    }
}
function ValidateInteger(numero1, numero2) {
    if (Number.isInteger(numero1) == false || Number.isInteger(numero2) == false) {
        console.log("Hay numeros que no son enteros, redondeando..");
        var redondeado = Math.round(numero1);
        var redondeado2 = Math.round(numero2);
        return redondeado+redondeado2;
    }
    else {
        return numero1+numero2;
    }  
}
console.log(funcionSuma(var1, var2))