// Devuelve el valor numérico de un campo; null indica que está vacío o no es válido.
function leerNumero(id) {
    const campo = document.getElementById(id);
    if (campo.value.trim() === "") {
        return null;
    }

    const valor = Number(campo.value);
    return Number.isFinite(valor) ? valor : null;
}

// Muestra un mensaje en el área de resultado indicada.
function mostrarResultado(id, mensaje) {
    document.getElementById(id).textContent = mensaje;
}

// EJERCICIO 1: calcula el cubo del número ingresado.
document.getElementById("btnCubo").addEventListener("click", function () {
    const numero = leerNumero("numeroCubo");

    // Valida que el usuario haya escrito un número válido.
    if (numero === null) {
        mostrarResultado("resultadoCubo", "Por favor, escribe un número válido.");
        return;
    }

    const cubo = numero ** 3;
    mostrarResultado("resultadoCubo", `El cubo de ${numero} es: ${cubo}.`);
});

// EJERCICIO 2: calcula el área del triángulo con base × altura ÷ 2.
document.getElementById("btnArea").addEventListener("click", function () {
    const base = leerNumero("baseTriangulo");
    const altura = leerNumero("alturaTriangulo");

    // Comprueba que ambos valores sean válidos y no negativos.
    if (base === null || altura === null || base < 0 || altura < 0) {
        mostrarResultado("resultadoArea", "Ingresa una base y una altura válidas (cero o mayores).");
        return;
    }

    const area = (base * altura) / 2;
    mostrarResultado("resultadoArea", `El área del triángulo es: ${area.toLocaleString("es-PA", { maximumFractionDigits: 2 })} m².`);
});

// EJERCICIO 3: obtiene el promedio de las tres calificaciones del estudiante.
document.getElementById("btnPromedio").addEventListener("click", function () {
    const nombre = document.getElementById("nombreEstudiante").value.trim();
    const nota1 = leerNumero("nota1");
    const nota2 = leerNumero("nota2");
    const nota3 = leerNumero("nota3");

    // Exige el nombre y tres calificaciones válidas no negativas.
    if (!nombre || nota1 === null || nota2 === null || nota3 === null ||
        nota1 < 0 || nota2 < 0 || nota3 < 0) {
        mostrarResultado("resultadoPromedio", "Escribe el nombre y tres calificaciones válidas (cero o mayores).");
        return;
    }

    const promedio = (nota1 + nota2 + nota3) / 3;
    mostrarResultado("resultadoPromedio", `El promedio de ${nombre} es: ${promedio.toFixed(2)} puntos.`);
});

// EJERCICIO 4: compara dos valores y calcula la diferencia absoluta.
document.getElementById("btnComparar").addEventListener("click", function () {
    const valor1 = leerNumero("valor1");
    const valor2 = leerNumero("valor2");

    // Evita realizar la comparación si falta un número.
    if (valor1 === null || valor2 === null) {
        mostrarResultado("resultadoComparacion", "Ingresa los dos números para compararlos.");
        return;
    }

    const mayor = Math.max(valor1, valor2);
    const menor = Math.min(valor1, valor2);
    const diferencia = Math.abs(valor1 - valor2);

    // Informa si los números son iguales o cuál es mayor y menor.
    if (valor1 === valor2) {
        mostrarResultado("resultadoComparacion", `Ambos números son iguales (${valor1}); la diferencia es 0.`);
    } else {
        mostrarResultado("resultadoComparacion", `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`);
    }
});
