const http = require('http');

http.createServer((request, response) => {

    //console.log(request);

    //response.writeHead(404);
    //response.write('404 | Page not found')

    //response.writeHead(200, {'Content-Type': 'text/plain'})
    //response.writeHead(200, {'Content-Type': 'application/json'})

   /* const persona = {
        id: 1,
        nombre: 'Fernando'
    }*/
    //response.write(JSON.stringify(persona)); //hay que serializarlo para que pueda mostrarlo, si el content-type es texto plano

    response.setHeader('Content-Disposition', 'attachement; filename=lista.csv')    
    response.writeHead(200, {'Content-Type': 'application/csv'})
    response.write('id, nombre\n');
    response.write('1, María\n');
    response.write('2, Juan\n');
    response.write('3, Pedro\n');

    response.end(); //Se le debe avisar a Node que terminó de cargar

})
.listen(8080); //Puerto en el que estará levantando la aplicación

console.log('Escuchando el puerto', 8080)