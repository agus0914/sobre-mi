/* en estas secciones se crean las funciones matematicas*/
function suma(numeros) {
    return numeros[0] + numeros[1];
}

function resta(numeros) {
    return numeros[0] - numeros[1];
}

function multiplicacion(numeros) {
    return numeros[0] * numeros[1];
}

/* en esta funcion en particular se verifica la posivilidad de la division por 0
indicandole al usuario su error*/

function division(numeros) {
    if ((numeros[1]) === 0) {
        document.getElementById("mensaje").innerHTML = "No se puede dividir un numero sobre 0, ingrese otro digito.";
    } else {
       return numeros[0] / numeros [1];
    }
}

function promedio(numeros) {
    let sum = suma(numeros);
    return sum / numeros.length;
}
// esta funcion es la que calcula el resultado
function calcularResultado(opcion,numeros) {

    let resultado;

    switch (opcion) {
        case "+":
            resultado = suma(numeros);
            break;
        case "-":
            resultado = resta(numeros);
            break;
        case "*":
            resultado = multiplicacion(numeros);
            break;
        case "/":
            resultado = division(numeros);
            break;
        case "%":
            resultado = promedio(numeros);
            break;
    }
    return resultado;
}
// en esta funcion se filtra las posibilidades de que el usuario no 
// ingrese datos o signos que no son digitos
function validar(primero,segundo) {
    let valores = primero + segundo;
    if (valores == "") {

        document.getElementById("mensaje").innerHTML = "Valores ingresados inválidos.\n " +
            "Por favor ingrese un valor numérico.";
        return false;

    } else if (isNaN(primero) || isNaN(segundo)) {

        document.getElementById("mensaje").innerHTML = "Usted no ingresó valor, " +
            "por favor ingrese un valor a iterar.";
        return false;
    }
    return true;
}

//esta funcion se encarga de poner los valores en 0 

function limpiar() {

    let refresh = document.getElementById('limpiar');
    refresh.addEventListener('click', _ => {
                location.reload();
    })
}

//esta funcion se fija la longitud del resultado con mas de 20 digitos,
//mostrando un mensaje advirtiendoselo al usuario

function longitud(opcion, numeros) {
    let numero = calcularResultado(opcion, numeros);
    if (numero < -100000000000000000000 || numero > 100000000000000000000) {
        document.getElementById("mensaje").innerHTML = "El resultado supera la cantidad de dígitos (20).";
        return false
    }
    return true;
}

// esta funcion es la encargada de tomar los datos, verificarlos y calcularlos para mostrarlos 

function main() {
    let opcion = document.getElementById("operando").value;
    let num1 = parseFloat(document.getElementById("primerValor").value);
    let num2 = parseFloat(document.getElementById("segundoValor").value);
    let numeros = [num1, num2];
    if (validar(num1,num2) && longitud(opcion,numeros)) {
     return document.getElementById("resultado").innerHTML = calcularResultado(opcion,numeros);
    }
}