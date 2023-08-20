const jugadas = ["Piedra", "Papel", "Tijera"];
var jugadaPC;
let Usuario;
let ronda = 0;
let contador = 0;

function obtenerJugadaUsuario(opcion) {
    let jugada = opcion;
    console.log("OPCION", opcion);
    document.getElementById("jugadaUsuario").innerHTML = jugada;
    Usuario = jugada;
    console.log(Usuario);
    return jugada;
}

function obtenerJugadaComputadora() {
    let jugada = jugadas[Math.round(Math.random() * 2)];
    console.log("pc", jugada);
    document.getElementById("jugadaPC").innerHTML = "La eleccion de la PC es " + jugada;
    console.log(jugada, "jugada pc");
    return jugada;
}

function determinarGanador(jugadaPC, jugadaUsuario, contador, ronda) {
    console.log("PC", jugadaPC);
    console.log("usuario", jugadaUsuario);
    if (jugadaPC == jugadaUsuario) {
        document.getElementById(ronda).innerHTML = ("Ronda "+ronda+" | PC : "+jugadaPC+" | Usuario: "+jugadaUsuario+" | El resultado es Empate.");
        return contador;

    } else if ((jugadaPC == jugadas[0] && jugadaUsuario == jugadas[2]) ||
        (jugadaPC == jugadas[1] && jugadaUsuario == jugadas[0]) ||
        (jugadaPC == jugadas[2] && jugadaUsuario == jugadas[1])) {
        document.getElementById(ronda).innerHTML = ("Ronda "+ronda+" | PC : "+jugadaPC+" | Usuario: "+jugadaUsuario+" | El ganador es la PC.");
        return contador += 1;

    } else {
        document.getElementById(ronda).innerHTML = ("Ronda "+ronda+" | PC : "+jugadaPC+" | Usuario: "+jugadaUsuario+" | El ganador es el Usuario.");
        return contador -= 1;
    }
}

function mensajeGanador(contador) {
    if (contador < 0) {
        document.getElementById("ganador").innerHTML = "El ganador de la partida es: el Usuario.";
    } else {
        document.getElementById("ganador").innerHTML = "El ganador de la partida es: la Computadora.";
    }
}

function main(jugadaPC, jugadaUsuario) {
    console.log("contador",contador);
    console.log("Usuario",jugadaUsuario);
    console.log("PC",jugadaPC);
    jugadaUsuario = Usuario;
    ronda = ronda + 1;
    jugadaPC = obtenerJugadaComputadora();
    contador = determinarGanador(jugadaPC, jugadaUsuario, contador, ronda);
    document.getElementById("Jugar").innerHTML = ("Ronda " + (ronda + 1));

    if (contador > 2 || contador < -2) {
        mensajeGanador(contador);
    }
}


