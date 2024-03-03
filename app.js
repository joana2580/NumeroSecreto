let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del Número Secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos === 1 ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        let mensaje = numeroUsuario > numeroSecreto ? "El número secreto es menor" : "El número secreto es mayor";
        asignarTextoElemento("p", mensaje);
        intentos ++;
        limpiarCaja();
    }
    return;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;

    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Ya se asignaron todos los números posibles');
    }
    else{
        if(listaNumerosSorteados.includes(numeroSecreto))
        return generarNumeroSecreto();
        else{
            listaNumerosSorteados.push(numeroSecreto);
            return numeroSecreto;
        }
    } 
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();