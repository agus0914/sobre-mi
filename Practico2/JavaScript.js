
//defini las jugadas en un arreglo y las variables 
const jugadas = ["Piedra", "Papel", "Tijera"];
var jugadaPC;
let Usuario;
let ronda = 0;
let contador = 0;
var valorUsuario = 0;
var valorPC = 0;
var nombreUsuario;

//obtenes la jugada que selecciona el usuario, mostrarla en un mensaje
// activar o desactivar botones y retorna la jugada

function obtenerJugadaUsuario(opcion) {
    let jugada = opcion;
    document.getElementById("saludo").innerHTML = "Tu jugada es " + jugada + ".";
    document.getElementById("jugadaPC").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    var jugar = document.getElementById("Jugar");
    var reiniciar = document.getElementById("reiniciar");
    var boton = document.getElementById("boton");
    boton.style.animationDuration = "0s";
    jugar.style.animationDuration = "1s";
    reiniciar.style.animationDuration = "1s";
    jugar.style.opacity = 1;
    Usuario = jugada;
    return jugada;
}

//genera un numero aleatorio, lo convierte en jugada, lo muestra en pantalla y devuelve la jugada

function obtenerJugadaComputadora() {
    let jugada = jugadas[Math.round(Math.random() * 2)];
    console.log("pc", jugada);
    document.getElementById("jugadaPC").innerHTML = "La eleccion de la PC es " + jugada;
    document.getElementById("resultado").innerHTML = "El gandor es: " + nombreUsuario;
    console.log(jugada, "jugada pc");
    return jugada;
}

// toma las jugadas de usuario y pc , las muestra, las compara,muestra el ganador, actualiza el tablero 

function determinarGanador(jugadaPC, jugadaUsuario, contador, ronda) {

    if ((jugadaPC == jugadas[0] && jugadaUsuario == jugadas[2]) ||
        (jugadaPC == jugadas[1] && jugadaUsuario == jugadas[0]) ||
        (jugadaPC == jugadas[2] && jugadaUsuario == jugadas[1])) {
            // parte de codigó que decidi no mostrar al final
        //  document.getElementById(ronda).innerHTML = ("Ronda " + ronda + " | PC : " +
        //     jugadaPC + " | Usuario: " + jugadaUsuario + " | El ganador es la PC.");
        valorPC += 1;
        document.getElementById("valorPC").innerHTML = (valorPC);
        document.getElementById("resultado").innerHTML = "El ganador es la PC";

    } else if ((jugadaPC == jugadas[2] && jugadaUsuario == jugadas[0]) ||
        (jugadaPC == jugadas[0] && jugadaUsuario == jugadas[1]) ||
        (jugadaPC == jugadas[1] && jugadaUsuario == jugadas[2])) {
            // mismo codigo que el anterior
        // document.getElementById(ronda).innerHTML = ("Ronda " + ronda + " | PC : " +
        //   jugadaPC + " | Usuario: " + jugadaUsuario + " | El ganador es el Usuario.");
        valorUsuario += 1;
        document.getElementById("valorUsuario").innerHTML = (valorUsuario);
        console.log("usuario", valorUsuario);
    } else {
        document.getElementById("resultado").innerHTML = "El resultado es: Empate";
    }
    document.getElementById("denuevo").innerHTML = "Selecciona una nueva jugada."

}

// esconde los botones de las jugadas y "jugar" y muestra el "volver a jugar" 
// limpia la interfaz y muestra el ganador de la partida

function mensajeGanador(contador, nombreUsuario) {

    var botones = document.getElementById("Botones");
    var jugar = document.getElementById("Jugar");
    botones.style.opacity = 0
    jugar.style.opacity = 0
    document.getElementById("jugadaPC").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("denuevo").innerHTML = ""
    var reiniciar = document.getElementById("reiniciar");
    nombreUsuario = document.getElementById("entrada").value;
    reiniciar.style.opacity = 1;

    if (valorUsuario == 3) {
        document.getElementById("saludo").innerHTML = "¡Felicitaciones " + nombreUsuario + " , hoy estas de suerte!";

    } else {
        document.getElementById("saludo").innerHTML = "Perdiste, hoy la suerte no esta de tu lado.";
    }
}

// toma el valor del input para modificar el valor del nombre del usuario del tablero
// verifica en el caso de no haber escrito nada y envia un msj de advertencia
// muestra saludo de bienvenida y con los botones para poder jugar

function asignar() {

    nombreUsuario = document.getElementById("entrada").value;
    var botones = document.getElementById("Botones");
    var interfaz = document.getElementById("Interfaz");
    var jugar = document.getElementById("Jugar");
    var nombre = document.getElementById("nombre");
    var entrada = document.getElementById("entrada");

    if (nombreUsuario.trim() === '') {

        interfaz.style.opacity = 1;
        document.getElementById("saludo").innerHTML = "No ingreso su nombre, Por favor ingrese su nombre primero y luego seleccione OK";

    } else {
        document.getElementById("nombreTablero").innerHTML = nombreUsuario;
        document.getElementById("saludo").innerHTML = "Hola " + nombreUsuario + ", elije tu jugada y luego presiona el boton de Jugar";
        botones.style.opacity = 1;
        interfaz.style.opacity = 1;
        jugar.style.opacity = 1;
        entrada.style.opacity = 0;
        nombre.style.opacity = 0;
    }
}

// funcion del boton "volver a jugar" que recarga toda la pagina

function reiniciar() {
    var reinicio = document.getElementById("reiniciar");
     reinicio.addEventListener("click", (_) => {
        location.reload();
    });
 }

// funcion del boton "Jugar" 
// verifica si el usuario no selecciono su jugada para luego obtener la jugada pc, llamando a su funcion
// suma el valor de ronda para actualizarlo en el boton indicando el numero de la ronda a jugar
// determina el ganador de la ronde y verifica si alguno gano 3 partidas para mostrar el mensaje de final

function main(jugadaPC, jugadaUsuario) {
    jugadaUsuario = Usuario;
    var jugar = document.getElementById("Jugar");

    if (jugadaUsuario) {
        
        ronda += 1;
        jugadaPC = obtenerJugadaComputadora();
        document.getElementById("Jugar").innerHTML = ("Ronda " + (ronda + 1));
        contador = determinarGanador(jugadaPC, jugadaUsuario, contador, ronda);
        jugar.style.opacity = 0;


        if (valorPC == 3 || valorUsuario == 3) {
            mensajeGanador(contador);
        }

    } else {
        document.getElementById("saludo").innerHTML = "No ingreso su nombre, Por favor ingrese su nonbre primero y luego seleccione OK";
    }
    jugadaUsuario = 0;
}

