function suma(a, b){
    return a + b;
}

function resta(a, b){
    return a - b;
}

function multiplicacion(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}


function calculadora(){
    const operaciones = ["sumar", "restar", "multiplicar", "dividir"];
    const operacion = prompt("Elige una operación:\n\n" + operaciones.join("\n"));

    if (!operaciones.includes(operacion)) {
        alert("Operación no válida.");
        return;
    }

    let a = parseFloat(prompt("ingresa el primer numero"))
    let b = parseFloat(prompt("ingresa el segundo numero"))

    let resultado;
    if (operacion === "sumar") {
        resultado = suma(a, b);
    } else if (operacion === "restar") {
        resultado = resta(a, b);
    } else if (operacion === "multiplicar") {
        resultado = multiplicacion(a, b);
    } else if (operacion === "dividir") {
        resultado = dividir(a, b);
    }

    alert(resultado)
}

calculadora()




