const express = require('express');
const { getColorFromURL } = require('color-thief-node');

// Nuestra "Base de datos", sera un array de objetos
// Que aspecto tendrá cada objeto? que propiedades tiene?
// titulo
// url
// fecha
// (versiones futuras) color predominante

const pictures = [{
    title: "Me gustaría estar en Dinamarca",
    url: "https://i.picsum.photos/id/41/200/200.jpg?hmac=aqB5SyMLH-ssCBN-7HaUvcDxXFFQB42WoqAHsLRIn74",
    date: "2022-06-06",
    color: "rgb(23,45,34)"
}, {
    title: "Coche",
    url: "https://i.picsum.photos/id/1071/200/200.jpg?hmac=mb6el6MCnRCyFnuMcCPJppn1WISnV5OKFUqDFg82Joo",
    date: "2021-03-06",
    color: "rgb(23,45,34)"
}];

const app = express();

// Informamos que nuestro servidor va a utilizar el sistema de plantillas EJS
app.set('view engine', 'ejs');

// Crear un middlware que lo que va a hacer es mostrar la URL por consola donde el servidor recibe peticiones, también vamos a añadir la fecha de petición
app.use((req, res, next) => {
    console.log(`Petición recibida: ${req.url} y en fecha ${Date()}`);
    req.requestTime = Date();
    next(); // continua gestionando la petición del cliente con otros endpoints
});

app.get("/", (req, res) => {
    // Le pasamos a la vista index.ejs una variable que se llama 'numPics' y cuyo es el número de elementos del array picutres
    res.render("index", {
        numPics: pictures.length,
        fechaPeticion: req.requestTime
    }); // Buscame la vista 'index.ejs' dentro de la carpeta 'views' y renderiza el contenido como HTML y enviáselo al cliente
});

app.get("/nueva-imagen", (req, res) => {
    res.send("Formulario de añadir imagen.");
});

app.post("/form", async (req, res) => {
    // 1. En el objeto req.body tienes toda la información que te ha enviado el formularo
    const titulo = req.body.titulo;

    // 2. Tienes que crear un nuevo elemento en el array "pictures", con dicha información

    // 3. Mostrar un mensaje al usuario que diga "nueva imagne añadida" o redirigirle usando res.redirect a la página principal
    try {
        const dominantColor = await getColorFromURL(url);
    } catch (execption) {
        // Tomar decisiones

        // 1. insertamos la foto sin el color predominante?
        // 2. informamos al usuario que no lo hemos podido calcular?
        // 3. LE decimos al usuario que NO vamos a insertar su foto porque no hemos podido obtener el color predominante?
    }
    // 1. Comprueba que te aparece un string del tipo "rgb(23,45,34)";

    // 2. Ahora, debes añadirlo también al array de fotos 
    // titulo
    // url
    // fecha
    // color <-- el color predominante de la foto


    // 3. En el index.ejs; tienes que mostrar el color predominante aparte del titulo, la url y a fecha


});

// endpoint para probar el paquete de terceros. 

app.get('/get-color', async (req, res) => {
    const dominantColor = await getColorFromURL("https://i.picsum.photos/id/41/200/200.jpg?hmac=aqB5SyMLH-ssCBN-7HaUvcDxXFFQB42WoqAHsLRIn74");
    console.log(dominantColor);
    res.send("Color dominante obtenido, mira el terminal en Visual Studio");

})



// La función de callback se ejecutará en el caso que hayamos levantado con éxito el servidor.
app.listen(3000, () => {
    console.log("Servidor funcionando correctamente.");
});