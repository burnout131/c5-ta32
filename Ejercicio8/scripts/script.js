let numeroActual = '';
let numeroAnterior = '';
let operador = '';
let calculoFinalizado = false;

//Función para insertar un número
function insertaNumero(num) {
    if (calculoFinalizado) {
        borrarTodo();
    }
    numeroActual += num;
    //Actualizamos la pantalla con el numero insertado
    actualizaPantalla(numeroActual);
}

//Función para insertar un operador
function insertaOperador(op) {
    if (calculoFinalizado) {
        calculoFinalizado = false;
    }
    if (operador) {
        calcular();
    }
    operador = op;
    numeroAnterior = numeroActual;
    numeroActual = '';
}

//Función para calcular el resultado
function calcular() {
    let resultado;
    switch (operador) {
        case '+':
            resultado = parseFloat(numeroAnterior) + parseFloat(numeroActual);
            break;
        case '-':
            resultado = parseFloat(numeroAnterior) - parseFloat(numeroActual);
            break;
        case '*':
            resultado = parseFloat(numeroAnterior) * parseFloat(numeroActual);
            break;
        case '/':
            resultado = parseFloat(numeroAnterior) / parseFloat(numeroActual);
            break;
        case '%':
            resultado = parseFloat(numeroAnterior) % parseFloat(numeroActual);
            break;
        case '1/x':
            resultado = 1 / parseFloat(numeroActual);
            break;
        case 'sqrt':
            resultado = Math.sqrt(parseFloat(numeroActual));
            break;
        default:
            break;
    }
    numeroActual = resultado.toString();
    actualizaPantalla(numeroActual);
    operador = '';
    numeroAnterior = '';
    calculoFinalizado = true;
}

//Función para actualizar la pantalla
function actualizaPantalla(num) {
    document.getElementById('textoPantalla').value = num;
}

//Función para borrar el último número introducido
function borrarDigito() {
    numeroActual = numeroActual.slice(0, -1);
    actualizaPantalla(numeroActual);
}

//Función para borrar todo
function borrarTodo() {
    numeroActual = '';
    numeroAnterior = '';
    operador = '';
    calculoFinalizado = false;
    actualizaPantalla('0');
}

//Función para borrar la pantalla
function borrarPantalla() {
    numeroActual = '';
    actualizaPantalla('0');
}

//Función para cambiar el signo del número
function cambiaSigno() {
    numeroActual = (parseFloat(numeroActual) * -1).toString();
    actualizaPantalla(numeroActual);
}

//Función para insertar un decimal
function insertaDecimal() {
    if (numeroActual.indexOf('.') === -1) {
        if (numeroActual === '') {
            numeroActual = '0';
        }
        numeroActual += '.';
        actualizaPantalla(numeroActual);
    }
}