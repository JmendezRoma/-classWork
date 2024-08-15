/*create one var called http to save the module http*/

var http = require ('http');


/*make other var called server and execute the module, make a function for request and response  */
var server = http.createServer(function(request , response){
    /*format, number of response(200), type of content*/
    response.writeHead(200, {'content-type':'text/html;charset=utf-8'});
    /*response of the server*/
    
    response.write(document.getElementById("contenedor"));
    
    console.log('server request');
    response.end();
});

server.listen(3000);

console.log('ejecutando test server');
