// https://www.codewars.com/kata/57cc975ed542d3148f00015b


// your code here. Usar un método de array!


function check(a, x) {

    if (!x || x === '') {
        throw new Error("No has especificado el elemento a buscar.");
    }

    if (!a) {
        throw new Error("No has especificado el elemento a buscar.");
    }

    if (!Array.isArray(a)) {
        throw new Error("El primer parámetro de la función debe ser un array");
    }

    return a.some(e => e === x);

}




/** Primer Set de pruebas  */
console.log(check([66, 101], '66'), true);
console.log(check([101, 45, 75, 105, 99, 107], 107), true);
console.log(check(['t', 'e', 's', 't'], 'e'), true);
console.log(check(['what', 'a', 'great'], 'kata'), false);
console.log(check([], 'loquesea'), false);

/** Segundo Set de pruebas: probar las expeciones. NO MODIFICAR LA LLAMADA A LA FUNCIÓN */
//check([66, 101], ''); // Debe lanzar una excepción con el mensaje "No has especificado el elemento a buscar."
//check([66, 101]); // Debe lanzar una excepción con el mensaje "No has especificado el elemento a buscar."
//check(34, 34); // Debe lanzar una excepción con el mensaje "El primer parámetro del a función debe ser un array"

