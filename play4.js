// Defendernos de nuestros usuarios mediante execiones

function calcularAreaRectangulo(base, altura) {

    if (!base) {
        throw new Error("No me has especificado la base del rectángulo.");
    }

    if (!altura) {
        throw new Error("No me has especificado la altura del rectángulo");
    }

    return base * altura;
}

// Calcular el area de un rectangulo base=4, altura=3
console.log(calcularAreaRectangulo(4, 3));

// Calcular el area de un rectangulo de base=10, altura=2
console.log(calcularAreaRectangulo(10))