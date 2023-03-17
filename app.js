const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs'); //Para que el backend envíe todo ya renderizado, sin necesitar de los archivos que están en templates. También permite reutilizar elementos como menúes, footers, etc
                                //Necesita modelo MVC, tener una carpeta views
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estático
//Middleware
app.use(express.static('public')) //Por defecto busca un archivo index.html, si no se usa este hay que llamar al que corresponda desde la url, por ejemplo: http://localhost:8080/index2.html

app.get('/hola-mundo', (req, res)  => { //Si la url a la que se quiere acceder no está definida muestra un error
    res.send('Hola mundo en su respectiva ruta')
  })
app.get('/', (req, res)  => {  //Para que no aparezca el .html en la url
    res.render('home', {
        nombre: 'Romina Castñeiras', //Puedo usarlos cn home.hbs entre llaves {{}}
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res)  => {  //Para que no aparezca el .html en la url
    res.render('generic', {
        nombre: 'Romina Castñeiras', //Puedo usarlos cn home.hbs entre llaves {{}}
        titulo: 'Curso de Node'
    });})

app.get('/elements', (req, res)  => {  //Para que no aparezca el .html en la url
    res.render('elements', {
        nombre: 'Romina Castñeiras', //Puedo usarlos cn home.hbs entre llaves {{}}
        titulo: 'Curso de Node'
    });})

app.get('*', (req, res)  => { //Comodín para el resto de las rutas que no se definen
    res.sendFile(__dirname + '/public/404.html')
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})